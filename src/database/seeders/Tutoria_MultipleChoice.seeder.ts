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
import { Multiplechoice_Question_AnswerDto } from 'modules/tutorial/multiplechoice_question_answer/dto/Multiplechoice_Question_AnswerDto';
enum tg{
    beginner,
    advanced,
    professional
}
export default class SeedMultipleChoiceQuestion implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        console.log("Grabbing Category ID");
        const getCategory_id_adv = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
        .getOne();
        console.log("Grabbing Category ID");

        const seedMult_Qs = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_QuestionEntity)
        .values([
            {
                multiplechoice_question_text: "First Real MC Question",
                multiplechoice_question_text_de: "Erste Sinnvolle MC Question",
                multiplechoice_question_categories:getCategory_id.category_id,
                // multiplechoice_question_description: "Short Description Qs 1",
                // multiplechoice_question_description_de: "Kurze Beschreibung der ersten Frage"
            },
            {
                multiplechoice_question_text: "First Real MC Question",
                multiplechoice_question_text_de: "Zweite Sinnvolle MC Question",
                multiplechoice_question_categories:getCategory_id.category_id, 
                // multiplechoice_question_description: "Short Description Qs 2",
                // multiplechoice_question_description_de: "Kurze Beschreibung der zweiten Frage"
            },
            { 
                multiplechoice_question_text: "Third Real MC Question",
                multiplechoice_question_text_de: "Dritte Sinnvolle MC Question",
                multiplechoice_question_categories:getCategory_id.category_id,
                // multiplechoice_question_description: "Short Description Qs 3",
                // multiplechoice_question_description_de: "Kurze Beschreibung der dritten Frage"
            },
            {
                multiplechoice_question_text: "First Real MC Question Advanced",
                multiplechoice_question_text_de: "Erste Sinnvolle MC QuestionADV",
                multiplechoice_question_categories:getCategory_id_adv.category_id,
                // multiplechoice_question_description: "Short Description Qs 1ADV",
                // multiplechoice_question_description_de: "Kurze Beschreibung der ersten Frage Advanced"
            },
            {
                multiplechoice_question_text: "Second Real MC Question Advanced",
                multiplechoice_question_text_de: "Zweite Sinnvolle MC Question ADV",
                multiplechoice_question_categories:getCategory_id_adv.category_id, 
                // multiplechoice_question_description: "Short Description Qs 2ADV",
                // multiplechoice_question_description_de: "Kurze Beschreibung der zweiten Frage Adv"
            },
            { 
                multiplechoice_question_text: "Thrid Real MC Question Advanced",
                multiplechoice_question_text_de: "Dritte Sinnvolle MC Question ADV",
                multiplechoice_question_categories:getCategory_id_adv.category_id,
                // multiplechoice_question_description: "Short Description Qs 3ADV",
                // multiplechoice_question_description_de: "Kurze Beschreibung der dritten Frage"
            }
            
        ])
        .execute();


        console.log("Seeding Answer")
        console.log(seedMult_Qs.identifiers[0].multiplechoice_question_id)
        console.log("GOGOGOOG")
        const seedMult_Qs_Ans = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 1 English-Wrong",
                multiplechoice_question_answer_text_de:"Antwort1 Deutsch-Falsch",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 2 English-Wrong",
                multiplechoice_question_answer_text_de:"Antwort 2 Deutsch-Falsch",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 3 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 3 Deutsch-Richtig",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 4 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 4 Deutsch-Richtig",
                multiplechoice_question_answer_true:true
            },
            // 4 next
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 1 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 1 Deutsch-Richtig",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 2 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 2 Deutsch-Richtig",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 1 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 1 Deutsch-Richtig",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Answer 2 English-Richtig",
                multiplechoice_question_answer_text_de:"Antwort 2 Deutsch-Richtig",
                multiplechoice_question_answer_true:false
            },
        ])
        .execute();


        const user = await getRepository(UserEntity)
        .createQueryBuilder("users")
        .getOne();

        
        const seedTest3 = await connection
        .createQueryBuilder()
        .insert()
        .into(Tg_MultiplechoiceEntity)
        .values([
            {
                tg_multiplechoice_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_multiplechoice_id:seedMult_Qs.identifiers[2].multiplechoice_question_id
            },
            {
                tg_multiplechoice_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                tg_multiplechoice_multiplechoice_id:seedMult_Qs.identifiers[1].multiplechoice_question_id
            },
            {
                tg_multiplechoice_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                tg_multiplechoice_multiplechoice_id:seedMult_Qs.identifiers[0].multiplechoice_question_id
            },
            {
                tg_multiplechoice_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                tg_multiplechoice_multiplechoice_id:seedMult_Qs.identifiers[3].multiplechoice_question_id
            },
        ])
        .execute();

        const seedTest4 = await connection
        .createQueryBuilder()
        .insert()
        .into(Tg_Multiplechoice_AnsweredEntity)
        .values([
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[0].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[2].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[1].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:false,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[2].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[2].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[2].multiplechoice_question_id
            },
            //Next QS
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[4].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[1].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[1].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[5].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[0].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:false,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[0].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[6].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[3].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:false,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[3].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[7].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[3].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[3].multiplechoice_question_id
            },
        ])
        .execute();

        
        const seedTest = await connection
        .createQueryBuilder()
        .insert()
        .into(TestEntity)
        .values([
            {
             test_solved_test_id: seedTest3.identifiers[0].tg_multiplechoice_id,
             test_user_id: user.id,
             test_categorie: getCategory_id.category_id,
             //test_tg_identifier: tg.beginner,
            },
            {
                test_solved_test_id: seedTest3.identifiers[1].tg_multiplechoice_id,
                test_user_id: user.id,
                test_categorie: getCategory_id.category_id,
                //test_tg_identifier: tg.beginner,
               },
               {
                test_solved_test_id: seedTest3.identifiers[2].tg_multiplechoice_id,
                test_user_id: user.id,
                test_categorie: getCategory_id.category_id,
                //test_tg_identifier: tg.beginner,
               },
               {
                test_solved_test_id: seedTest3.identifiers[3].tg_multiplechoice_id,
                test_user_id: user.id,
                test_categorie: getCategory_id.category_id,
                //test_tg_identifier: tg.beginner,
               },
        ])
        .execute();

        
    }
}