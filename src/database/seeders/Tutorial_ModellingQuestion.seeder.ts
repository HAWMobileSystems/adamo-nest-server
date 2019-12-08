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
                modelling_question_id: mult_qs_id.multiplechoice_question_id,
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
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the first Beginner Question",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the second Beginner Question",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            {
                mod_qs_categories: getCategory_id.category_id,
                mod_qs_question_text:"This is the third Beginner Question",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
            {
                mod_qs_categories: getCategory_id_adv.category_id,
                mod_qs_question_text:"This is the first Advanced Question",
                mod_qs_custom_ruleset: seedqsrule_id.modelling_question_id,
            },
        ])
        .execute();


        const mod_qs = await getRepository(Modelling_QuestionEntity)
        .createQueryBuilder("modelling_question")
        .where("modelling_question.mod_qs_question_text = :mod_qs_question_text",{mod_qs_question_text:'This is the first Question'})
        .getOne();
        console.log("Grabbing Modelling_Question")
        console.log(otherdata);
        console.log(otherdata.identifiers[0]);



        const seedTg_Mod = await connection
        .createQueryBuilder()
        .insert()
        .into(Tg_ModellingEntity)
        .values([
            {
             tg_modelling_question_id: otherdata.identifiers[0].mod_qs_id,
             tg_modelling_xml_providet: "<xml>This XML is used to Validate a BPMN Model</xml>",
             tg_modelling_validation_score: "98%",
            }
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
            test_categorie: getCategory_id.category_id,
            test_tg_identifier: tg.beginner,
           }
       ])
       .execute();

    }
}