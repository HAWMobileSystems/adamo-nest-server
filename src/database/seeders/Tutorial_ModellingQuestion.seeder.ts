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
                mod_qs_question_text:"This is the first Beginner Question",
                mod_qs_question_text_de:"Deutsch - erste Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

            // 2. Processing a customer inquiry with branching
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the second Beginner Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. Customer inquiry with option for process repetition
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the third Beginner Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 4. Customer inquiry with parallel processes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the first Beginner Question",
                mod_qs_question_text_de:"Deutsch - erste Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Order process including manual operation
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the second Beginner Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Order process inluding user task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the third Beginner Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Order process including send an receive task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the first Beginner Question",
                mod_qs_question_text_de:"Deutsch - erste Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 8. Order process including script task
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the second Beginner Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 9. Order process including pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the third Beginner Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 10. Order process including several pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the first Beginner Question",
                mod_qs_question_text_de:"Deutsch - erste Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 11. Final order process including multiple pools and lanes
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the second Beginner Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage",
                mod_qs_question_description:"Learn to create a Basic Beginner Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

            // --- Level 2 - Advanced ---
            // 1. Customer complaints
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the first Advanced Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
             // 2. Customer complaints extended by business rule
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the second Advanced Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. Customer complaints extended by data object
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the third Advanced Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
             // 4. Customer complaints extended by timer event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the first Advanced Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Customer complaints extended by intermediate event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the second Advanced Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Customer complaints extended by inclusive gateway
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the third Advanced Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Customer complaints extended by terminate event
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the first Advanced Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 8. Customer complaints extended by data stores
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the second Advanced Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 9. Customer complaints extended by service task
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the third Advanced Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 2. Customer complaints extended by sub-process
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the first Advanced Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Advanced",
                mod_qs_question_description:"Learn to create a Basic Advanced Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN fortgeschrittenes Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

            // --- Level 3 - Professional --- 
            // 1. Availablility of goods, therefore it is offered for sale again in the online shop
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the first Professional Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 2. Order will be canceled if the product is not available
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the second Professional Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 3. The order must be released from a certain size by several, but not by all instances
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the third Professional Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 4. Triggering of several processes by signal events
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the first Professional Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 5. Extended payment process including varians
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the second Professional Question",
                mod_qs_question_text_de:"Deutsch - zweite Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(2/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(2/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 6. Escalate to CEO
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the third Professional Question",
                mod_qs_question_text_de:"Deutsch - dritte Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(3/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(3/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            // 7. Collection agency
            {
                mod_qs_categories: getCategory_id_prof.category_id,
                mod_qs_question_text:"This is the first Professional Question",
                mod_qs_question_text_de:"Deutsch - erste Frage Professional",
                mod_qs_question_description:"Learn to create a Basic Professional Diagramm(1/3)",
                mod_qs_question_description_de:"Lerne ein BPMN professionelles Diagramm zu erstellen(1/3)",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },

        ])
        .execute();


        // const mod_qs_prof = await getRepository(Modelling_QuestionEntity)
        // .createQueryBuilder("modelling_question")
        // .where("modelling_question.mod_qs_question_text = :mod_qs_question_text",{mod_qs_question_text:'This is the third Professional Question'})
        // .getOne();
        // const mod_qs_adv = await getRepository(Modelling_QuestionEntity)
        // .createQueryBuilder("modelling_question")
        // .where("modelling_question.mod_qs_question_text = :mod_qs_question_text",{mod_qs_question_text:'This is the second Advanced Question'})
        // .getOne();
        // const mod_qs_beg = await getRepository(Modelling_QuestionEntity)
        // .createQueryBuilder("modelling_question")
        // .where("modelling_question.mod_qs_question_text = :mod_qs_question_text",{mod_qs_question_text:'This is the second Beginner Question'})
        // .getOne();
        // console.log("Grabbing Modelling_Question")
        // console.log(otherdata);
        // console.log(otherdata.identifiers[0]);


        const seedTg_Mod = await connection
        .createQueryBuilder()
        .insert()
        .into(Tg_ModellingEntity)
        .values([
            {
             tg_modelling_question_id: otherdata.identifiers[8].mod_qs_id,
             tg_modelling_xml_providet: "<xml>This XML is used to Validate a BPMN Model</xml>",
             tg_modelling_validation_score: 98,
             tg_modelling_editing_begin:123,
            },
            {
                tg_modelling_question_id: otherdata.identifiers[5].mod_qs_id,
                tg_modelling_xml_providet: "<xml>This XML is used to Validate a BPMN Model</xml>",
                tg_modelling_validation_score: 55,
                tg_modelling_editing_begin:12343,
               },
               {
                tg_modelling_question_id: otherdata.identifiers[2].mod_qs_id,
                tg_modelling_xml_providet: "<xml>This XML is used to Validate a BPMN Model</xml>",
                tg_modelling_validation_score: 30,
                tg_modelling_editing_begin:1435,
               },
        ])
        .execute();
        const user = await getRepository(UserEntity)
        .createQueryBuilder("users")
        .getOne();
        console.log("Grabbing User");
        console.log(seedTg_Mod)
       const seedTest = await connection
       .createQueryBuilder()
       .insert()
       .into(TestEntity)
       .values([
           {
            test_solved_test_id: seedTg_Mod.identifiers[0].tg_modelling_id,
            test_user_id: user.id,
            test_categorie: getCategory_id_prof.category_id,
            //test_tg_identifier: tg.professional,
           },
           {
            test_solved_test_id: seedTg_Mod.identifiers[1].tg_modelling_id,
            test_user_id: user.id,
            test_categorie: getCategory_id_adv.category_id,
            //test_tg_identifier: tg.advanced,
           },
           {
            test_solved_test_id: seedTg_Mod.identifiers[2].tg_modelling_id,
            test_user_id: user.id,
            test_categorie: getCategory_id.category_id,
            //test_tg_identifier: tg.beginner,
           },
       ])
       .execute();

    }
}