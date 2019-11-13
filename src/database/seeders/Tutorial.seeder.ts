import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from './../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection } from 'typeorm';
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
enum tg{
    beginner,
    advanced,
    professional
}
export default class SeedTutorial implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
         /**
        const seedCategory = await connection
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values([
           {
                category_name:"Beginner",
            },
            {
                category_name:"Advanced",
           },
            {
                category_name:"Professional",
            },
        ])
        .execute();
       



        
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

        const seedrule_id = await getRepository(Modelling_RulesEntity)
        .createQueryBuilder("modelling_rules")
        .where("modelling_rules.modelling_rule_text = :modelling_rule_text",{modelling_rule_text:'Standart Regeln für BPMN'})
        .getOne();      

        const seedQsRule = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_Question_RulesEntity)
        .values([
            {
                modelling_rule_id: seedrule_id.modelling_rule_id,
            }
        ])
        .execute()


        
        const seedqsrule_id = await getRepository(Modelling_Question_RulesEntity)
        .createQueryBuilder("modelling_question_rules")
        .where("modelling_question_rules.modelling_rule_id = :modelling_rule_id",{modelling_rule_id: seedrule_id.modelling_rule_id})
        .getOne();

        const otherdata = await connection
        .createQueryBuilder()
        .insert()
        .into(Modelling_QuestionEntity)
        .values([
            {
                categories: String(category_id.id),
                question_text:"This is the first Question",
                custom_ruleset: String(seedqsrule_id.modelling_question_id)
            },
        ])
        .execute()
        const category_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();

        const seedMult_Qs = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_QuestionEntity)
        .values([
            {
                multiplechoice_question_text: "Erste Sinnvolle MC Question",
                multiplechoice_question_categories: category_id.id,
            },
        ])
        .execute()

        const mult_qs_id = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .where("multiplechoice_question.multiplechoice_question_text = :multiplechoice_question_text",{multiplechoice_question_text:'Erste Sinnvolle MC Question'})
        .getOne();

        const seedMult_Qs_A = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
            {
                multiplechoice_question_answer_question_id: mult_qs_id.multiplechoice_question_id,
                multiplechoice_question_answer_text: "Antwort Möglichkeit eins",
                multiplechoice_question_answer_true: true,
            },
            {
                multiplechoice_question_answer_question_id: mult_qs_id.multiplechoice_question_id,
                multiplechoice_question_answer_text: "Antwort Möglichkeit zwei",
                multiplechoice_question_answer_true: false,
            },
            {
                multiplechoice_question_answer_question_id: mult_qs_id.multiplechoice_question_id,
                multiplechoice_question_answer_text: "Antwort Möglichkeit drei",
                multiplechoice_question_answer_true: false,
            },
        ])
        .execute()
        */

       const category_id = await getRepository(CategoryEntity)
       .createQueryBuilder("category")
       .where("category.category_name = :category_name",{category_name:'Beginner'})
       .getOne();

       const data = await connection
       .createQueryBuilder()
       .insert()
       .into(IntroEntity)
       .values([
           {
               intro_text: "BeispielModellll",
               intro_categories: category_id.category_id,
               intro_next_id:"asudhiasdasd",
          },
       ])
       .execute();


       //retrieve one user
        const user = await getRepository(UserEntity)
        .createQueryBuilder("users")
        .getOne();
        
        const mult_qs = await getRepository(Multiplechoice_QuestionEntity)
        .createQueryBuilder("multiplechoice_question")
        .where("multiplechoice_question.multiplechoice_question_text = :multiplechoice_question_text",{multiplechoice_question_text:'Erste Sinnvolle MC Question'})
        .getOne();
        console.log(category_id.category_id)

       const seedTest = await connection
       .createQueryBuilder()
       .insert()
       .into(TestEntity)
       .values([
           {
            test_solved_test_id: mult_qs.multiplechoice_question_id,
            test_user_id: user.id,
            test_categorie: category_id.category_id,
            test_tg_identifier: tg.beginner,
           }
       ])
       .execute()

       const intro_id = await getRepository(IntroEntity)
       .createQueryBuilder("intro")
       .where("intro.intro_text = :intro_text",{intro_text:'BeispielModellll'})
       .getOne();
       
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
       .execute()

       const mod_qs = await getRepository(Modelling_QuestionEntity)
       .createQueryBuilder("modelling_question")
       .where("modelling_question.question_text = :question_text",{question_text:'This is the first Question'})
       .getOne();

       const seedTg_Mod = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_ModellingEntity)
       .values([
           {
            tg_modelling_question_id: mod_qs.mod_qs_id,
            tg_modelling_xml_providet: "<xml>This XML is used to Validate a BPMN Model</xml>",
            tg_modelling_validation_score: "98%",
           }
       ])
       .execute()

       const test_id = await getRepository(TestEntity)
       .createQueryBuilder("test")
       .where("test.test_categorie = :test_categorie",{test_categorie:category_id.category_id})
       .andWhere("test.test_user_id = :test_user_id",{test_user_id:user.id})
       .getOne()


       const seedTg_Mult = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_MultiplechoiceEntity)
       .values([
           {
            tg_multiplechoice_id: test_id.test_id,
            tg_multiplechoice_multiplechoice_id: mult_qs.multiplechoice_question_id,
           }
       ])
       .execute()

       const mult_qs_id = await getRepository(Multiplechoice_Question_AnswerEntity)
       .createQueryBuilder("multiplechoice_question_answer")
       .where("multiplechoice_question_answer.multiplechoice_question_answer_question_id = :multiplechoice_question_answer_question_id",{multiplechoice_question_answer_question_id:mult_qs.multiplechoice_question_id})
       .getOne()

       const seedTg_Mult_Ans = await connection
       .createQueryBuilder()
       .insert()
       .into(Tg_Multiplechoice_AnsweredEntity)
       .values([
           {
            tg_multiplechoice_answered_answer_id: mult_qs_id.multiplechoice_question_answer_id,
            tg_multiplechoice_answered_answerd: true,
           }
       ])
    }
}