import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getRepository } from 'typeorm';
import { Modelling_QuestionEntity } from '../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity} from '../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from '../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';
import { Level2_Modell_1 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_1';
import { Level2_Modell_2 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_2';
import { Level2_Modell_3 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_3';
import { Level2_Modell_4 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_4';
import { Level2_Modell_5 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_5';
import { Level2_Modell_6 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_6';
import { Level2_Modell_7 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_7';
import { Level2_Modell_8 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_8';
import { Level2_Modell_9 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_9';
import { Level2_Modell_10 } from './seedFiles/introBeginner/svg/Lvl_2/Level2_Modell_10';

export default class SeedModellignQuestionAdvanced implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        let Modell_1 = new Level2_Modell_1();
        let Modell_2 = new Level2_Modell_2();
        let Modell_3 = new Level2_Modell_3();
        let Modell_4 = new Level2_Modell_4();
        let Modell_5 = new Level2_Modell_5();
        let Modell_6 = new Level2_Modell_6();
        let Modell_7 = new Level2_Modell_7();
        let Modell_8 = new Level2_Modell_8();
        let Modell_9 = new Level2_Modell_9();
        let Modell_10 = new Level2_Modell_10();

        const getCategory_id_adv = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
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
                modelling_question_rule_name:"Rule for first Question"
            },
            {
                modelling_question_rule_name:"Rule for second Question"
            },
            {
                modelling_question_rule_name:"Rule for third Question"
            },
            {
                modelling_question_rule_name:"Rule for fourth Question"
            },
            {
                modelling_question_rule_name:"Rule for fifth Question"
            },
            {
                modelling_question_rule_name:"Rule for sixth Question"
            },
            {
                modelling_question_rule_name:"Rule for seventh Question"
            },
            {
                modelling_question_rule_name:"Rule for eight Question"
            },
            {
                modelling_question_rule_name:"Rule for nineth Question"
            },
            {
                modelling_question_rule_name:"Rule for ten Question"
            },
            {
                modelling_question_rule_name:"Rule for eleventh Question"
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
               // Level 2 Modell 1
            modelling_rule_id:seedQsRule.identifiers[0].modelling_question_id,
            modelling_rule_text: Modell_1.getXML_EN,
            modelling_rule_text_de: Modell_1.getXML_DE,
            modelling_rule_svg: Modell_1.getSVG_EN,
            modelling_rule_svg_de: Modell_1.getSVG_DE
            },
            {
                // Level 2 Modell 2
                modelling_rule_id:seedQsRule.identifiers[1].modelling_question_id,
                modelling_rule_text: Modell_2.getXML_EN,
                modelling_rule_text_de: Modell_2.getXML_DE,
                modelling_rule_svg: Modell_2.getSVG_EN,
                modelling_rule_svg_de: Modell_2.getSVG_DE
                },
                {
                    // Level 2 Modell 3
                 modelling_rule_id:seedQsRule.identifiers[2].modelling_question_id,
                 modelling_rule_text: Modell_3.getXML_EN,
                 modelling_rule_text_de: Modell_3.getXML_DE,
                 modelling_rule_svg: Modell_3.getSVG_EN,
                 modelling_rule_svg_de: Modell_3.getSVG_DE
                 },
                 {
                    // Level 2 Modell 4
                 modelling_rule_id:seedQsRule.identifiers[3].modelling_question_id,
                 modelling_rule_text: Modell_4.getXML_EN,
                 modelling_rule_text_de: Modell_4.getXML_DE,
                 modelling_rule_svg: Modell_4.getSVG_EN,
                 modelling_rule_svg_de: Modell_4.getSVG_DE
                 },
                 {
                    // Level 2 Modell 5
                 modelling_rule_id:seedQsRule.identifiers[4].modelling_question_id,
                 modelling_rule_text: Modell_5.getXML_EN,
                 modelling_rule_text_de: Modell_5.getXML_DE,
                 modelling_rule_svg: Modell_5.getSVG_EN,
                 modelling_rule_svg_de: Modell_5.getSVG_DE
                 },
                 {
                    // Level 2 Modell 6
                 modelling_rule_id:seedQsRule.identifiers[5].modelling_question_id,
                 modelling_rule_text: Modell_6.getXML_EN,
                 modelling_rule_text_de: Modell_6.getXML_DE,
                 modelling_rule_svg: Modell_6.getSVG_EN,
                 modelling_rule_svg_de: Modell_6.getSVG_DE
                 },
                 {
                    // Level 2 Modell 7
                 modelling_rule_id:seedQsRule.identifiers[6].modelling_question_id,
                 modelling_rule_text: Modell_7.getXML_EN,
                 modelling_rule_text_de: Modell_7.getXML_DE,
                 modelling_rule_svg: Modell_7.getSVG_EN,
                 modelling_rule_svg_de: Modell_7.getSVG_DE
                 },
                 {
                    // Level 2 Modell 8
                 modelling_rule_id:seedQsRule.identifiers[7].modelling_question_id,
                 modelling_rule_text: Modell_8.getXML_EN,
                 modelling_rule_text_de: Modell_8.getXML_DE,
                 modelling_rule_svg: Modell_8.getSVG_EN,
                 modelling_rule_svg_de: Modell_8.getSVG_DE
                 },
                 {
                    // Level 2 Modell 9
                 modelling_rule_id:seedQsRule.identifiers[8].modelling_question_id,
                 modelling_rule_text: Modell_9.getXML_EN,
                 modelling_rule_text_de: Modell_9.getXML_DE,
                 modelling_rule_svg: Modell_9.getSVG_EN,
                 modelling_rule_svg_de: Modell_9.getSVG_DE
                 },
                 {
                    // Level 2 Modell 10
                 modelling_rule_id:seedQsRule.identifiers[9].modelling_question_id,
                 modelling_rule_text: Modell_10.getXML_EN,
                 modelling_rule_text_de: Modell_10.getXML_DE,
                 modelling_rule_svg: Modell_10.getSVG_EN,
                 modelling_rule_svg_de: Modell_10.getSVG_DE
                 },

                
        ])
        .execute();
       
        const mod_qs_adv = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_QuestionEntity)
        .values([
            // --- Level 2 - Advanced ---
            // 1. Customer complaints
            {
                mod_qs_identifier:1,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[0].modelling_question_id,
            },
             // 2. Customer complaints extended by business rule
            {
                mod_qs_identifier:2,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[1].modelling_question_id,
            },
            // 3. Customer complaints extended by data object
            {
                mod_qs_identifier:3,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[2].modelling_question_id,
            },
             // 4. Customer complaints extended by timer event
            {
                mod_qs_identifier:4,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[3].modelling_question_id,
            },
            // 5. Customer complaints extended by intermediate event
            {
                mod_qs_identifier:5,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[4].modelling_question_id,
            },
            // 6. Customer complaints extended by inclusive gateway
            {
                mod_qs_identifier:6,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[5].modelling_question_id,
            },
            // 7. Customer complaints extended by terminate event
            {
                mod_qs_identifier:7,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[6].modelling_question_id,
            },
            // 8. Customer complaints extended by data stores
            {
                mod_qs_identifier:8,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[7].modelling_question_id,
            },
            // 9. Customer complaints extended by service task
            {
                mod_qs_identifier:9,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[8].modelling_question_id,
            },
            // 10. Customer complaints extended by sub-process
            {
                mod_qs_identifier:10,
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
                mod_qs_custom_ruleset: seedQsRule.identifiers[9].modelling_question_id,
            }
        ])
        .execute();
    }
}