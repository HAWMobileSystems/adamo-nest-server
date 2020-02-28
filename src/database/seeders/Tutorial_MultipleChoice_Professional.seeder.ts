import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getRepository } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Multiplechoice_QuestionEntity } from '../../modules/tutorial/multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from '../../modules/tutorial/multiplechoice_question_answer/multiplechoice_question_answer.entity';

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
                multiplechoice_question_text:`<p style="font-size:14pt; "The event is triggered when a condition is true. Which event fits to the description?"</p>`,
                multiplechoice_question_text_de:`<p style="font-size:14pt;"Das Event wird ausgelöst, wenn eine Bedingung wahr ist. Welches Event passt zur Beschreibung?"</p>`,
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 2. Question --- Event Based Gateway
            {
                multiplechoice_question_text: `<p style="font-size:14pt;"The outgoing paths that follow the Event-Based Gateway are based on what?"</p>`,
                multiplechoice_question_text_de: `<p style="font-size:14pt;"Die ausgehenden Pfade, die dem Event-Based Gateway folgen basieren worauf?"</p>`,
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 3. Question --- Signal Event
            { 
                multiplechoice_question_text: `<p style="font-size:14pt;"What is the name of the following event?"</p>` +` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="98" viewBox="304 136 48 98" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_08hdxoe" style="display: block;" transform="translate(310 142)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0onob5x" style="display: block;" transform="translate(310 192)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>`,
                multiplechoice_question_text_de:`<p style="font-size:14pt; "Was ist der Name des angezeigten Events?"</p>` +` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="98" viewBox="304 136 48 98" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_08hdxoe" style="display: block;" transform="translate(310 142)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_0onob5x" style="display: block;" transform="translate(310 192)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 9,16.2 l -18,0 Z" style="fill: none; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>`,
                multiplechoice_question_categories:getCategory_id.category_id,   
            },
            // --- 4. Question --- Compensation
            {
                multiplechoice_question_text:  `<p style="font-size:14pt; "What is the purpose of a compensation?"</p>`,
                multiplechoice_question_text_de:  `<p style="font-size:14pt; "Was ist der Zweck einer Compensation?"</p>`,
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 5. Question --- Escalation Event
            {
                multiplechoice_question_text: `<p style="font-size:14pt; "What does the following event?"</p>` +` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="198 111 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uajddl78qdtzgtfvac3s13og" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1mbepo3" style="display: block;" transform="translate(204 117)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 8,20 l -8,-7 l -8,7 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg></div>`,
                multiplechoice_question_text_de:`<p style="font-size:14pt; "Was macht das angezeigte Event?"</p>` +` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="198 111 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uajddl78qdtzgtfvac3s13og" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="IntermediateThrowEvent_1mbepo3" style="display: block;" transform="translate(204 117)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 1px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="15" style="stroke: black; stroke-width: 1px; fill: none;"/><path d="M 18,7.2 l 8,20 l -8,-7 l -8,7 Z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg></div>`,
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 6. Question --- Link Event
            { 
                multiplechoice_question_text: `<p style="font-size:14pt; "Used to connect two sections of the process. Can be used to create looping situations or to avoid long Sequence Flow lines. Which of the following events is described?"</p>`,
                multiplechoice_question_text_de:`<p style="font-size:14pt; "Wird verwendet, um zwei Abschnitte des Prozesses zu verbinden. Kann verwendet werden, um Schleifen zu erzeugen oder lange Sequece Flows zu vermeiden. Welches der folgenden Events wird beschrieben?"</p>`,
                multiplechoice_question_categories:getCategory_id.category_id,   
            }
            ,
            // --- 7. Question --- Complex Gateway
            {
                multiplechoice_question_text: `<p style="font-size:14pt; "What is the name of the following gateway?"</p>` +` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="62" height="62" viewBox="252 130 62 62" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0w58e6n" style="display: block;" transform="translate(258 136)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0 -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>` ,
                multiplechoice_question_text_de: `<p style="font-size:14pt; "Wie lautet der Name des angezeigten Gateways?"</p>`+` <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="62" height="62" viewBox="252 130 62 62" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_0w58e6n" style="display: block;" transform="translate(258 136)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><path d="m 23,13 0,7.116788321167883 -5.018248175182482,-5.018248175182482 -3.102189781021898,3.102189781021898 5.018248175182482,5.018248175182482 -7.116788321167883,0 0,4.37956204379562 7.116788321167883,0 -5.018248175182482,5.018248175182482 l 3.102189781021898,3.102189781021898 5.018248175182482,-5.018248175182482 0,7.116788321167883 4.37956204379562,0 0,-7.116788321167883 5.018248175182482,5.018248175182482 3.102189781021898,-3.102189781021898 -5.018248175182482,-5.018248175182482 7.116788321167883,0 0,-4.37956204379562 -7.116788321167883,0 5.018248175182482,-5.018248175182482 -3.102189781021898,-3.102189781021898 -5.018248175182482,5.018248175182482 0,-7.116788321167883 -4.37956204379562,0 z" style="fill: black; stroke-width: 1px; stroke: black;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>` ,
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
    }
}