import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getRepository } from 'typeorm';
import { Modelling_QuestionEntity } from '../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity } from '../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from '../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';
import { Level3_Modell_1 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_1';
import { Level3_Modell_2 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_2';
import { Level3_Modell_3 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_3';
import { Level3_Modell_4 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_4'
import { Level3_Modell_5 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_5'
import { Level3_Modell_6 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_6'
import { Level3_Modell_7 } from './seedFiles/introBeginner/svg/Level_3/Level3_Modell_7'

export default class SeedModellingQuestionProfessional implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        
        let Modell_1 = new Level3_Modell_1(); 
        let Modell_2 = new Level3_Modell_2();
        let Modell_3 = new Level3_Modell_3();
        let Modell_4 = new Level3_Modell_4();
        let Modell_5 = new Level3_Modell_5();
        let Modell_6 = new Level3_Modell_6();
        let Modell_7 = new Level3_Modell_7();
        
        
        //Get Cat ID
        const getCategory_id_prof = await getRepository(CategoryEntity)
            .createQueryBuilder("category")
            .where("category.category_name = :category_name", { category_name: 'Professional' })
            .getOne();
        console.log("Grabbing Advanced Category ID");

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
                    modelling_question_rule_name: "Rule for first Question"
                },
                {
                    modelling_question_rule_name: "Rule for second Question"
                },
                {
                    modelling_question_rule_name: "Rule for third Question"
                },
                {
                    modelling_question_rule_name: "Rule for fourth Question"
                },
                {
                    modelling_question_rule_name: "Rule for fifth Question"
                },
                {
                    modelling_question_rule_name: "Rule for sixth Question"
                },
                {
                    modelling_question_rule_name: "Rule for seventh Question"
                },
                {
                    modelling_question_rule_name: "Rule for eight Question"
                },
                {
                    modelling_question_rule_name: "Rule for nineth Question"
                },
                {
                    modelling_question_rule_name: "Rule for ten Question"
                },
                {
                    modelling_question_rule_name: "Rule for eleventh Question"
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
                    // Level 3 Modell 1
                    modelling_rule_id: seedQsRule.identifiers[0].modelling_question_id,
                    modelling_rule_text: Modell_1.getXML_EN(),
                    modelling_rule_text_de: Modell_1.getXML_DE(),
                    modelling_rule_svg: Modell_1.getSVG_EN(),
                    modelling_rule_svg_de: Modell_1.getSVG_DE()
                },
                {
                    //Level 3 Modell 2
                    modelling_rule_id: seedQsRule.identifiers[1].modelling_question_id,
                    modelling_rule_text: Modell_2.getXML_DE(),
                    modelling_rule_text_de: Modell_2.getXML_DE(),
                    modelling_rule_svg: Modell_2.getSVG_EN(),
                    modelling_rule_svg_de: Modell_2.getSVG_DE()
                },
                {
                    //Level 3 Modell 3
                    modelling_rule_id: seedQsRule.identifiers[2].modelling_question_id,
                    modelling_rule_text: Modell_3.getXML_EN(),
                    modelling_rule_text_de: Modell_3.getXML_DE(),
                    modelling_rule_svg: Modell_3.getSVG_EN(),
                    modelling_rule_svg_de: Modell_3.getSVG_DE() 
                },
                {
                    //Level 3 Modell 4
                    modelling_rule_id: seedQsRule.identifiers[3].modelling_question_id,
                    modelling_rule_text: Modell_4.getXML_EN(),
                    modelling_rule_text_de: Modell_4.getXML_DE(),
                    modelling_rule_svg: Modell_4.getSVG_EN(),
                    modelling_rule_svg_de: Modell_4.getSVG_DE()
                },
                {
                    //Level 3 Modell 5
                    modelling_rule_id: seedQsRule.identifiers[4].modelling_question_id,
                    modelling_rule_text: Modell_5.getXML_EN(),
                    modelling_rule_text_de: Modell_5.getXML_DE(),
                    modelling_rule_svg: Modell_5.getSVG_EN(),
                    modelling_rule_svg_de: Modell_5.getSVG_DE()
                },
                {
                    //Level 3 Modell 6
                    modelling_rule_id: seedQsRule.identifiers[5].modelling_question_id,
                    modelling_rule_text: Modell_6.getXML_EN(),
                    modelling_rule_text_de: Modell_6.getXML_DE(),
                    modelling_rule_svg: Modell_6.getSVG_EN(),
                    modelling_rule_svg_de: Modell_6.getSVG_DE()
                },
                {
                    //Level 3 Modell 7
                    modelling_rule_id: seedQsRule.identifiers[6].modelling_question_id,
                    modelling_rule_text: Modell_7.getXML_EN(),
                    modelling_rule_text_de: Modell_7.getXML_DE(),
                    modelling_rule_svg: Modell_7.getSVG_EN(),
                    modelling_rule_svg_de: Modell_7.getSVG_DE()
                },
            ])
            .execute();

        const mod_qs_prof = await connection
            .createQueryBuilder()
            .insert()
            .into(Modelling_QuestionEntity)
            .values([
                // --- Level 3 - Professional --- 
                // 1. Availablility of goods, therefore it is offered for sale again in the online shop
                {
                    mod_qs_identifier:1,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool). An <strong>order is received</strong> (Message Start Event). Then we <strong>assign</strong> a <strong>picker</strong> manually (Manuel Task). After that we check if a <strong>product</strong> is <strong>available</strong> (Conditional Event). Before the process is finished with "<strong>Product</strong> <strong>picked</strong>" (End Event), we <strong>pick</strong> the <strong>product</strong> (Manuel Task).</p>`,
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool). Eine<strong>&nbsp;Bestellung geht ein</strong> (Message Start Event). Dann <strong>weisen</strong> wir manuell einen <strong>Picker zu</strong> (Manuel Task). Daraufhin prüfen wir ob ein <strong>Produkt verfügbar</strong> ist (Conditional Event). Bevor der Prozess über “<strong>Produkt entnommen</strong>” abschließt (End Event), <strong>entnehmen&nbsp;</strong>wir das<strong>&nbsp;Produkt</strong> (Manuel Task).</p>`,
                    mod_qs_question_description: "1. Availability of goods, therefore it is offered for sale again in the online shop",
                    mod_qs_question_description_de: "1. Warenverfügbarkeit, dadurch wird sie wieder im Onlineshop zum Verkauf angeboten.",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
                },
                // 2. Order will be canceled if the product is not available
                {
                    mod_qs_identifier:2,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool). An <strong>order is received</strong> (Message Start Event). Then we <strong>assign</strong> a <strong>picker</strong> manually (Manuel Task). After that we check if a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manuel Task).&nbsp;</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not</strong> <strong>available</strong> in the <strong>warehouse</strong>, a possibility should be inserted which cancels the task of picking (Compensation Event). The undoing of the task should be called "<strong>Order cancelled</strong>" (Compensation Handler).&nbsp;</p>
                <p>&nbsp;</p>
                <p>After the <strong>product picking</strong> we <strong>send</strong> the <strong>product</strong> (Manual Task) and finish the process with "<strong>Order completed</strong>" (End Event).</p>`,
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool). Eine <strong>Bestellung geht ein</strong> (Message Start Event). Dann <strong>weisen</strong> wir manuell einen <strong>Picker zu</strong> (Manuel Task). Daraufhin prüfen wir, ob ein <strong>Produkt verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt <strong>nicht</strong> im Lager <strong>vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Tasks soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der <strong>Produktentnahme</strong><strong>versenden</strong> wir das <strong>Produkt</strong> (Manual Task) und schließe den Prozess mit “<strong>Bestellungsvorgang</strong><strong>abgeschlossen</strong>” ab (End Event).</p>`,
                    mod_qs_question_description: "2. Order will be cancelled if the product is not available",
                    mod_qs_question_description_de: "2. Auftrag wird abgebrochen, falls das Produkt nicht verfügbar ist.",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[1].modelling_question_id,
                },
                // 3. The order must be released from a certain size by several, but not by all instances
                {
                    mod_qs_identifier:3,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order is received</strong> in '<strong>order processing</strong>' (Message Start Event). We then <strong>check</strong> the</p>
                <p><strong>order</strong> for its value (Task).</p>
                <p>&nbsp;</p>
                <p>If the order amount of the order is <strong>greater than 10,000€</strong> (XOR gateway), the order must be <strong>approved</strong> (task). This is done at the <strong>same time</strong> (Parallel Gateway) by several instances. These instances, which <strong>release&nbsp;</strong>the<strong>&nbsp;order</strong> (Manuel Task) are the "<strong>Sales</strong>", "<strong>Finance</strong>" and "<strong>CEO</strong>". However, only at least two instances need to approve the order (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>However, if the order amount is <strong>10,000€</strong> <strong>or less</strong>, the order can be <strong>assigned</strong> to a <strong>picker</strong> in order processing (Manual Task). We then check whether a <strong>product</strong> is <strong>available</strong> (Conditional Event). Then we <strong>pick</strong> the <strong>product</strong> (Manual Task).</p>
                <p>&nbsp;</p>
                <p>In case the product is <strong>not available</strong> in the warehouse, we want to add a possibility to undo the picking task (Compensation Event). The undoing of the task should be "<strong>Order cancelled</strong>" (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>After the product picking we <strong>send</strong> the product (Manual Task) and finish the process of 'order processing' with "<strong>Order completed</strong>" (End Event).</p>`,
                    mod_qs_question_text_de: `<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
                <p>&nbsp;</p>
                <p>Ist der Bestellbetrag der Bestellung <strong>größer als 10.000€</strong> (XOR-Gateway), muss diese <strong>freigegeben</strong> werden (Task). Dies geschieht zur <strong>gleichen Zeit</strong> (Parallel Gateway) durch mehrere Instanzen. Diese Instanzen, die die <strong>Bestellung freigeben</strong> (Manuel Task) sind der “<strong>Vertrieb</strong>”, “<strong>Finance</strong>” und “<strong>CEO</strong>”. Allerdings müssen nur mindestens zwei Instanzen eine Freigabe erteilen (Complex Gateway).</p>
                <p>&nbsp;</p>
                <p>Beträgt der Bestellbetrag allerdings <strong>10.000€ oder weniger</strong>, kann die Bestellung gleich einem <strong>Picker</strong> in der Auftragsbearbeitung <strong>zugewiesen</strong> werden (Manual Task).</p>
                <p>Daraufhin prüfen wir, ob ein <strong>Produkt</strong> <strong>verfügbar</strong> ist (Conditional Event). Dann <strong>entnehmen</strong> wir das <strong>Produkt</strong> (Manuel Task).</p>
                <p>&nbsp;</p>
                <p>Für den Fall, dass das Produkt im Lager <strong>nicht vorhanden</strong> ist, soll eine Möglichkeit eingefügt werden, die den Task der Entnahme rückgängig macht (Compensation Event). Das Rückgängigmachen des Task soll “<strong>Auftrag abgebrochen</strong>” lauten (Compensation Handler).</p>
                <p>&nbsp;</p>
                <p>Nach der Produktentnahme<strong>&nbsp;versenden</strong> wir das Produkt (Manual Task) und schließe den Prozess der Auftragsbearbeitung mit “<strong>Bestellungsvorgang abgeschlossen</strong>” ab (End Event).</p>`,
                    mod_qs_question_description: "3. The order must be released from a certain size by several, but not by all instances",
                    mod_qs_question_description_de: "3. Der Auftrag muss ab einer bestimmten Größe durch mehrere, allerdings nicht durch alle Instanzen freigegeben werden.",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[2].modelling_question_id,
                },
                // 4. Triggering of several processes by signal events
                {
                    mod_qs_identifier:4,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
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
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
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
                    mod_qs_question_description: "4. Triggering of several processes by signal events",
                    mod_qs_question_description_de: "4. Anstoßen mehrerer Prozesse durch Signal Events",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[3].modelling_question_id,
                },
                // 5. Extended payment process including varians
                {
                    mod_qs_identifier:5,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
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
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
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
                    mod_qs_question_description: "5. Extended payment process including variants",
                    mod_qs_question_description_de: "5. Erweiterter Bezahlvorgang inklusive Varianten",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[4].modelling_question_id,
                },
                // 6. Escalate to CEO
                {
                    mod_qs_identifier:6,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
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
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
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
                    mod_qs_question_description: "6. Escalate to CEO",
                    mod_qs_question_description_de: "6. An CEO eskalieren",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[5].modelling_question_id,
                },
                // 7. Collection agency
                {
                    mod_qs_identifier:7,
                    mod_qs_categories: getCategory_id_prof.category_id,
                    mod_qs_question_text: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: '<strong>order processing</strong>'; '<strong>sales</strong>', '<strong>finance</strong>' and '<strong>CEO</strong>'. An <strong>order</strong> is <strong>received</strong> in '<strong>order processing</strong>'<strong>&nbsp;</strong>(Message Start Event). We then <strong>check</strong> the <strong>order</strong> for its value (Task).</p>
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
                    mod_qs_question_text_de: `<p><strong>PC Build GmbH</strong> (Pool); Lanes: „<strong>Auftragsbearbeitung</strong>“; „<strong>Vertrieb</strong>“, „<strong>Finance</strong>“ und „<strong>CEO</strong>“. Eine <strong>Bestellung geht</strong> bei der <strong>Auftragsbearbeitung</strong> <strong>ein</strong> (Message Start Event). Daraufhin <strong>prüfen</strong> wir die <strong>Bestellung</strong> auf ihren Wert (Task).</p>
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
                    mod_qs_question_description: "7. Collection agency",
                    mod_qs_question_description_de: "7. Inkassounternehmen",
                    mod_qs_custom_ruleset: seedQsRule.identifiers[6].modelling_question_id,
                },

            ])
            .execute();
    }
}