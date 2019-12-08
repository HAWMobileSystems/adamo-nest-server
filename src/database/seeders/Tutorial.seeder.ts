import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from './../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { Modelling_QuestionEntity } from './../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from './../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity} from './../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from './../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';
import { Multiplechoice_QuestionEntity } from './../../modules/tutorial/multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from './../../modules/tutorial/multiplechoice_question_answer/multiplechoice_question_answer.entity';
import { TestEntity } from './../../modules/tutorial/test/test.entity';
import { UserEntity } from './../../modules/user/user.entity';
import { Tg_IntroEntity } from './../../modules/tutorial/tg_intro/tg_intro.entity';
import { Tg_ModellingEntity } from './../../modules/tutorial/tg_modelling/tg_modelling.entity';
import { Tg_MultiplechoiceEntity } from './../../modules/tutorial/tg_multiplechoice/tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from './../../modules/tutorial/tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import uuid = require('uuid');
enum tg{
    beginner,
    advanced,
    professional
}
export default class SeedTutorial implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
    
        console.log("Seeding Rules \n");
        const seedrule_id = await getRepository(Modelling_RulesEntity)
        .createQueryBuilder("modelling_rules")
        .where("modelling_rules.modelling_rule_text = :modelling_rule_text",{modelling_rule_text:'Standart Regeln für BPMN'})
        .getOne(); 
        console.log("Grabbing Rule ID \n");

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        
        const mult_qs_id = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .where("multiplechoice_question.multiplechoice_question_text = :multiplechoice_question_text",{multiplechoice_question_text:'Erste Sinnvolle MC Question'})
        .getOne();
        
        console.log("Grabbing Question Specific Rule");
     
  
        const mult_qs_ID = mult_qs_id.multiplechoice_question_id;
        const random_ID = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
        

        const seedMult_Qs_A = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
            {
              multiplechoice_question_answer_question_id:mult_qs_ID,
              multiplechoice_question_answer_text:"MultiplechoiceQuestion",
              multiplechoice_question_answer_true:true
            }
            //,'multiplechoice_question_answer_true': "true"
            //{'multiplechoice_question_answer_question_id': mult_qs_ID, 'multiplechoice_question_answer_text': 'Answer_number_1','multiplechoice_question_answer_true': true},
            // {'multiplechoice_question_answer_question_id': mult_qs_ID, 'multiplechoice_question_answer_text': 'Answer_number_2'},
            // {'multiplechoice_question_answer_question_id': mult_qs_ID, 'multiplechoice_question_answer_text': 'Answer_number_3'},
            // {'multiplechoice_question_answer_question_id': random_ID, 'multiplechoice_question_answer_text': 'Answer_number_1'},
        ])
        .execute();
       
        console.log("Seeding Multiplehoice Answers");
        

        const user = await getRepository(UserEntity)
        .createQueryBuilder("users")
        .getOne();
        console.log("Grabbing User");


       console.log("Seeding Test");

       const intro_id = await getRepository(IntroEntity)
       .createQueryBuilder("intro")
       .where("intro.intro_is_first = :intro_is_first",{intro_is_first:true})
       .andWhere("intro.intro_categories = :intro_categories",{intro_categories:getCategory_id.category_id})
       .getOne();
       console.log("Grabbing Intro")

       const seedTg_Intro = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_IntroEntity)
       .values([
           {
            tg_intro_intro_id: intro_id.intro_id,
            tg_intro_last_clicked_id: "thisone",
           }
       ])
       .execute();
       console.log("Seeding Test_Intro")

       console.log("Seeding Test Modelling")
       const test_id = await getRepository(TestEntity)
       .createQueryBuilder("test")
       .where("test.test_categorie = :test_categorie",{test_categorie:getCategory_id.category_id})
       .andWhere("test.test_user_id = :test_user_id",{test_user_id:user.id})
       .getOne();

       
       const seedTg_Mult_Ans = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_Multiplechoice_AnsweredEntity)
       .values([
           {
            tg_multiplechoice_answered_answer_id: mult_qs_id.multiplechoice_question_id,
            tg_multiplechoice_answered_answerd: true,
           }
       ])
       .execute();

       const tg_mult_answ = await getRepository(Tg_Multiplechoice_AnsweredEntity)
       .createQueryBuilder("tg_multiplechoice_answered")
       .where("tg_multiplechoice_answered.tg_multiplechoice_answered_answer_id = :tg_multiplechoice_answered_answer_id",{tg_multiplechoice_answered_answer_id:mult_qs_id.multiplechoice_question_id})
       .getOne();




       const seedTg_Mult = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_MultiplechoiceEntity)
       .values([
           {
            tg_multiplechoice_unique_id:tg_mult_answ.tg_multiplechoice_answered_answer_id, 
            tg_multiplechoice_id: test_id.test_id,
            tg_multiplechoice_multiplechoice_id: mult_qs_id.multiplechoice_question_id,
           }
       ])
       .execute();
    }
}