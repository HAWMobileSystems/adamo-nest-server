import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getRepository } from 'typeorm';
import { Modelling_QuestionEntity } from '../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity} from '../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from '../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';

export default class SeedModellignQuestionBeginner implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        console.log("Grabbing Beginner Category ID");

         /**
         * First define the Rule Names
         * this origins from loadable Rules (e.g: Standart BPMN Rules on top of model specific ones)
         * therefore this table is kept until the Linter can work with those rules
         */
        const seedQsRule = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_Question_RulesEntity)
        .values([
            {
                modelling_question_rule_name:"Rule for first Question"
            },
            {
                modelling_question_rule_name:"Rule for second Question"
            }
        ])
        .execute();
        /**
         * Adding XML Files as modelling rules 
         * each Modelling Qs has therefor 1 Rule
         * --> The correct (or planned, so to speak) XML File
         */
        console.log("Seeding Rules \n");
        const seedRule = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_RulesEntity)
        .values([
           {
            modelling_rule_id:seedQsRule.identifiers[0].modelling_question_id,
            modelling_rule_text: "Standart Rules for BPMN",
            modelling_rule_text_de: "Standart Regeln für BPMN",
            },
            {
                modelling_rule_id:seedQsRule.identifiers[1].modelling_question_id,
                modelling_rule_text: "Extendet Rules for BPMN",
                modelling_rule_text_de: "Standart Regeln für BPMN",
                },
        ])
        .execute();
       
        const mod_qs_beg = await connection
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
            },

            // 2. Processing a customer inquiry with branching
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:`<p>A <strong>customer request</strong> is received (Start-Event). Afterwards the <strong>order</strong> is <strong>prepared</strong> (Task). Then it is checked whether the ordered <strong>product</strong> is <strong>available</strong> (XOR gateway). <strong>If so</strong>, the <strong>order</strong> is <strong>sent</strong> (Task). <strong>If not</strong>, the <strong>order</strong> is <strong>rejected</strong> (task). Both cases are merged again (XOR gateway). The <strong>process ends</strong> with the <strong>completed customer request</strong> (End-Event).</p>`,
                mod_qs_question_text_de:`<p>Eine <strong>Kundenanfrage</strong> geht ein (Start-Event). Danach wird die <strong>Bestellung vorbereitet</strong> (Task).</p>
                <p>Anschließend wird geprüft, ob das bestellte <strong>Produkt vorhanden</strong> ist (XOR-Gateway). Wenn <strong>ja</strong>, wird die <strong>Bestellung versendet</strong> (Task). Falls <strong>nein</strong>, wird die <strong>Bestellung abgelehnt</strong> (Task). Beide Fälle werden wieder zusammengeführt (XOR-Gateway). Der <strong>Prozess endet</strong> mit der <strong>abgeschlossenen Kundenanfrage</strong> (End-Event).</p>`,
                mod_qs_question_description:"2. Processing a customer inquiry with branching",
                mod_qs_question_description_de:"2. Bearbeiten einer Kundenanfrage mit Verzweigung",
                mod_qs_custom_ruleset: seedQsRule.identifiers[1].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
            }
        ])
        .execute();
    }
}