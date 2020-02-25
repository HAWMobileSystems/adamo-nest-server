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
export default class SeedMultipleChoiceQuestionAdvanced implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
        .getOne();
        console.log("Grabbing Category ID");

        const seedMult_Qs = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_QuestionEntity)
        .values([
        // --- 1. Question --- Data Store
        {
            multiplechoice_question_text: "A place where the process has read and write access. It exists independently of the lifetime of the process instance. What is described here?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 2. Question --- Data Object
        {
            multiplechoice_question_text: "What is represented with a data object? (More than one answer is correct)",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 3. Question --- Message End Event
        { 
            multiplechoice_question_text: "What does the end event below? "+`
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="225 114 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0kwb2i2" style="display: block;" transform="translate(231 120)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg>
            </div>`,
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,   
        },
        // --- 4. Question --- Timer Intermediate Event
        {
            multiplechoice_question_text: "Expresses a time gap in processing or a wait for a period of time. Which of the following intermediate events fits to this description?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 5. Question --- Inclusive Gateway
        {
            multiplechoice_question_text: "What is the name of the following gateway?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 6. Question --- Message End Event
        { 
            multiplechoice_question_text: "A message arrives and triggers the start of the process. Which of the following events fits?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,   
        }
        ,
        // --- 7. Question --- Service Task
        {
            multiplechoice_question_text: "What’s the purpose of a Service Task?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 8. Question --- Data Flow
        {
            multiplechoice_question_text: "WWhat is the name of the connecting object element below?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 9. Question --- Intermediate Error Event
        { 
            multiplechoice_question_text: "Used to model errors that may occur and how to solve them. Which of the following intermediate events fits?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id, 
        },

        // --- 10. Question --- Terminate Event
        {
            multiplechoice_question_text: "What does the end event below?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 11. Question --- Sub Process
        {
            multiplechoice_question_text: "Internal details have been modeled using tasks, gateways, events and sequence flows. The element has a thin border. Which of the following elements is described?",
            multiplechoice_question_text_de: "",
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 12. Question --- Business Rule Task
        { 
            multiplechoice_question_text: "When do you use the Business Rule Task?",
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
        const seedMult_Qs_Ans = await connection
        .createQueryBuilder()
        .insert()
        .into(Multiplechoice_Question_AnswerEntity)
        .values([
            // --- 1. Question --- Answers --- Data Store
            //false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Object",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // true
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Store",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // false 
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },


            // --- 2. Question --- Answers --- Data Object
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A place where the process has read and write access",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Departments",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Information that flows through the process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Documents",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Roles",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Emails",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },

            // --- 3. Question --- Answers --- Message End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a message is sent at the end of the process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a data object is crated at the end of the process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a message is received at the end of the process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process and all its activities immediately",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 4. Question --- Answers --- Timer Intermediate Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Error Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Clock Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Timer Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lock Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 5. Question --- Answers --- Inclusive Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Parallel Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Complex Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Event-based Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Exclusive Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Inclusive Gateway",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },

            // --- 6. Question --- Answers --- Message End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message End Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Start Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Start Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Intermediate Message Start Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 7. Question --- Answers --- Service Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task uses some sort of service that could be a web service or an automated application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task is a task where a human performer performs the task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task is expected to be performed without the aid of any business process execution engine o rany application.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },

            // --- 8-. Question --- Answers --- Data Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Process Flow",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            // --- 9. Question --- Answers --- Intermediate Error Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Escalation Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Conditional Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Error Event",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // --- 10. Question --- Answers --- Terminate Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process immediately.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process and all its activities immediately.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the tasks in a lane.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            // --- 11. Question --- Answers --- Sub Process
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sub Process",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },

            // --- 12. Question --- Answers --- Business Rule Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied to specific process activities.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied to the whole process.",
                multiplechoice_question_answer_text_de:"",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied on gateways.",
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