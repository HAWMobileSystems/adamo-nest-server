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
export default class SeedMultipleChoiceQuestionBeginner implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        console.log("Grabbing Category ID");

        const seedMult_Qs = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_QuestionEntity)
        .values([
            // --- 1. Question --- Start Event
            {
                multiplechoice_question_text: "What does the start event?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 2. Question --- Pool
            {
                multiplechoice_question_text: "A … is a limited space of a single process (contains the sequence flows between activities). A process is completely contained in … Which of the following elements fits to this description?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 3. Question --- Receive Task
            { 
                multiplechoice_question_text: "Waits for a message to arrive from an internal or external participant. Which task fulfills this?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,   
            },
            // --- 4. Question --- Script Task
            {
                multiplechoice_question_text: "What’s the purpose of a Script Task?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 5. Question --- Sequence Flow
            {
                multiplechoice_question_text: "What is the name of the connecting object element below?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 6. Question --- Manual Task
            { 
                multiplechoice_question_text: "It is expected to be performed without the aid of any business process execution engine or any application. Which of the following tasks fits to this description?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,   
            }
            ,
            // --- 7. Question --- User Task
            {
                multiplechoice_question_text: "When do you use the User Task?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 8. Question --- Lane
            {
                multiplechoice_question_text: "What is the name of the diagram element below?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 9. Question --- End Event
            { 
                multiplechoice_question_text: "What does the end event? (More than one answer is correct)",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            
            // --- 10. Question --- Exclusive Gateway
            {
                multiplechoice_question_text: "How many paths are chosen by an exclusive gateway?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 11. Question --- Message Flow
            {
                multiplechoice_question_text: "What is the name of the connecting object element below?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 12. Question --- Send Task
            { 
                multiplechoice_question_text: "Sends a message to an internal or external participant. Which task is used for this?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            
            // --- 13. Question --- Parallel Gateway
            {
                multiplechoice_question_text: "What is the name of the following gateway?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },

            // --- 14. Question --- Task
            {
                multiplechoice_question_text: "What is represented with a Task?",
                multiplechoice_question_text_de: "",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            
              
            
        ])
        .execute();
        console.log("Seeding Answer")
        console.log(seedMult_Qs.identifiers[12])
        const seedMult_Qs_Ans = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
            // --- 1. Question --- Answers --- Start Event
            //false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Affect the flow of the process, but will not start or (directly) terminate the Process",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // true
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates where a process starts",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // false 
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates when the process ends",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the flow of the process",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },



            // --- 2. Question --- Answers --- Pools
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Subprocess",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 3. Question --- Answers --- Receive Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Receive Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Send Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Manual Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 4. Question --- Answers --- Script Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task uses some sort of service that could be a web service or an automated application",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is executed by a business process engine.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is a task where a human performer performs the task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is expected to be performed without the aid of any business process execution engine or any application",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 5. Question --- Answers --- Sequence Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Process Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },

            // --- 6. Question --- Answers --- Manual Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"User Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Service Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Manual Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },

            // --- 7. Question --- Answers --- User Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a human performer performs the Task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task is expected to be performed without the aid of any business process execution engine or any application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task uses some sort of service that could be a web service or an automated application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task is executed by a business process engine.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // --- 8-. Question --- Answers --- Lane
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Subprocess",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // --- 9. Question --- Answers --- End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Affect the flow of the process, but will not start or (directly) terminate the Process",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the flow of the process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates where a process starts.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates when the process ends.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // --- 10. Question --- Answers --- Exclusive Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"At least one",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"All",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"One",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // --- 11. Question --- Answers --- Message Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Process Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 12. Question --- Answers --- Send Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Receive Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Send Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"User Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 13. Question --- Answers --- Parallel Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Parallel Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Exclusive Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Inclusive Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Complex Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 14. Question --- Answers --- Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task tells a process to continue exclusively down one path.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task represents work that is performed within a Business Process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task represents a department of a company.",
                multiplechoice_question_answer_text_de:"",
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
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[0].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:false,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[0].multiplechoice_question_id
            },
            {

                tg_multiplechoice_answered_answer_id: seedMult_Qs_Ans.identifiers[7].multiplechoice_question_answer_id,
                tg_multiplechoice_answered_from_qs_id: seedMult_Qs.identifiers[0].multiplechoice_question_id,
                tg_multiplechoice_answered_answerd:true,
                tg_multiplechoice_answered_id : seedMult_Qs.identifiers[0].multiplechoice_question_id
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