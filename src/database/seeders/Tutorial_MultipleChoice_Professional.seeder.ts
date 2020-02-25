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
export default class SeedMultipleChoiceQuestionProfessional implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Professional'})
        .getOne();
        console.log("Grabbing Category ID");

        const seedMult_Qs = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_QuestionEntity)
        .values([
            // --- 1. Question --- Conditional Event
            {
                multiplechoice_question_text: "The event is triggered when a condition is true. Which event fits to the description?",
                multiplechoice_question_text_de: "Das Event wird ausgelöst, wenn eine Bedingung wahr ist. Welches Event passt zur Beschreibung?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 2. Question --- Event Based Gateway
            {
                multiplechoice_question_text: "The outgoing paths that follow the Event-Based Gateway are based on what?",
                multiplechoice_question_text_de: "Die ausgehenden Pfade, die dem Event-Based Gateway folgen basieren worauf?",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 3. Question --- Signal Event
            { 
                multiplechoice_question_text: "What is the name of the following event?",
                multiplechoice_question_text_de: "Was ist der Name des angezeigten Events?",
                multiplechoice_question_categories:getCategory_id.category_id,   
            },
            // --- 4. Question --- Compensation
            {
                multiplechoice_question_text: "What is the purpose of a compensation?",
                multiplechoice_question_text_de: "Was ist der Zweck einer Compensation?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 5. Question --- Escalation Event
            {
                multiplechoice_question_text: "What does the following event?",
                multiplechoice_question_text_de: "Was macht das angezeigte Event?",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 6. Question --- Link Event
            { 
                multiplechoice_question_text: "Used to connect two sections of the process. Can be used to create looping situations or to avoid long Sequence Flow lines. Which of the following events is described?",
                multiplechoice_question_text_de: "Wird verwendet, um zwei Abschnitte des Prozesses zu verbinden. Kann verwendet werden, um Schleifen zu erzeugen oder lange Sequece Flows zu vermeiden. Welches der folgenden Events wird beschrieben?",
                multiplechoice_question_categories:getCategory_id.category_id,   
            }
            ,
            // --- 7. Question --- Complex Gateway
            {
                multiplechoice_question_text: "What is the name of the following gateway?",
                multiplechoice_question_text_de: "Wie lautet der Name des angezeigten Gateways?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            
        ])
        .execute();
        console.log("Seeding Answer")
        const seedMult_Qs_Ans = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
        // --- 1. Question --- Answers --- Conditional Event
            //false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Conditional Event",
                multiplechoice_question_answer_text_de:"Conditional Event",
                multiplechoice_question_answer_true:true
            },
            // true
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Escalation Event",
                multiplechoice_question_answer_text_de:"Escalation Event",
                multiplechoice_question_answer_true:false
            },
            // false 
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Signal Event",
                multiplechoice_question_answer_text_de:"Signal Event",
                multiplechoice_question_answer_true:false
            },
            // false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Compensation Event",
                multiplechoice_question_answer_text_de:"Compensation Event",
                multiplechoice_question_answer_true:false
            },



            // --- 2. Question --- Answers --- Event-Based Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Conditions",
                multiplechoice_question_answer_text_de:"Conditions",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Events",
                multiplechoice_question_answer_text_de:"Events",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Time periods",
                multiplechoice_question_answer_text_de:"Time periods",
                multiplechoice_question_answer_true:false
            },

            // --- 3. Question --- Answers --- Signal Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Timer Event",
                multiplechoice_question_answer_text_de:"Timer Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Event",
                multiplechoice_question_answer_text_de:"Message Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Terminate Event",
                multiplechoice_question_answer_text_de:"Terminate Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Escalation Event",
                multiplechoice_question_answer_text_de:"Escalation Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Conditional",
                multiplechoice_question_answer_text_de:"Conditional",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Signal Event",
                multiplechoice_question_answer_text_de:"Signal Event",
                multiplechoice_question_answer_true:true
            },

            // --- 4. Question --- Answers --- Compensation
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Dealing with errors that may occur.",
                multiplechoice_question_answer_text_de:"Umgang mit eventuell auftretenden Fehlern",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Undoing steps that were already completed.",
                multiplechoice_question_answer_text_de:"Bereits abgeschlossene Schritte rückgängig machen",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Synchronization of behavior",
                multiplechoice_question_answer_text_de:"Synchronisierung des Verhaltens",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Connect two sections of the process",
                multiplechoice_question_answer_text_de:"Zwei Abschnitte des Prozesses verbinden",
                multiplechoice_question_answer_true:false
            },

            // --- 5. Question --- Answers --- Escalation Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates an escalation through the process",
                multiplechoice_question_answer_text_de:"Zeigt eine Eskalation durch den Prozess an",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Undo steps that were already completed successfully",
                multiplechoice_question_answer_text_de:"Bereits erfolgreich abgeschlossene Schritte rückgängig machen",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Handle compensations",
                multiplechoice_question_answer_text_de:"Kompensation handhaben",
                multiplechoice_question_answer_true:false
            },

            // --- 6. Question --- Answers --- Link Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Escalation Event",
                multiplechoice_question_answer_text_de:"Escalation Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Signal Event",
                multiplechoice_question_answer_text_de:"Signal Event",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Link Event",
                multiplechoice_question_answer_text_de:"Link Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Compensation Event",
                multiplechoice_question_answer_text_de:"Compensation Event",
                multiplechoice_question_answer_true:false
            },

            // --- 7. Question --- Answers --- Complex Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Event-based Gateway",
                multiplechoice_question_answer_text_de:"Event-based Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Inclusive Gateway",
                multiplechoice_question_answer_text_de:"Inclusive Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Exclusive Gateway",
                multiplechoice_question_answer_text_de:"Exclusive Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Complex Gateway",
                multiplechoice_question_answer_text_de:"Complex Gateway",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Parallel Gateway",
                multiplechoice_question_answer_text_de:"Parallel Gateway",
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
                tg_multiplechoice_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_multiplechoice_id:seedMult_Qs.identifiers[2].multiplechoice_question_id
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
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[2].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:false,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[2].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[7].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[1].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[1].multiplechoice_question_id
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
            },
            {
                test_solved_test_id: seedTest3.identifiers[1].tg_multiplechoice_id,
                test_user_id: user.id,
                test_categorie: getCategory_id.category_id,
               },
               {
                test_solved_test_id: seedTest3.identifiers[2].tg_multiplechoice_id,
                test_user_id: user.id,
                test_categorie: getCategory_id.category_id,
               },
        ])
        .execute();

        
    }
}