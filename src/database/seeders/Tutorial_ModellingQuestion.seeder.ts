import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { Modelling_QuestionEntity } from '../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity} from '../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from '../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';
import { Multiplechoice_QuestionEntity } from '../../modules/tutorial/multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from '../../modules/tutorial/multiplechoice_question_answer/multiplechoice_question_answer.entity';
import { TestEntity } from '../../modules/tutorial/test/test.entity';
import { UserEntity } from '../../modules/user/user.entity';
import { Tg_IntroEntity } from '../../modules/tutorial/tg_intro/tg_intro.entity';
import { Tg_ModellingEntity } from '../../modules/tutorial/tg_modelling/tg_modelling.entity';
import { Tg_MultiplechoiceEntity } from '../../modules/tutorial/tg_multiplechoice/tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from '../../modules/tutorial/tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import uuid = require('uuid');
enum tg{
    beginner,
    advanced,
    professional
}
export default class SeedModellignQuestion implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        console.log("Grabbing Beginner Category ID");

        const getCategory_id_adv = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
        .getOne();
        console.log("Grabbing Advanced Category ID");

        const getCategory_id_prof = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Professional'})
        .getOne();
        console.log("Grabbing Advanced Category ID");
    
        const seedRule = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_RulesEntity)
        .values([
           {
            modelling_rule_text: "Standart Regeln für BPMN",
            },
        ])
        .execute();
        console.log("Seeding Rules \n");

        const mult_qs_id = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .where("multiplechoice_question.multiplechoice_question_text = :multiplechoice_question_text",{multiplechoice_question_text:'Erste Sinnvolle MC Question'})
        .getOne();

        console.log("Grabbing Multiplechoice Qs Text");
        console.log(seedRule.identifiers[0].modelling_rule_id)
        const seedrule_id = await getRepository(Modelling_RulesEntity)
        .createQueryBuilder("modelling_rules")
        .where("modelling_rules.modelling_rule_id= :modelling_rule_id",{modelling_rule_id:seedRule.identifiers[0].modelling_rule_id})
        .getOne(); 
        console.log(seedrule_id)
        console.log("Grabbing Rule ID \n");
        const seedQsRule = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_Question_RulesEntity)
        .values([
            {
                modelling_question_used:"standart",
                modelling_rule_id: seedrule_id.modelling_rule_id,
            }
        ])
        .execute();    


        
        const seedqsrule_id = await getRepository(Modelling_Question_RulesEntity)
        .createQueryBuilder("modelling_question_rules")
        .where("modelling_question_rules.modelling_rule_id = :modelling_rule_id",{modelling_rule_id: seedrule_id.modelling_rule_id})
        .getOne();
        console.log(seedqsrule_id)
        console.log("Grabbing Question Specific Rule");
     
        const otherdata = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_QuestionEntity)
        .values([

            // --- Level 1 - Beginner ---
            // 1. Processing a customer inquiry
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). The <strong>order</strong> is being <strong>prepared</strong> (Task) and then <strong>send</strong> (Task). The <strong>process ends</strong> with the <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Die <strong>Bestellung</strong> wird <strong>vorbereitet</strong> (Task) und anschließend <strong>versendet</strong> (Task). Der <strong>Prozess endet</strong> mit der <strong>abgeschlossenen Kundenanfrage</strong> (End-Event)</p>`,
                mod_qs_question_description:"1. Processing a customer inquiry",
                mod_qs_question_description_de:"1. Bearbeiten einer Kundenanfrage",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

            // 2. Processing a customer inquiry with branching
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Task). Then it is checked whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway). <strong>If so</strong>, the <strong>order</strong> is <strong>sent</strong> (Task). <strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> (task). Both cases are merged again (XOR gateway). The <strong>process ends</strong> with the <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway). Wenn <strong>ja</strong>, wird die <strong>Bestellung versendet</strong> (Task). Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> (Task). Beide Fälle werden wieder zusammengeführt (XOR-Gateway). Der <strong>Prozess endet</strong> mit der <strong>abgeschlossenen Kundenanfrage</strong> (End-Event).</p>`,
                mod_qs_question_description:"2. Processing a customer inquiry with branching",
                mod_qs_question_description_de:"2. Bearbeiten einer Kundenanfrage mit Verzweigung",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. Customer inquiry with option for process repetition
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (task).</p>
                <p>Then it is checked whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway). <strong>If so</strong>, the <strong>order</strong> is <strong>sent</strong> (Task). <strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> and <strong>another product</strong> is <strong>proposed</strong> to the customer (2 tasks). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the <strong>order preparation</strong>.&nbsp;</p>
                <p>The paths after sending the order and the rejected product proposal are merged (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway). Wenn <strong>ja</strong>, wird die <strong>Bestellung versendet</strong> (Task). Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (2 Tasks). <strong>Interessiert&nbsp;</strong>sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p>
                <p>Die Pfade nach dem Versenden der Bestellung und dem abgelehnten Produktvorschlag werden vereinigt (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event)</p>`,
                mod_qs_question_description:"3. Customer inquiry with option for process repetition",
                mod_qs_question_description_de:"3. Kundenanfrage mit Option auf Prozesswiederholung",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 4. Customer inquiry with parallel processes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Task).</p>
                <p>Then it is checked whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway).&nbsp;</p>
                <p>If <strong>yes</strong>, the <strong>delivery</strong> is <strong>prepared</strong> (task). Then the following happens in <strong>parallel</strong> (parallel gateway):</p><p>&nbsp;</p>

                <p>The <strong>order</strong> and the <strong>shipping confirmation</strong> are <strong>sent</strong> (2 tasks). The two paths are <strong>merged</strong> again (parallel gateway).</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> and <strong>another product&nbsp;</strong>is<strong>&nbsp;proposed</strong> to the customer (2 tasks). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the<strong>&nbsp;order preparation.</strong></p><p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>The path after sending the order and shipping confirmation is <strong>merged</strong> with the path of the rejected product proposal (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, wird der <strong>Versand vorbereitet</strong> (Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>

                <p>Die <strong>Bestellung</strong> und die <strong>Versandbestätigung</strong> werden <strong>versendet</strong> (2 Tasks). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway).</p><p>&nbsp;</p>

                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (2 Tasks). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>

                <p>Der Pfad nach dem Versenden der Bestellung und Versandbestätigung wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event)</p><p>&nbsp;</p>`,
                mod_qs_question_description:"4. Customer inquiry with parallel processes",
                mod_qs_question_description_de:"4. Kundenanfrage mit parallelen Vorgängen",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Order process including manual operation
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). After that the <strong>order</strong> is <strong>prepared</strong> (Task).</p>
                <p>Then it is checked whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, the <strong>delivery&nbsp;</strong>is<strong>&nbsp;prepared</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> and the <strong>shipping confirmation</strong> are <strong>sent</strong> (2 tasks). The two paths are <strong>merged</strong> again (parallel gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> and <strong>another product</strong> is <strong>proposed</strong> to the customer (2 tasks). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the <strong>order</strong> <strong>preparation</strong>.</p><p>&nbsp;</p>
                <p>The path after sending the order and shipping confirmation is <strong>merged</strong> with the path of the rejected product proposal (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, wird der <strong>Versand vorbereitet</strong> (Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> und die <strong>Versandbestätigung</strong> werden <strong>versendet</strong> (2 Tasks). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (2 Tasks). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>
                <p>Der Pfad nach dem Versenden der Bestellung und Versandbestätigung wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event)</p>`,
                mod_qs_question_description:"5. Order process including manual operation",
                mod_qs_question_description_de:"5. Bestellprozess inklusive manuellem Vorgang",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Order process inluding user task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Task).</p>
                <p>Then it is checked whether the ordered <strong>product&nbsp;</strong>is<strong>&nbsp;available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, the <strong>delivery</strong> is <strong>prepared</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> is <strong>sent</strong> (User Task); the <strong>shipping confirmation&nbsp;</strong>is also<strong>&nbsp;sent</strong> (Task). The two paths are <strong>merged</strong> again (Parallel Gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> and <strong>another product&nbsp;</strong>is<strong>&nbsp;proposed</strong> to the customer (2 tasks). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the <strong>order</strong> <strong>preparation</strong>.&nbsp;</p><p>&nbsp;</p>
                <p>The path after sending the order and shipping confirmation is <strong>merged</strong> with the path of the rejected product proposal (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung</strong> <strong>vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p><p>&nbsp;</p>
                <p>Wenn <strong>ja</strong>, wird der <strong>Versand vorbereitet</strong> (Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung</strong> <strong>versendet</strong> (Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (2 Tasks). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn</strong> <strong>Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>
                <p>Der Pfad nach dem Versenden der Bestellung und Versandbestätigung wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event).</p>`,
                mod_qs_question_description:"6. Order process including user task",
                mod_qs_question_description_de:"6. Bestellprozess inklusive User Task",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Order process including send an receive task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Receive Task).</p>
                <p>Then it is checked whether the ordered <strong>product&nbsp;</strong>is<strong>&nbsp;available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, the <strong>delivery</strong> is <strong>prepared</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> is <strong>sent</strong> (User Task); the <strong>shipping confirmation&nbsp;</strong>is also<strong>&nbsp;sent</strong> (Send Task). The two paths are <strong>merged</strong> again (Parallel Gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> and <strong>another product&nbsp;</strong>is<strong>&nbsp;proposed</strong> to the customer (2 tasks). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the <strong>order</strong> <strong>preparation</strong>.&nbsp;</p><p>&nbsp;</p>
                <p>The path after sending the order and shipping confirmation is <strong>merged</strong> with the path of the rejected product proposal (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung</strong> <strong>vorbereitet</strong> (Receive Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p><p>&nbsp;</p>
                <p>Wenn <strong>ja</strong>, wird der <strong>Versand vorbereitet</strong> (Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung</strong> <strong>versendet</strong> (Send Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (2 Tasks). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn</strong> <strong>Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>
                <p>Der Pfad nach dem Versenden der Bestellung und Versandbestätigung wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event).</p>`,
                mod_qs_question_description:"7. Order process including Send and Receive Task",
                mod_qs_question_description_de:"7. Bestellprozess inklusive Send und Receive Task",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 8. Order process including script task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Receive Task).</p>
                <p>Then it is checked whether the ordered <strong>product&nbsp;</strong>is<strong>&nbsp;available</strong> (XOR gateway).&nbsp;</p>
                <p><strong>If so</strong>, the <strong>delivery</strong> is <strong>prepared</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> is <strong>sent</strong> (User Task); the <strong>shipping confirmation&nbsp;</strong>is also<strong>&nbsp;sent</strong> (Send Task). The two paths are <strong>merged</strong> again (Parallel Gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> (Task) and <strong>another product&nbsp;</strong>is<strong>&nbsp;proposed</strong> to the customer (Script Task). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is <strong>interest</strong>, the process returns to the <strong>order</strong> <strong>preparation</strong>.&nbsp;</p><p>&nbsp;</p>
                <p>The path after sending the order and shipping confirmation is <strong>merged</strong> with the path of the rejected product proposal (XOR gateway). The <strong>process ends</strong> with a <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung</strong> <strong>vorbereitet</strong> (Receive Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, wird der <strong>Versand vorbereitet</strong> (Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung</strong> <strong>versendet</strong> (Send Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> (Task) und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (Script Task). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). <strong>Wenn</strong> <strong>Interesse</strong> besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>
                <p>Der Pfad nach dem Versenden der Bestellung und Versandbestätigung wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> mit einer <strong>abgeschlossenen Kundenanfrage</strong> (End-Event)</p>`,
                mod_qs_question_description:"8. Order process including Script Task",
                mod_qs_question_description_de:"8. Bestellprozess inklusive Script Task",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 9. Order process including pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>The <strong>PC Build GmbH</strong> (pool) consists of a <strong>shipping department</strong> and a <strong>customer service</strong> department (2 lanes)</p>
                <p>The <strong>process starts</strong> with the <strong>receipt</strong> of a <strong>customer request</strong> (Start-Event) by the <strong>customer service</strong>. The customer service <strong>prepares</strong> the <strong>order</strong> (Receive Task). It then checks whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, it <strong>notifies</strong> the <strong>shipping department</strong> (task). This task is followed by a <strong>message</strong> (Intermediate Message Throw Event). The <strong>message</strong> <strong>arrives</strong> in the <strong>shipping</strong> <strong>department</strong> (Intermediate Message Catch Event). The <strong>shipping department prepares&nbsp;</strong>the<strong>&nbsp;delivery</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> is <strong>sent</strong> (User Task); the <strong>shipping confirmation&nbsp;</strong>is also<strong>&nbsp;sent</strong> (Send Task). The two paths are <strong>merged</strong> again (Parallel Gateway). The <strong>shipping department</strong> then <strong>notifies Customer Service</strong> (Task). The task is followed by a <strong>message</strong> (Intermediate Message Throw Event). <strong>Customer Service receives</strong> the <strong>message</strong> (Intermediate Message Catch Event) and then <strong>completes</strong> the <strong>customer request</strong> (Task).</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> (task) and <strong>another product&nbsp;</strong>is<strong>&nbsp;proposed</strong> to the customer (script task). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway). If there is interest, the process returns to the <strong>order preparation</strong>.&nbsp;</p><p>&nbsp;</p>
                <p>The path after completing the customer request is <strong>merged</strong> with the path of the rejected product proposal (XOR-Gateway). The <strong>process ends</strong> in Customer Service with a <strong>completed customer request</strong> (end event).</p>`,
                mod_qs_question_text_de:`<p>Die <strong>PC Build GmbH</strong> (Pool) setzt sich aus einer <strong>Versandabteilung</strong> und einem <strong>Kundenservice</strong> zusammen (2 Lanes).</p>
                <p>Der <strong>Prozess startet</strong> mit dem <strong>Eingang einer Kundenanfrage</strong> (Start-Event) beim <strong>Kundenservice</strong>. Der Kundenservice <strong>bereitet</strong> die <strong>Bestellung vor</strong> (Receive Task). Anschließend prüft er, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, <strong>benachrichtigt</strong> er die <strong>Versandabteilung</strong> (Task). Auf diesen Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Die <strong>Nachricht kommt</strong> in der Versandabteilung <strong>an</strong> (Intermediate Message Catch Event). In der <strong>Versandabteilung</strong> wird der <strong>Versand vorbereitet</strong> (Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung versendet&nbsp;</strong>(Send Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway). Die <strong>Versandabteilung</strong> <strong>benachrichtigt</strong> anschließend den <strong>Kundenservice</strong> (Task). Auf den Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Der <strong>Kundenservice</strong> <strong>erhält</strong> die <strong>Nachricht</strong> (Intermediate Message Catch Event) und <strong>schließt</strong> dann die <strong>Kundenanfrage ab</strong> (Task).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> (Task) und dem Kunden ein <strong>anderes Produkt vorgeschlagen</strong> (Script Task). <strong>Interessiert</strong> sich der Kunde für das vorgeschlagene <strong>Produkt</strong>? (XOR-Gateway). Wenn Interesse besteht, kehrt der Prozess zur <strong>Vorbereitung der Bestellung</strong> zurück.</p><p>&nbsp;</p>
                <p>Der Pfad nach dem Abschließen der Kundenanfrage wird mit dem Pfad des abgelehnten Produktvorschlags <strong>vereinigt</strong> (XOR-Gateway). Der <strong>Prozess endet</strong> im Kundenservice mit einer <strong>abgeschlossenen Kundenanfrage&nbsp;</strong>(End-Event).</p>`,
                mod_qs_question_description:"9. Order process including pool and lanes",
                mod_qs_question_description_de:"9. Bestellprozess inklusive Pool und Lanes",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 10. Order process including several pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>The <strong>PC Build GmbH</strong> (pool) consists of a <strong>shipping department</strong> and a <strong>customer service</strong> department (2 lanes). There is also a <strong>supplier</strong> (pool).</p>
                <p>The <strong>process starts</strong> with the <strong>receipt</strong> of a <strong>customer request</strong> (Start-Event) by the <strong>customer service</strong>. The customer service <strong>prepares</strong> the <strong>order</strong> (Receive Task). It then checks whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, it <strong>notifies</strong> the <strong>shipping department</strong> (task). This task is followed by a <strong>message</strong> (Intermediate Message Throw Event). The <strong>message arrives</strong> in the <strong>shipping department</strong> (Intermediate Message Catch Event). The <strong>shipping department prepares</strong> the <strong>delivery</strong> (Manual Task). Then the following happens in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order</strong> is <strong>sent</strong> (User Task); the <strong>shipping</strong> <strong>confirmation</strong> is also <strong>sent</strong> (Send Task). The two paths are <strong>merged</strong> again (Parallel Gateway). The <strong>shipping department</strong> then <strong>notifies Customer Service</strong> (Task). The task is followed by a <strong>message</strong> (Intermediate Message Throw Event).<strong>&nbsp;Customer Service receives&nbsp;</strong>the<strong>&nbsp;message&nbsp;</strong>(Intermediate Message Catch Event) and then <strong>completes</strong> the <strong>customer request</strong> (Task). The <strong>process</strong> then <strong>ends</strong> with the <strong>completed customer request&nbsp;</strong>(end event).</p><p>&nbsp;</p>
                <p><strong>If not</strong>, a <strong>subsequent</strong><strong>delivery&nbsp;</strong>is<strong>&nbsp;requested</strong> (task). After the task, a <strong>message</strong> is sent to the <strong>supplier</strong> (Intermediate Message Throw Event). The <strong>supplier receives&nbsp;</strong>the<strong>&nbsp;message</strong> (Intermediate Message Catch Event), <strong>takes&nbsp;</strong>the<strong>&nbsp;order</strong> (task), and <strong>delivers&nbsp;</strong>the<strong>&nbsp;product</strong> (task). The <strong>supplier</strong><strong>notifies</strong> the <strong>customer service</strong> of PC Build GmbH (Intermediate Message Throw Event). <strong>Customer Service receives</strong> the <strong>notification</strong> (Intermediate Message Catch Event), which then continues with the check whether the ordered <strong>product&nbsp;</strong>is<strong>&nbsp;available</strong>.</p>`,
                mod_qs_question_text_de:`<p>Die <strong>PC Build GmbH</strong> (Pool) setzt sich aus einer <strong>Versandabteilung</strong> und einem <strong>Kundenservice</strong> zusammen (2 Lanes). Einen <strong>Lieferanten</strong> gibt es ebenfalls (Pool).</p>
                <p>Der <strong>Prozess startet</strong> mit dem <strong>Eingang einer Kundenanfrage</strong> (Start-Event) beim <strong>Kundenservice</strong>. Der Kundenservice <strong>bereitet</strong> die <strong>Bestellung vor</strong> (Receive Task). Anschließend prüft er, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, <strong>benachrichtigt</strong> er die <strong>Versandabteilung</strong> (Task). Auf diesen Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Die <strong>Nachricht kommt</strong> in der Versandabteilung <strong>an</strong> (Intermediate Message Catch Event). In der <strong>Versandabteilung</strong> wird der <strong>Versand vorbereitet&nbsp;</strong>(Manual Task). Danach passiert folgendes <strong>parallel</strong> (Parallel-Gateway):</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung versendet&nbsp;</strong>(Send Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway). Die <strong>Versandabteilung benachrichtigt</strong> anschließend den <strong>Kundenservice</strong> (Task). Auf den Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Der <strong>Kundenservice erhält&nbsp;</strong>die<strong>&nbsp;Nachricht&nbsp;</strong>(Intermediate Message Catch Event) und <strong>schließt</strong> dann die <strong>Kundenanfrage ab</strong> (Task). Daraufhin <strong>endet</strong> der <strong>Prozess</strong> mit der <strong>abgeschlossenen Kundenanfrage&nbsp;</strong>(End-Event).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird eine<strong>&nbsp;Nachlieferung beantragt&nbsp;</strong>(Task). Nach dem Task wird eine <strong>Nachricht an&nbsp;</strong>den<strong>&nbsp;Lieferanten</strong> gesendet (Intermediate Message Throw Event). Der <strong>Lieferant</strong> <strong>erhält</strong> die <strong>Nachricht</strong> (Intermediate Message Catch Event), <strong>nimmt</strong> die <strong>Nachbestellung auf</strong> (Task) und <strong>liefert</strong> das <strong>Produkt</strong> (Task). Der <strong>Lieferant benachrichtigt</strong> (Intermediate Message Throw Event) den <strong>Kundenservice</strong> der PC Build GmbH. Der <strong>Kundenservice erhält</strong> die <strong>Benachrichtigung</strong> (Intermediate Message Catch Event), bei der es nun wieder mit der Prüfung, ob das bestellte <strong>Produkt vorhanden</strong> ist, weitergeht</p>`,
                mod_qs_question_description:"10. Order process including several pools and lanes",
                mod_qs_question_description_de:"10. Bestellprozess inklusive mehrerer Pools und Lanes",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 11. Final order process including multiple pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool) is composed of a <strong>shipping department</strong> and a <strong>customer service</strong> department (2 lanes). There is also a <strong>supplier</strong> (pool).</p><p>&nbsp;</p>
                <p>The <strong>process starts</strong> with the <strong>receipt</strong> of a <strong>customer request</strong> (Start-Event) by the <strong>customer service</strong>. The <strong>customer service</strong> <strong>prepares</strong> the <strong>order</strong> (Receive Task). It then checks whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If so</strong>, it <strong>notifies</strong> the <strong>shipping department</strong> (task). This task is followed by a <strong>message</strong> (Intermediate Message Throw Event). The <strong>message</strong> <strong>arrives</strong> in the shipping department (Intermediate Message Catch Event). The <strong>shipping department</strong> <strong>prepares&nbsp;</strong>the<strong>&nbsp;delivery</strong> (Manual Task). Then the following steps are executed in <strong>parallel</strong> (Parallel Gateway):</p><p>&nbsp;</p>
                <p>The <strong>order&nbsp;</strong>is<strong>&nbsp;sent</strong> (User Task); the <strong>shipping confirmation&nbsp;</strong>is also<strong>&nbsp;sent&nbsp;</strong>(Send Task). The two paths are <strong>merged</strong> again (Parallel Gateway). The <strong>shipping department</strong> then <strong>notifies Customer Service</strong> (Task). The task is followed by a <strong>message</strong> (Intermediate Message Throw Event). <strong>Customer Service receives&nbsp;</strong>the<strong>&nbsp;message</strong> (Intermediate Message Catch Event) and then <strong>completes</strong> the <strong>customer request</strong> (End Event).&nbsp;</p><p>&nbsp;</p>
                <p><strong>If not</strong>, Customer Service checks <strong>whether&nbsp;</strong>the<strong>&nbsp;product can be reordered</strong> (task). Can the product be reordered? (XOR gateway).</p>
                <p>If <strong>yes</strong>, a <strong>subsequent delivery</strong> is <strong>requested</strong> (task). After the task, a <strong>message</strong> is <strong>sent</strong> to the <strong>supplier</strong> (Intermediate Message Throw Event). The <strong>supplier receives&nbsp;</strong>the<strong>&nbsp;message</strong> (Intermediate Message Catch Event), <strong>takes&nbsp;</strong>the<strong>&nbsp;order&nbsp;</strong>(task) and <strong>delivers&nbsp;</strong>the<strong>&nbsp;product</strong> (task). The <strong>supplier notifies</strong> the <strong>customer service</strong> of PC Build GmbH (Intermediate Message Throw Event). <strong>Customer Service receives&nbsp;</strong>the<strong>&nbsp;notification</strong> (Intermediate Message Catch Event), which then continues with the check whether the ordered <strong>product&nbsp;</strong>is<strong>&nbsp;available</strong>.</p><p>&nbsp;</p>
                <p><strong>If not</strong>, the <strong>order&nbsp;</strong>is<strong>&nbsp;rejected</strong> (Task) and <strong>another product&nbsp;</strong>is<strong>&nbsp;suggested</strong> (Script Task). Is the customer <strong>interested</strong> in the proposed <strong>product</strong>? (XOR gateway).</p><p>&nbsp;</p>
                <p>&nbsp; &nbsp; If <strong>yes</strong>, the customer service <strong>prepares</strong> the <strong>order</strong> again.</p><p>&nbsp;</p>
                <p>If <strong>no</strong>, the process path is <strong>merged</strong> with the path of the completed customer inquiry (XOR gateway). The <strong>process ends</strong> with the <strong>completed customer inquiry</strong> (End Event).</p>`,
                mod_qs_question_text_de:`<p>Die <strong>PC Build GmbH</strong> (Pool) setzt sich aus einer <strong>Versandabteilung</strong> und einem <strong>Kundenservice</strong> zusammen (2 Lanes). Einen <strong>Lieferanten</strong> gibt es ebenfalls (Pool).</p><p>&nbsp;</p>
                <p>Der <strong>Prozess startet</strong> mit dem <strong>Eingang einer Kundenanfrage</strong> (Start-Event) beim <strong>Kundenservice</strong>. Der <strong>Kundenservice bereitet&nbsp;</strong>die<strong>&nbsp;Bestellung vor</strong> (Receive Task). Anschließend prüft er, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway).</p><p>&nbsp;</p>
                <p>Wenn <strong>ja</strong>, <strong>benachrichtigt</strong> er die <strong>Versandabteilung</strong> (Task). Auf diesen Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Die <strong>Nachricht kommt</strong> in der Versandabteilung <strong>an</strong> (Intermediate Message Catch Event). In der <strong>Versandabteilung</strong> wird der <strong>Versand vorbereitet&nbsp;</strong>(Manual Task). Danach werden <strong>parallel</strong> folgende Schritte ausgeführt (Parallel-Gateway):</p><p>&nbsp;</p><p>&nbsp;</p>
                <p>Die <strong>Bestellung</strong> wird <strong>versendet</strong> (User Task); ebenso wird die <strong>Versandbestätigung versendet&nbsp;</strong>(Send Task). Die beiden Pfade werden wieder <strong>zusammengeführt</strong> (Parallel-Gateway). Die <strong>Versandabteilung benachrichtigt</strong> anschließend den <strong>Kundenservice</strong> (Task). Auf den Task folgt eine <strong>Nachricht</strong> (Intermediate Message Throw Event). Der <strong>Kundenservice erhält&nbsp;</strong>die<strong>&nbsp;Nachricht</strong> (Intermediate Message Catch Event) und <strong>schließt</strong> dann die <strong>Kundenanfrage ab</strong> (End-Event).</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, überprüft der Kundenservice, <strong>ob</strong> das <strong>Produkt nachbestellt werden kann</strong> (Task). Kann das Produkt nachbestellt werden? (XOR-Gateway).</p>
                <p>Wenn <strong>ja</strong>, wird eine <strong>Nachlieferung beantragt</strong> (Task). Nach dem Task wird eine <strong>Nachricht</strong> <strong>an</strong> den <strong>Lieferanten</strong> gesendet (Intermediate Message Throw Event). Der <strong>Lieferant erhält&nbsp;</strong>die<strong>&nbsp;Nachricht</strong> (Intermediate Message Catch Event), <strong>nimmt</strong> die <strong>Nachbestellung auf</strong> (Task) und <strong>liefert</strong> das <strong>Produkt</strong> (Task). Der <strong>Lieferant</strong> <strong>benachrichtigt</strong> (Intermediate Message Throw Event) den <strong>Kundenservice</strong> der PC Build GmbH. Der <strong>Kundenservice erhält&nbsp;</strong>die<strong>&nbsp;Benachrichtigung</strong> (Intermediate Message Catch Event), bei der es nun wieder mit der Prüfung, ob das bestellte <strong>Produkt vorhanden</strong> ist, weitergeht.</p><p>&nbsp;</p>
                <p>Wenn <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> (Task) und ein <strong>anderes Produkt vorgeschlagen</strong> (Script Task). Hat der Kunde <strong>Interesse</strong> am vorgeschlagenen <strong>Produkt</strong>? (XOR-Gateway).</p><p>&nbsp;</p>
                <p>Falls <strong>ja</strong>, <strong>bereitet</strong> der Kundenservice wieder die <strong>Bestellung vor</strong>.</p><p>&nbsp;</p>
                <p>Falls <strong>nein</strong>, wird der Prozesspfad mit dem Pfad der abgeschlossenen Kundenanfrage <strong>vereinigt</strong> (XOR-Gateway). Mit der <strong>abgeschlossenen Kundenanfrage</strong> <strong>endet&nbsp;</strong>der<strong>&nbsp;Prozess&nbsp;</strong>(End Event).</p>`,
                mod_qs_question_description:"11. Final order process including multiple pools and lanes",
                mod_qs_question_description_de:"11. Finaler Bestellprozess inklusive mehrerer Pools und Lanes",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

            // --- Level 2 - Advanced ---
            // 1. Customer complaints
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p>
                  <br>We <strong>receive</strong> a <strong>customer complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (Task) and <strong>handle</strong> the <strong>complaint</strong> in the next step (Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>formulate</strong> the <strong>answer</strong> (Task). All <strong>three</strong> <strong>tasks</strong> are formed as "<strong>user tasks</strong>".&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process</strong> <strong>ends</strong> when we <strong>send</strong> an answer to the customer (Message-End-Event).</p>`,
                mod_qs_question_text_de:`<p><strong>&nbsp;PC Build GmbH&nbsp;</strong>(Pool).&nbsp;Es geht eine<strong>&nbsp;Kundenreklamation</strong> bei uns ein (Message-Start-Event). 
                Wir nehmen die <strong>Beschwerde</strong> auf (Task) und bearbeiten die Beschwerde im nächsten Schritt (Task). Im Anschluss <strong>formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(Task).Alle drei Tasks werden als “User-Task” gebildet. Der Prozess <strong>endet&nbsp;</strong>damit, dass wir dem Kunden eine <strong>Antwort senden&nbsp;</strong>(Message-End-Event).</p>`,
                mod_qs_question_description:"1. Customer Complaints",
                mod_qs_question_description_de:"1. Kundenreklamation",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
             // 2. Customer complaints extended by business rule
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a <strong>customer complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task), the <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>formulate</strong> the <strong>answer</strong> (User Task).</p>
                <p>&nbsp;</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH&nbsp;</strong>(Pool).&nbsp;Es geht eine <strong>Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde</strong> auf (User Task), die <strong>Beschwerde&nbsp;</strong>wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task). Im Anschluss <strong>formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(User Task). Der Prozess endet damit, dass wir dem Kunden eine <strong>Antwort senden&nbsp;</strong>(Message-End-Event).</p>`,
                mod_qs_question_description:"2. Customer Complaints extended by business rule",
                mod_qs_question_description_de:"2. Kundenreklamation durch Business Rule erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. Customer complaints extended by data object
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a <strong>customer complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented by</strong> a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined</strong> rule (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>formulate</strong> the <strong>answer</strong> (user task), which is also <strong>represented</strong> as a <strong>document</strong> (data object).</p>
                <p>&nbsp;</p>
                <p>The <strong>process</strong> <strong>ends</strong> when we <strong>send</strong> an answer to the customer (Message-End-Event).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH&nbsp;</strong>(Pool). Es geht eine <strong>Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event). 

                Wir nehmen die <strong>Beschwerde&nbsp;</strong>auf (User Task) welche nun durch ein <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). 
                
                Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task). Im Anschluss <strong>formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). 
                
                Der Prozess endet damit, dass wir dem Kunden eine <strong>Antwort senden&nbsp;</strong>(Message-End-Event).</p>
                `,
                mod_qs_question_description:"3. Customer Complaints extended by data object",
                mod_qs_question_description_de:"3. Kundenreklamation um Datenobjekt erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
             // 4. Customer complaints extended by timer event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a <strong>customer complaint</strong> (Message-Start-Event). We <strong>take</strong> <strong>up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> <strong>by</strong> a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined</strong> rule (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).
                  <br>&nbsp;
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>formulate</strong> the <strong>answer</strong> (user task), which is also <strong>represented</strong> as a <strong>document</strong> (data object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We <strong>send</strong> the <strong>answer</strong> (send task). Then we <strong>wait</strong> for a <strong>response</strong> from the <strong>customer</strong> until a <strong>message arrives</strong> (Intermediate Timer Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH&nbsp;</strong>(Pool). Es geht eine <strong>Kundenreklamation</strong> bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde</strong> auf (User Task) welche nun durch ein <strong>Dokument</strong> dargestellt wird (Datenobjekt).&nbsp;</p>
                <p>Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task). Im Anschluss <strong>formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt).&nbsp;</p>
                <p>Wir versenden die <strong>Antwort</strong> (Send-Task). Danach <strong>warten&nbsp;</strong>wir so lange auf eine Antwort des Kunden, bis eine <strong>Nachricht eintrifft&nbsp;</strong>(Intermediate Timer-Event). Der Prozess endet damit, dass wir die <strong>Reklamation abschließen&nbsp;</strong>(End-Event).</p>`,
                mod_qs_question_description:"4. Customer Complaints extended by Timer-Event",
                mod_qs_question_description_de:"4. Kundenreklamation um Timer Event erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Customer complaints extended by intermediate event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a customer <strong>complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>formulate</strong> the <strong>answer</strong> (user task), which is also <strong>represented</strong> as a <strong>document</strong> (data object). We <strong>send</strong> the <strong>answer</strong> (send task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>wait</strong> for a <strong>response</strong> from the <strong>customer</strong> until a <strong>message arrives</strong> (Intermediate Timer Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In the <strong>task</strong> "<strong>handle complaint</strong>" the <strong>case</strong> can <strong>occur</strong> that a <strong>complaint</strong> <strong>cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>notify</strong> the <strong>customer</strong> about the <strong>missing information</strong> (User Task), wait for a <strong>response</strong> (Intermediate Timer Event) and <strong>come back</strong> before the <strong>"Take up the complaint" task</strong> (XOR Gateway).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH&nbsp;</strong>(Pool). Es geht eine <strong>Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde&nbsp;</strong>auf (User Task) welche nun durch ein <strong>Dokument</strong> dargestellt wird (Datenobjekt). Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task).&nbsp;</p>
                <p>Im Anschluss <strong>formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). Wir versenden die <strong>Antwort</strong> (Send-Task). Danach <strong>warten&nbsp;</strong>wir so lange auf eine Antwort des Kunden, bis eine <strong>Nachricht eintrifft&nbsp;</strong>(Intermediate Timer-Event). Der Prozess endet damit, dass wir die <strong>Reklamation abschließen</strong> (End-Event).&nbsp;</p>
                <p>Im Task “<strong>Beschwerde bearbeiten</strong>” kann der Fall auftreten, dass eine Beschwerde <strong>nicht&nbsp;</strong>bearbeitet werden kann (Intermediate Error Event im Task). Danach <strong>benachrichtigen&nbsp;</strong>wir den <strong>Kunden&nbsp;</strong>über die f<strong>ehlende Information&nbsp;</strong>(User Task),<strong>&nbsp;warten&nbsp;</strong>auf eine <strong>Antwort&nbsp;</strong>(Intermediate Timer Event) und kommen <strong>zurück</strong> vor den Task “Beschwerde aufnehmen” (XOR-Gateway).</p>
                <p>&nbsp;</p>`,
                mod_qs_question_description:"5. Customer Complaints extended by Intermediate-Event",
                mod_qs_question_description_de:"5. Kundenreklamation um Intermediate Error Event erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Customer complaints extended by inclusive gateway
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a customer<strong>&nbsp;complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>A <strong>branch</strong> is to be <strong>created</strong> (Inclusive-Gateway). In <strong>case</strong> the customer has <strong>already submitted</strong> a <strong>complaint</strong>, but we <strong>have not</strong> yet been <strong>able</strong> to <strong>handle</strong> it, a <strong>"10% discount voucher"</strong> should be <strong>noted</strong> (Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>If a <strong>complaint</strong> has already been <strong>submitted</strong> and <strong>handled</strong>, a <strong>giveaway</strong> will be <strong>noted</strong> (Task). <strong>Both cases</strong> should be <strong>possible</strong> (Inclusive-Gateway).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In <strong>case</strong> <strong>none</strong> of the <strong>conditions</strong> apply, the next <strong>task</strong> will be <strong>carried</strong> out (default path).</p>
                <p>Subsequently, we <strong>formulate&nbsp;</strong>the <strong>answer</strong> (User Task), which is also <strong>displayed</strong> as a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We <strong>send</strong> the <strong>answer</strong> (Send task). Then we <strong>wait</strong> for a <strong>response</strong> from the <strong>customer</strong> until a <strong>message</strong> <strong>arrives</strong> (intermediate message event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In the <strong>task</strong> "<strong>handle complaint</strong>" the <strong>case</strong> can <strong>occur</strong> that a <strong>complaint</strong> <strong>cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>notify</strong> the <strong>customer</strong> about the <strong>missing information</strong> (User Task), wait for a <strong>response</strong> (Intermediate Timer Event) and <strong>come back</strong> before the <strong>"Take up the complaint" task</strong> (XOR Gateway).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH&nbsp;</strong>(Pool). Es geht eine <strong>Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde&nbsp;</strong>auf (User Task) welche nun durch ein <strong>Dokument</strong> dargestellt wird (Datenobjekt). Die Beschwerde wird durch eine zuvor festgelegte Regel<strong>&nbsp;kategorisiert</strong> (Business Rule Task) und wir bearbeiten die Beschwerde (User Task).&nbsp;</p>
                <p>Eine <strong>Verzweigung&nbsp;</strong>soll erstellt werden (Inclusive-Gateway). Für den Fall, dass der Kunde bereits eine Beschwerde eingereicht hat, diese aber noch nicht durch uns bearbeitet werden konnte, soll ein <strong>“10%-Rabattgutschein”&nbsp;</strong>vermerkt werden (Task). Sollte bereits eine Beschwerde eingereicht und bearbeitet worden sein, wird ein<strong>&nbsp;Giveaway&nbsp;</strong>vermerkt (Task). Beide Fälle sollten möglich sein (Inclusive-Gateway). Für den Fall, dass keine der Bedingungen zutrifft wird in den nächsten Task <strong>übergegangen</strong> (Default-Pfad).</p>
                <p>Im Anschluss <strong>formulieren</strong> wir die<strong>&nbsp;Antwort&nbsp;</strong>(User Task), welche auch als<strong>&nbsp;Dokument</strong> dargestellt wird (Datenobjekt). Wir versenden die Antwort (Send-Task). Danach<strong>&nbsp;warten</strong> wir so lange auf eine Antwort des Kunden, bis eine<strong>&nbsp;Nachricht eintrifft</strong> (Intermediate Message-Event). Der <strong>Prozess endet</strong> damit, dass wir die<strong>&nbsp;Reklamation abschließen</strong> (End-Event).&nbsp;</p>
                <p>Im Task “Beschwerde bearbeiten” kann der Fall auftreten, dass eine Beschwerde nicht bearbeitet werden kann (Intermediate Error Event im Task). Danach benachrichtigen wir den Kunden über die <strong>Fehlende Information&nbsp;</strong>(User Task), <strong>warten</strong> auf eine Antwort (Intermediate Timer Event) und kommen zurück vor den Task <strong>“Beschwerde aufnehmen”&nbsp;</strong>(XOR-Gateway).</p>
                <p>&nbsp;</p>`,
                mod_qs_question_description:"6. Customer Complaints extended by Inclusive-Gateway",
                mod_qs_question_description_de:"6. Kundenreklamation um Inclusive Gateway erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Customer complaints extended by terminate event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a customer <strong>complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>A <strong>branch</strong> is to be <strong>created</strong> (Inclusive-Gateway). In <strong>case</strong> the <strong>customer</strong> has <strong>already submitted</strong> a <strong>complaint</strong> but we <strong>have not</strong> yet been <strong>able</strong> to <strong>process</strong> it, a <strong>"10% discount voucher"</strong> should be <strong>noted</strong>.&nbsp;</p>
                <p>&nbsp;</p>
                <p>If a <strong>complaint</strong> has already been <strong>submitted</strong> and <strong>handled</strong>, a <strong>giveaway</strong> will be <strong>noted</strong>. Both <strong>cases</strong> should be <strong>possible</strong> (inclusive gateway).</p>
                <p>&nbsp;</p>
                <p>In <strong>case none</strong> of the <strong>conditions</strong> <strong>apply</strong>, the next <strong>task</strong> will be <strong>carried out</strong> (default path).</p>
                <p>Subsequently, we <strong>formulate</strong> the <strong>answer</strong> (User Task), which is also <strong>displayed</strong> as a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We <strong>send</strong> the <strong>answer</strong> (Send task). Then we <strong>wait</strong> for a <strong>response</strong> from the customer <strong>until</strong> a <strong>message arrives</strong> (intermediate message event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In the task <strong>"Process Complaint"</strong> the <strong>case</strong> can <strong>occur</strong> that a <strong>complaint cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>notify</strong> the <strong>customer</strong> about the <strong>missing information</strong> (User Task) and <strong>wait</strong> for a <strong>response</strong> (Intermediate Timer Event). If there is <strong>no response</strong> after more than <strong>14 days</strong> from the <strong>customer</strong> (Exclusive-Gateway), the customer <strong>complaint</strong> is <strong>archived</strong> (Terminate-Event).</p>
                <p>&nbsp;</p>
                <p>If an <strong>answer</strong> <strong>arrives</strong> in time, we <strong>come back</strong> before the task <strong>"Take up the complaint"</strong> (XOR-Gateway).</p>`,
                mod_qs_question_text_de:`<p>Inhalt<strong>: PC Build GmbH</strong> (Pool). Es geht eine<strong>&nbsp;Kundenreklamation</strong> bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde&nbsp;</strong>auf (User Task) welche nun durch ein <strong>Dokument</strong> dargestellt wird (Datenobjekt). Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task).&nbsp;</p>
                <p>Eine<strong>&nbsp;Verzweigung&nbsp;</strong>soll erstellt werden (Inclusive-Gateway). Für den Fall, dass der Kunde bereits eine Beschwerde eingereicht hat, diese aber noch nicht durch uns bearbeitet werden konnte, soll ein <strong>“10%-Rabattgutschein”&nbsp;</strong>vermerkt werden.</p>
                <p>&nbsp;Sollte bereits eine Beschwerde eingereicht und bearbeitet worden sein, wird ein <strong>Giveaway</strong> vermerkt. Beide Fälle sollten möglich sein (Inclusive-Gateway). Für den Fall, dass keine der Bedingungen zutrifft wird in den nächsten Task <strong>übergegangen&nbsp;</strong>(Default-Pfad).</p>
                <p>Im Anschluss<strong>&nbsp;formulieren&nbsp;</strong>wir die <strong>Antwort&nbsp;</strong>(User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). Wir versenden die Antwort (Send-Task). Danach<strong>&nbsp;warten</strong> wir so lange auf eine Antwort des Kunden, bis eine Nachricht eintrifft (Intermediate Message-Event). Der Prozess endet damit, dass wir die <strong>Reklamation abschließen</strong> (End-Event).&nbsp;</p>
                <p>Im Task <strong>“Beschwerde bearbeiten”</strong> kann der Fall auftreten, dass eine Beschwerde nicht bearbeitet werden kann (Intermediate Error Event im Task). Danach <strong>benachrichtigen wir den Kunden über die Fehlende Information</strong> (User Task) und<strong>&nbsp;warten</strong> auf eine Antwort (Intermediate Timer Event).&nbsp;</p>
                <p>Wenn <strong>nach&nbsp;</strong>mehr als <strong>14 Tagen</strong> keine Antwort mehr vom Kunden kommt (Exclusive-Gateway), wird die <strong>“Kundenbeschwerde archiviert”&nbsp;</strong>(Terminate-Event).</p>
                <p>Wenn eine Antwort rechtzeitig ankommt, kommen wir zurück vor den Task <strong>“Beschwerde aufnehmen”&nbsp;</strong>(XOR-Gateway).</p>`,
                mod_qs_question_description:"7. Customer Complaints extended by Terminate-Event",
                mod_qs_question_description_de:"7. Kundenreklamation um Terminate Event erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 8. Customer complaints extended by data stores
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH (pool)</strong></p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a customer <strong>complaint</strong> (Message-Start-Event). We <strong>take up</strong> the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object) and <strong>stored</strong> in a <strong>database</strong> (Data Store).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>A <strong>branch</strong> is to be <strong>created</strong> (Inclusive Gateway).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In <strong>case</strong> the customer has already <strong>submitted</strong> a <strong>complaint</strong>, but we <strong>have not</strong> yet been <strong>able</strong> to <strong>process</strong> it, a <strong>"10% discount voucher"</strong> should be <strong>noted</strong>.
                  <br>&nbsp;
                </p>
                <p>If a <strong>complaint</strong> has already been <strong>submitted</strong> and <strong>handled</strong>, a <strong>giveaway</strong> will be <strong>noted</strong>. Both <strong>cases</strong> should be <strong>possible</strong> (inclusive gateway).</p>
                <p>&nbsp;</p>
                <p>In <strong>case none</strong> of the <strong>conditions</strong> apply, the next <strong>task</strong> will be <strong>carried out</strong> (default path).</p>
                <p>Subsequently, we <strong>formulate</strong> the <strong>answer</strong> (User Task), which is also <strong>displayed</strong> as a <strong>document</strong> (Data Object).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We <strong>send</strong> the <strong>answer</strong> (Send task). Then we <strong>wait</strong> for a <strong>response</strong> from the <strong>customer</strong> until a <strong>message</strong> <strong>arrives</strong> (intermediate message event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In the task <strong>"Process Complaint"</strong> the case can <strong>occur</strong> that a <strong>complaint</strong> <strong>cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>We then <strong>notify</strong> the customer about the missing <strong>information</strong> (User Task) and <strong>wait</strong> for a <strong>response</strong> (Intermediate Timer Event). If there is <strong>no response</strong> after more than <strong>14 days</strong> from the <strong>customer</strong> (Exclusive-Gateway), the customer complaint is <strong>archived</strong> (Terminate-Event).</p>
                <p>&nbsp;</p>
                <p>If an <strong>answer</strong> <strong>arrives</strong> in time, we <strong>come back</strong> before the task <strong>"Take up the complaint"</strong> (XOR-Gateway).</p>`,
                mod_qs_question_text_de:`<p>Inhalt:<strong>&nbsp;PC Build GmbH</strong> (Pool). Es geht eine<strong>&nbsp;Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event). Wir nehmen die <strong>Beschwerde</strong> auf (User Task) welche nun durch ein <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt) und in einer<strong>&nbsp;Datenbank</strong> (Data-Store) hinterlegt wird. Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert</strong> (Business Rule Task) und wir <strong>bearbeiten die Beschwerde</strong> (User Task).&nbsp;</p>
                <p>Eine <strong>Verzweigung&nbsp;</strong>soll erstellt werden (Inclusive-Gateway). Für den Fall, dass der Kunde bereits eine Beschwerde eingereicht hat, diese aber noch nicht durch uns bearbeitet werden konnte, soll ein<strong>&nbsp;“10%-Rabattgutschein”</strong> vermerkt werden. Sollte bereits eine Beschwerde eingereicht und bearbeitet worden sein, wird ein <strong>Giveaway&nbsp;</strong>vermerkt.</p>
                <p>&nbsp;Beide Fälle sollten möglich sein (Inclusive-Gateway). Für den Fall, dass keine der Bedingungen zutrifft wird in den nächsten Task <strong>übergegangen</strong> (Default-Pfad).</p>
                <p>Im Anschluss<strong>&nbsp;formulieren&nbsp;</strong>wir die Antwort (User Task), welche auch als<strong>&nbsp;Dokument</strong> dargestellt wird (Datenobjekt). Wir versenden die Antwort (Send-Task). Danach warten wir so lange auf eine Antwort des Kunden, bis eine Nachricht eintrifft (Intermediate Message-Event). Der Prozess endet damit, dass wir die<strong>&nbsp;Reklamation abschließen</strong> (End-Event).&nbsp;</p>
                <p>Im Task<strong>&nbsp;“Beschwerde bearbeiten”&nbsp;</strong>kann der Fall auftreten, dass eine Beschwerde nicht bearbeitet werden kann (Intermediate Error Event im Task). Danach<strong>&nbsp;benachrichtigen</strong> wir den Kunden über die <strong>Fehlende Information&nbsp;</strong>(User Task) und warten auf eine Antwort (Intermediate Timer Event).</p>
                <p>Wenn nach<strong>&nbsp;mehr&nbsp;</strong>als <strong>14 Tagen</strong> keine Antwort mehr vom Kunden kommt (Exclusive-Gateway), wird die <strong>“Kundenbeschwerde archiviert”</strong> (Terminate-Event).</p>
                <p>Wenn eine Antwort rechtzeitig ankommt, kommen wir zurück vor den Task <strong>“Beschwerde aufnehmen” (</strong>XOR-Gateway).</p>
                <p>&nbsp;</p>`,
                mod_qs_question_description:"8. Customer Complaints extended by Data-Stores",
                mod_qs_question_description_de:"8. Kundenreklamation um Data Stores erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 9. Customer complaints extended by service task
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH (pool)</strong></p>
                <p><strong>&nbsp;</strong></p>
                <p>We <strong>receive</strong> a customer <strong>complaint</strong> (Message-Start-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The customer <strong>complaint</strong> is <strong>recorded</strong> <strong>electronically</strong> via a <strong>web service</strong> (web service task).</p>
                <p>&nbsp;</p>
                <p>We take up the <strong>complaint</strong> (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object) and <strong>stored</strong> in a <strong>database</strong> (Data Store).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The <strong>complaint</strong> is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).&nbsp;</p>
                <p>A <strong>branch</strong> is to be <strong>created</strong> (Inclusive Gateway).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In <strong>case</strong> the <strong>customer</strong> has already <strong>submitted</strong> a <strong>complaint</strong> but we <strong>have</strong> <strong>not</strong> yet been <strong>able</strong> to <strong>process</strong> it, a <strong>"10% discount voucher"</strong> should be <strong>noted</strong>.&nbsp;</p>
                <p>&nbsp;</p>
                <p>If a <strong>complaint</strong> has already been <strong>submitted</strong> and <strong>handled</strong>, a <strong>giveaway</strong> will be <strong>noted</strong>. Both <strong>cases</strong> should be <strong>possible</strong> (inclusive gateway). In <strong>case none</strong> of the <strong>conditions</strong> apply, the <strong>next task</strong> will be <strong>carried out</strong> (default path).</p>
                <p>&nbsp;</p>
                <p>Subsequently, we <strong>formulate</strong> the <strong>answer</strong> (User Task), which is also <strong>displayed</strong> as a <strong>document</strong> (Data Object). We <strong>send</strong> the <strong>answer</strong> (Send task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>wait</strong> for a <strong>response</strong> from the customer until a <strong>message arrives</strong> (intermediate message event). The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In the task <strong>"Process Complaint"</strong> the case can <strong>occur</strong> that a <strong>complaint cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the Task). We then <strong>notify</strong> the customer about the <strong>missing information</strong> (User Task) and <strong>wait</strong> for a <strong>response</strong> (Intermediate Timer Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>If there is <strong>no response</strong> after more than <strong>14 days</strong> from the <strong>customer</strong> (Exclusive-Gateway), the <strong>customer</strong> <strong>complaint</strong> is <strong>archived</strong> (Terminate-Event).</p>
                <p>&nbsp;</p>
                <p>If an <strong>answer&nbsp;</strong>arrives <strong>in</strong> <strong>time</strong>, we <strong>come back</strong> before the task <strong>"Take up the complaint"</strong> (XOR-Gateway).</p>`,
                mod_qs_question_text_de:`<p>Inhalt:<strong>&nbsp;PC Build GmbH</strong> (Pool). Es geht eine<strong>&nbsp;Kundenreklamation</strong> bei uns ein (Message-Start-Event).&nbsp;</p>
                <p>Die Kundenreklamation wird über einen Webservice<strong>&nbsp;elektronisch erfasst</strong> (Webservice-Task).</p>
                <p>Wir nehmen die <strong>Beschwerde</strong> auf (User Task) welche nun durch ein <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt) und in einer <strong>Datenbank&nbsp;</strong>(Data-Store) hinterlegt wird.&nbsp;</p>
                <p>Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task).&nbsp;</p>
                <p>Eine <strong>Verzweigung&nbsp;</strong>soll erstellt werden (Inclusive-Gateway). Für den Fall, dass der Kunde bereits eine Beschwerde eingereicht hat, diese aber noch nicht durch uns bearbeitet werden konnte, soll ein<strong>&nbsp;“10%-Rabattgutschein”</strong> vermerkt werden.</p>
                <p>&nbsp;Sollte bereits eine Beschwerde eingereicht und bearbeitet worden sein, wird ein <strong>Giveaway</strong> vermerkt. Beide Fälle sollten möglich sein (Inclusive-Gateway). Für den Fall, dass keine der Bedingungen zutrifft wird in den nächsten Task <strong>übergegangen&nbsp;</strong>(Default-Pfad).</p>
                <p>Im Anschluss formulieren wir die Antwort (User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). Wir versenden die Antwort (Send-Task). Danach warten wir so lange auf eine Antwort des Kunden, bis eine <strong>Nachricht eintrifft&nbsp;</strong>(Intermediate Message-Event). Der Prozess endet damit, dass wir die <strong>Reklamation abschließen&nbsp;</strong>(End-Event).&nbsp;</p>
                <p>Im Task “Beschwerde bearbeiten” kann der Fall auftreten, dass eine Beschwerde nicht bearbeitet werden kann (Intermediate Error Event im Task).&nbsp;</p>
                <p>Danach benachrichtigen wir den Kunden über die <strong>Fehlende Information&nbsp;</strong>(User Task) und warten auf eine Antwort (Intermediate Timer Event).&nbsp;</p>
                <p>Wenn nach <strong>mehr&nbsp;</strong>als <strong>14 Tagen&nbsp;</strong>keine Antwort mehr vom Kunden kommt (Exclusive-Gateway), wird die<strong>&nbsp;“Kundenbeschwerde archiviert”&nbsp;</strong>(Terminate-Event).</p>
                <p>Wenn eine Antwort rechtzeitig ankommt, kommen wir zurück vor den Task <strong>“Beschwerde aufnehmen”&nbsp;</strong>(XOR-Gateway).</p>`,
                mod_qs_question_description:"9. Customer Complaints extended by Service-Task",
                mod_qs_question_description_de:"9. Kundenreklamation um Service Task erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 10. Customer complaints extended by sub-process
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (pool)</p>
                <p>&nbsp;</p>
                <p>We <strong>receive</strong> a customer <strong>complaint</strong> (Message-Start-Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>The customer <strong>complaint</strong> is <strong>recorded electronically</strong> via a <strong>web service</strong> (web service task).</p>
                <p>&nbsp;</p>
                <p>We <strong>take up</strong> the complaint (User Task) which is now <strong>represented</strong> by a <strong>document</strong> (Data Object) and <strong>stored</strong> in a <strong>database</strong> (Data Store). The complaint is <strong>categorized</strong> by a <strong>previously defined rule</strong> (Business Rule Task) and we <strong>handle</strong> the <strong>complaint</strong> (User Task).</p>
                <p>&nbsp;</p>
                <p>A <strong>branch</strong> is to be <strong>created</strong> (Inclusive Gateway). In <strong>case</strong> the user has already <strong>submitted</strong> a <strong>complaint</strong>, but we <strong>have not</strong> yet been <strong>able</strong> to <strong>process</strong> it, a <strong>"10% discount voucher"</strong> should be <strong>noted</strong>.&nbsp;</p>
                <p>&nbsp;</p>
                <p>If a <strong>complaint</strong> has already been <strong>submitted</strong> and <strong>handled</strong>, a <strong>giveaway</strong> will be noted.</p>
                <p>&nbsp;</p>
                <p>The <strong>giveaway</strong> should <strong>contain</strong> a <strong>sub-process</strong> (sub-process), which <strong>shows</strong> the <strong>process</strong> of <strong>giving away</strong> the <strong>giveaway</strong>. First a <strong>"Giveaway needed"</strong> (Start-Event), then a <strong>"Select giveaway"</strong> and <strong>"Send giveaway"</strong> (2 Tasks) is to be <strong>noted</strong> and the <strong>sub-process</strong> is to be <strong>completed</strong> by <strong>"Giveaway sent"</strong> (End-Event).</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p><strong>Both cases</strong> should be <strong>possible</strong> (Inclusive-Gateway). In <strong>case none</strong> of the <strong>conditions</strong> <strong>apply</strong>, the <strong>next task</strong> is <strong>started</strong> (default path).</p>
                <p>&nbsp;</p>
                <p>Subsequently, we <strong>formulate</strong> the <strong>answer</strong> (User Task), which is also <strong>displayed</strong> as a <strong>document</strong> (Data Object). We <strong>send</strong> the <strong>answer</strong> (Send task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>Then we <strong>wait</strong> for a <strong>response</strong> from the customer until a <strong>message arrives</strong> (intermediate message event). The <strong>process ends</strong> when we <strong>close</strong> the <strong>complaint</strong> (End-Event).</p>
                <p>&nbsp;</p>
                <p>In the task <strong>"Process Complaint"</strong> the case can <strong>occur</strong> that a <strong>complaint</strong> <strong>cannot</strong> be <strong>handled</strong> (Intermediate Error Event in the Task). We then <strong>notify</strong> the customer about the <strong>missing information</strong> (User Task) and <strong>wait</strong> for a <strong>response</strong> (Intermediate Timer Event).&nbsp;</p>
                <p>&nbsp;</p>
                <p>If there is <strong>no response</strong> after more than <strong>14 days</strong> from the <strong>customer</strong> (Exclusive-Gateway), the customer <strong>complaint</strong> is <strong>archived</strong> (Terminate-Event).</p>
                <p>&nbsp;</p>
                <p>If an <strong>answer arrives</strong> in time, we <strong>come back</strong> before the task <strong>"Take up the complaint"</strong> (XOR-Gateway).</p>`,
                mod_qs_question_text_de:`<p>Inhalt:&nbsp;<strong>PC Build GmbH</strong> (Pool).&nbsp;Es geht eine&nbsp;<strong>Kundenreklamation&nbsp;</strong>bei uns ein (Message-Start-Event).&nbsp;</p>
                <p>Die&nbsp;<strong>Kundenreklamation&nbsp;</strong>wird über einen Webservice&nbsp;<strong>elektronisch erfasst</strong> (Webservice-Task).</p>
                <p>Wir nehmen die <strong>Beschwerde&nbsp;</strong>auf (User Task) welche nun durch ein <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt) und in einer <strong>Datenbank&nbsp;</strong>(Data-Store) hinterlegt wird.&nbsp;</p>
                <p>Die Beschwerde wird durch eine zuvor festgelegte Regel <strong>kategorisiert&nbsp;</strong>(Business Rule Task) und wir bearbeiten die Beschwerde (User Task).</p>
                <p>Eine <strong>Verzweigung&nbsp;</strong>soll erstellt werden (Inclusive-Gateway). Für den Fall, dass der bereits eine Beschwerde eingereicht hat, diese aber noch nicht durch uns bearbeitet werden konnte, soll ein <strong>“10%-Rabattgutschein”</strong> vermerkt werden.&nbsp;</p>
                <p>Sollte bereits eine Beschwerde eingereicht und bearbeitet worden sein, wird ein <strong>Giveaway&nbsp;</strong>vermerkt.</p>
                <p>Das Giveaway soll einen <strong>Unterprozess&nbsp;</strong>beinhalten (Subprozess), welches den Prozess der Giveaway-Vergabe aufzeigt.<strong>&nbsp;Zuerst</strong> wird ein “Giveaway <strong>benötigt</strong>” (Start-Event), dann soll ein <strong>“Giveaway ausgewählt”</strong> und<strong>&nbsp;“Giveaway verschickt”</strong> (2 Tasks) werden und der Subprozess durch “Giveway verschickt” abgeschlossen werden (End-Event).</p>
                <p>Beide Fälle sollten möglich sein (Inclusive-Gateway). Für den Fall, dass keine der Bedingungen zutrifft wird in den nächsten&nbsp;<strong>Task übergegangen&nbsp;</strong>(Default-Pfad).</p>
                <p>Im Anschluss formulieren wir die <strong>Antwort&nbsp;</strong>(User Task), welche auch als <strong>Dokument&nbsp;</strong>dargestellt wird (Datenobjekt). Wir versenden die Antwort (Send-Task).</p>
                <p>&nbsp;Danach warten wir so lange auf eine Antwort des Kunden, bis eine Nachricht eintrifft (Intermediate Message-Event). Der Prozess endet damit, dass wir die <strong>Reklamation abschließen&nbsp;</strong>(End-Event).</p>
                <p>Im Task <strong>“Beschwerde bearbeiten”&nbsp;</strong>kann der Fall auftreten, dass eine Beschwerde nicht bearbeitet werden kann (Intermediate Error Event im Task).&nbsp;</p>
                <p>Danach <strong>benachrichtigen&nbsp;</strong>wir den Kunden über die <strong>Fehlende Information&nbsp;</strong>(User Task) und warten auf eine Antwort (Intermediate Timer Event). Wenn nach <strong>mehr&nbsp;</strong>als <strong>14 Tagen&nbsp;</strong>keine Antwort mehr vom Kunden kommt (Exclusive-Gateway), wird die<strong>&nbsp;“Kundenbeschwerde archiviert”</strong> (Terminate-Event).</p>
                <p>Wenn eine Antwort rechtzeitig ankommt, kommen wir zurück vor den Task <strong>“Beschwerde aufnehmen”</strong> (XOR-Gateway).</p>
                <p>&nbsp;</p>`,
                mod_qs_question_description:"10. Customer Complaints extended by Sub-Process",
                mod_qs_question_description_de:"10. Kundenprozess um Subprozess erweitert",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },




            
            // --- Level 3 - Professional --- 
            // 1. Availablility of goods, therefore it is offered for sale again in the online shop
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool). An <strong>order is received</strong> (Message Start Event). Then we <strong>assign</strong> a <strong>picker</strong> manually (Manuel Task). After that we check if a <strong>product</strong> is <strong>available</strong> (Conditional Event). Before the process is finished with "<strong>Product</strong> <strong>picked</strong>" (End Event), we <strong>pick</strong> the <strong>product</strong> (Manuel Task).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool). Eine<strong>&nbsp;Bestellung geht ein</strong> (Message Start Event). Dann <strong>weisen</strong> wir manuell einen <strong>Picker zu</strong> (Manuel Task). Daraufhin prüfen wir ob ein <strong>Produkt verfügbar</strong> ist (Conditional Event). Bevor der Prozess über “<strong>Produkt entnommen</strong>” abschließt (End Event), <strong>entnehmen&nbsp;</strong>wir das<strong>&nbsp;Produkt</strong> (Manuel Task).</p>`,
                mod_qs_question_description:"1. Availability of goods, therefore it is offered for sale again in the online shop",
                mod_qs_question_description_de:"1. Warenverfügbarkeit, dadurch wird sie wieder im Onlineshop zum Verkauf angeboten.",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 2. Order will be canceled if the product is not available
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool). An <strong>order is received</strong> (Message Start Event). Then we <strong>assign</strong> a <strong>picker</strong> manually (Manuel Task). After that we check if a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manuel Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the <strong>warehouse</strong>, a possibility should be inserted which cancels the task of picking (Compensation Event). The undoing of the task should be called "<strong>Order cancelled</strong>" (Compensation Handler).&nbsp;</p>
                <p>&nbsp;</p>
                <p>After the <strong>product picking</strong> we <strong>send</strong> the <strong>product</strong> (Manual Task) and finish the process with "<strong>Order completed</strong>" (End Event).</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool). Eine <strong>Bestellung geht ein</strong> (Message Start Event). Dann <strong>weisen</strong> wir manuell einen <strong>Picker zu</strong> (Manuel Task). Daraufhin prüfen wir, ob ein <strong>Produkt verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt <strong>nicht</strong> im Lager <strong>vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Tasks soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der <strong>Produktentnahme</strong><strong>versenden</strong> wir das <strong>Produkt</strong> (Manual Task) und schließe den Prozess mit “<strong>Bestellungsvorgang</strong><strong>abgeschlossen</strong>” ab (End Event).</p>`,
                mod_qs_question_description:"2. Order will be cancelled if the product is not available",
                mod_qs_question_description_de:"2. Auftrag wird abgebrochen, falls das Produkt nicht verfügbar ist.",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. The order must be released from a certain size by several, but not by all instances
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order is received</strong> in '<strong>order processing</strong>' (Message Start Event). We then <strong>check</strong> the</p>
                <p><strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which <strong>release&nbsp;</strong>the<strong>&nbsp;order</strong> (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€</strong> <strong>or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking we <strong>send</strong> the product (Manual Task) and finish the process of 'order processing' with "<strong>Order completed</strong>" (End Event).</p>`,
                mod_qs_question_text_de:`<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme<strong>&nbsp;versenden</strong> wir das Produkt (Manual Task) und schließe den Prozess der Auftragsbearbeitung mit “<strong>Bestellungsvorgang abgeschlossen</strong>” ab (End Event).</p>`,
                mod_qs_question_description:"3. The order must be released from a certain size by several, but not by all instances",
                mod_qs_question_description_de:"3. Der Auftrag muss ab einer bestimmten Größe durch mehrere, allerdings nicht durch alle Instanzen freigegeben werden.",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 4. Triggering of several processes by signal events
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which release the order (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€ or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking, we <strong>send</strong> the product (Manual Task) and at the same time (Parallel Gateway) processes are triggered in the Lanes '<strong>sales</strong>' and '<strong>finance</strong>' but they are not continued with a connector (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>The process is continued in <strong>Sales</strong> (Signal Catch Event). A <strong>shipping</strong> <strong>confirmation</strong> is then <strong>sent</strong> (Send Task) and the process is <strong>completed</strong> with "<strong>Shipping confirmation sent</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>In <strong>Finance</strong> the process is continued (Signal Catch Event). An <strong>invoice</strong> is then <strong>sent</strong> (Send Task) and the process is completed with "<strong>Invoice sent</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Complete</strong> the process of order processing "<strong>Product sent</strong>" (Manual Task) with "<strong>Order process completed</strong>" (End Event)</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme <strong>versenden</strong> wir das Produkt (Manual Task) und gleichzeitig (Parallel Gateway) werden Prozesse in den Lanes <strong>Vertrieb&nbsp;</strong>und<strong>&nbsp;Finance</strong> angestoßen, die aber nicht mit einem Connector weitergeführt werden (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>Im <strong>Vertrieb</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Versandbestätigung verschickt</strong> (Send Task) und der Prozess mit “<strong>Versandbestätigung verschickt</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Bei <strong>Finance</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Rechnung verschickt</strong> (Send Task) und der Prozess mit “<strong>Rechnung</strong> <strong>verschickt</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Schließe</strong> den Prozess der Auftragsbearbeitung “<strong>Versende Produkt</strong>” (Manual Task) mit “<strong>Bestellungsvorgang abgeschlossen</strong>” <strong>ab</strong> (End Event)</p>`,
                mod_qs_question_description:"4. Triggering of several processes by signal events",
                mod_qs_question_description_de:"4. Anstoßen mehrerer Prozesse durch Signal Events",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Extended payment process including varians
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which release the order (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€ or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking, we <strong>send</strong> the product (Manual Task) and at the same time (Parallel Gateway) processes are triggered in the Lanes '<strong>sales</strong>' and '<strong>finance</strong>' but they are not continued with a connector (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>The process is continued in <strong>Sales</strong> (Signal Catch Event). A <strong>shipping</strong> <strong>confirmation</strong> is then <strong>sent</strong> (Send Task) and the process is <strong>completed</strong> with "<strong>Shipping confirmation sent</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>In <strong>Finance</strong> the process is continued (Signal Catch Event). Thereupon an <strong>invoice</strong> is <strong>sent</strong> (Send Task). The process is then <strong>divided</strong> into two parts in Finance, where the question arises <strong>whether</strong> the <strong>payment</strong> has been <strong>received</strong> or not (Event Based Gateway). If this is the case, the <strong>payment</strong> is registered as <strong>received</strong> (Receive Task). The other continuation is only carried out <strong>if</strong> a <strong>period</strong> of <strong>two weeks</strong> is exceeded for the payment of the invoice (Timer Event), then a <strong>reminder</strong> is <strong>sent</strong> (Task).</p>
                <p>&nbsp;</p>
                <p>Only one of the two variants can actually arrive, but they are <strong>reunited</strong> (Exclusive Gateway). Finance is <strong>concluded</strong> with "<strong>Payment completed</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Complete</strong> the process of order processing "<strong>Product sent</strong>" (Manual Task) with "<strong>Order process completed</strong>" (End Event)</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme <strong>versenden</strong> wir das Produkt (Manual Task) und gleichzeitig (Parallel Gateway) werden Prozesse in den Lanes <strong>Vertrieb&nbsp;</strong>und<strong>&nbsp;Finance</strong> angestoßen, die aber nicht mit einem Connector weitergeführt werden (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>Im <strong>Vertrieb</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Versandbestätigung verschickt</strong> (Send Task) und der Prozess mit “<strong>Versandbestätigung verschickt</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Bei <strong>Finance</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Rechnung verschickt</strong> (Send Task). Folgend wird der Prozess in Finance <strong>zweigeteilt</strong> unter es stellt sich die Frage, <strong>ob</strong> die <strong>Zahlung eingegangen</strong> ist oder nicht (Event Based Gateway). Ist dies der Fall, wird die <strong>Zahlung</strong> als <strong>eingegangen</strong> registriert (Receive Task). Die andere Fortführung wird nur durchlaufen, <strong>wenn</strong> für die Begleichung der Rechnung eine <strong>Zeitspanne</strong> von <strong>zwei Wochen</strong> überschritten wird (Timer Event), dann wird eine <strong>Mahnung</strong> <strong>verschickt</strong> (Task).</p>
                <p>&nbsp;</p>
                <p>Es kann nur eine der beiden Varianten tatsächlich eintreffen, welche aber wieder <strong>vereinigt</strong> werden (Exklusive Gateway). <strong>Finance</strong> wird mit “<strong>Zahlung abgeschlossen</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Schließe</strong> den Prozess der Auftragsbearbeitung “<strong>Versende Produkt</strong>” (Manual Task) mit “<strong>Bestellungsvorgang abgeschlossen</strong>” <strong>ab</strong> (End Event)</p>`,
                mod_qs_question_description:"5. Extended payment process including variants",
                mod_qs_question_description_de:"5. Erweiterter Bezahlvorgang inklusive Varianten",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Escalate to CEO
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which release the order (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€ or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking, we <strong>send</strong> the product (Manual Task) and at the same time (Parallel Gateway) processes are triggered in the Lanes '<strong>sales</strong>' and '<strong>finance</strong>' but they are not continued with a connector (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>The process is continued in <strong>Sales</strong> (Signal Catch Event). A <strong>shipping</strong> <strong>confirmation</strong> is then <strong>sent</strong> (Send Task) and the process is <strong>completed</strong> with "<strong>Shipping confirmation sent</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>In <strong>Finance</strong> the process is continued (Signal Catch Event). An <strong>invoice</strong> is then <strong>sent</strong> (Send Task). The process is then <strong>divided</strong> into two parts: the question is <strong>whether</strong> the <strong>payment</strong> has been <strong>received</strong> or not (Event Based Gateway). If this is the case, the <strong>payment</strong> is registered as <strong>received</strong> (Receive Task). The other continuation is only carried out <strong>if</strong> a <strong>period</strong> of <strong>two weeks</strong> is exceeded for the payment of the invoice (Timer Event), then a <strong>reminder</strong> is <strong>sent</strong> (Task).</p>
                <p>&nbsp;</p>
                <p><strong>If</strong> the <strong>payment</strong> is now <strong>received</strong> (Event-Based Gateway), the <strong>payment</strong> is <strong>completed</strong> and the process <strong>ends</strong> (End Event). Only one of the two variants can actually arrive, but they are <strong>reunited</strong> (Exclusive Gateway). Finance is <strong>concluded</strong> with "<strong>Payment completed</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>If the payment is not received after <strong>another week</strong>, the process is <strong>escalated</strong> to the CEO (Task, Escalation Event). The <strong>CEO notifies&nbsp;</strong>the<strong>&nbsp;lawyer</strong> (Task), which <strong>ends</strong> the <strong>process</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Complete</strong> the process of order processing "<strong>Product sent</strong>" (Manual Task) with "<strong>Order process completed</strong>" (End Event)</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme <strong>versenden</strong> wir das Produkt (Manual Task) und gleichzeitig (Parallel Gateway) werden Prozesse in den Lanes <strong>Vertrieb&nbsp;</strong>und<strong>&nbsp;Finance</strong> angestoßen, die aber nicht mit einem Connector weitergeführt werden (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>Im <strong>Vertrieb</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Versandbestätigung verschickt</strong> (Send Task) und der Prozess mit “<strong>Versandbestätigung verschickt</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Bei <strong>Finance</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Rechnung</strong> <strong>verschickt</strong> (Send Task). Folgend wird der Prozess <strong>zweigeteilt</strong> unter es stellt sich die Frage, <strong>ob</strong> die <strong>Zahlung</strong> <strong>eingegangen</strong> ist oder nicht (Event Based Gateway). Ist dies der Fall, wird die <strong>Zahlung</strong> als <strong>eingegangen</strong> registriert (Receive Task). Die andere Fortführung wird nur durchlaufen, <strong>wenn</strong> für die Begleichung der Rechnung eine <strong>Zeitspanne</strong> von <strong>zwei Wochen</strong> überschritten wird (Timer Event), dann wird eine <strong>Mahnung verschickt</strong> (Task).</p>
                <p>&nbsp;</p>
                <p><strong>Wenn</strong> die <strong>Zahlung</strong> nun <strong>erfolgt</strong> (Event-Based Gateway), wird die <strong>Zahlung abgeschlossen</strong> und der Prozess <strong>endet</strong> (End Event). Es kann nur eine der beiden Varianten tatsächlich eintreffen, welche aber wieder <strong>vereinigt</strong> werden (Exklusive Gateway). Finance wird mit “<strong>Zahlung abgeschlossen</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Wenn die Zahlung nach <strong>einer weiteren Woche</strong> noch nicht eingegangen, wird an den Chef (CEO) <strong>eskaliert</strong> (Task, Escalation Event). Der <strong>CEO</strong> <strong>verständigt</strong> den <strong>Anwalt</strong> (Task), was den <strong>Prozess beendet</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Schließe</strong> den Prozess der Auftragsbearbeitung “<strong>Versende Produkt</strong>” (Manual Task) mit “<strong>Bestellungsvorgang abgeschlossen</strong>” <strong>ab</strong> (End Event)</p>`,
                mod_qs_question_description:"6. Escalate to CEO",
                mod_qs_question_description_de:"6. An CEO eskalieren",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Collection agency
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which release the order (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€ or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking, we <strong>send</strong> the product (Manual Task) and at the same time (Parallel Gateway) processes are triggered in the Lanes '<strong>sales</strong>' and '<strong>finance</strong>' but they are not continued with a connector (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>The process is continued in <strong>Sales</strong> (Signal Catch Event). A <strong>shipping</strong> <strong>confirmation</strong> is then <strong>sent</strong> (Send Task) and the process is <strong>completed</strong> with "<strong>Shipping confirmation sent</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>In <strong>Finance</strong> the process is continued (Signal Catch Event). An <strong>invoice</strong> is then <strong>sent</strong> (Send Task). The process is then <strong>divided</strong> into two parts: the question is <strong>whether</strong> the <strong>payment</strong> has been <strong>received</strong> or not (Event Based Gateway). If this is the case, the <strong>payment</strong> is registered as <strong>received</strong> (Receive Task). The other continuation is only carried out <strong>if</strong> a <strong>period</strong> of <strong>two weeks</strong> is exceeded for the payment of the invoice (Timer Event), then a <strong>reminder</strong> is <strong>sent</strong> (Task).</p>
                <p>&nbsp;</p>
                <p><strong>If</strong> the <strong>payment</strong> is now <strong>received</strong> (Event-Based Gateway), the <strong>payment</strong> is <strong>completed</strong> and the process <strong>ends</strong> (End Event). Only one of the two variants can actually arrive, but they are <strong>reunited</strong> (Exclusive Gateway). Finance is <strong>concluded</strong> with "<strong>Payment completed</strong>" (End Event).</p>
                <p>&nbsp;</p>
                <p>If the payment is not received after <strong>another week</strong>, the process is <strong>escalated</strong> to the CEO (Task, Escalation Event)</p>
                <p>The <strong>CEO notifies&nbsp;</strong>the<strong>&nbsp;lawyer</strong> (task), at the same time a <strong>further</strong> process (link event) is started with the <strong>CEO</strong> and a <strong>debt collection company&nbsp;</strong>is<strong>&nbsp;called</strong> (manual task). The <strong>process</strong> then <strong>ends</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Complete</strong> the process of order processing "<strong>Product sent</strong>" (Manual Task) with "<strong>Order process completed</strong>" (End Event)</p>`,
                mod_qs_question_text_de:`<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme <strong>versenden</strong> wir das Produkt (Manual Task) und gleichzeitig (Parallel Gateway) werden Prozesse in den Lanes <strong>Vertrieb&nbsp;</strong>und<strong>&nbsp;Finance</strong> angestoßen, die aber nicht mit einem Connector weitergeführt werden (Signal Throw Event).</p>
                <p>&nbsp;</p>
                <p>Im <strong>Vertrieb</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Versandbestätigung verschickt</strong> (Send Task) und der Prozess mit “<strong>Versandbestätigung verschickt</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Bei <strong>Finance</strong> wird der Prozess weitergeführt (Signal Catch Event). Daraufhin wird eine <strong>Rechnung</strong> <strong>verschickt</strong> (Send Task). Folgend wird der Prozess <strong>zweigeteilt</strong> unter es stellt sich die Frage, <strong>ob</strong> die <strong>Zahlung</strong> <strong>eingegangen</strong> ist oder nicht (Event Based Gateway). Ist dies der Fall, wird die <strong>Zahlung</strong> als <strong>eingegangen</strong> registriert (Receive Task). Die andere Fortführung wird nur durchlaufen, <strong>wenn</strong> für die Begleichung der Rechnung eine <strong>Zeitspanne</strong> von <strong>zwei Wochen</strong> überschritten wird (Timer Event), dann wird eine <strong>Mahnung verschickt</strong> (Task).</p>
                <p>&nbsp;</p>
                <p><strong>Wenn</strong> die <strong>Zahlung</strong> nun <strong>erfolgt</strong> (Event-Based Gateway), wird die <strong>Zahlung abgeschlossen</strong> und der <strong>Prozess endet</strong> (End Event). Es kann nur eine der beiden Varianten tatsächlich eintreffen, welche aber wieder <strong>vereinigt</strong> werden (Exklusive Gateway). Finance wird mit “<strong>Zahlung abgeschlossen</strong>” <strong>abgeschlossen</strong> (End Event).</p>
                <p>&nbsp;</p>
                <p>Wenn die Zahlung nach <strong>einer weiteren Woche</strong> noch nicht eingegangen, wird an den Chef (CEO) <strong>eskaliert</strong> (Task, Escalation Event). Der <strong>CEO verständigt&nbsp;</strong>den<strong>&nbsp;Anwalt</strong> (Task), gleichzeitig wird ein <strong>weiterer</strong> Prozess (Link Event) beim <strong>CEO</strong> gestartet und ein <strong>Inkassounternehmen angerufen</strong> (Manual Task). Der <strong>Prozess endet</strong> danach (End Event).</p>
                <p>&nbsp;</p>
                <p><strong>Schließe</strong> den Prozess der Auftragsbearbeitung “<strong>Versende Produkt</strong>” (Manual Task) mit “<strong>Bestellungsvorgang abgeschlossen</strong>” <strong>ab</strong> (End Event)</p>`,
                mod_qs_question_description:"7. Collection agency",
                mod_qs_question_description_de:"7. Inkassounternehmen",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

        ])
        .execute();
    }
}