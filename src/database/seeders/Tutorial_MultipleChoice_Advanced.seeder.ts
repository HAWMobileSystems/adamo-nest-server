import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, getRepository } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { Multiplechoice_QuestionEntity } from '../../modules/tutorial/multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from '../../modules/tutorial/multiplechoice_question_answer/multiplechoice_question_answer.entity';

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
            multiplechoice_question_text: `<p style="font-size:14pt;">A place where the process has read and write access. It exists independently of the lifetime of the process instance. What is described here?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Ein Ort, an dem der Prozess Lese- und Schreibzugriff hat. Er existiert unabhängig von der Lebensdauer der Prozessinstanz. Was wird hier beschrieben?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 2. Question --- Data Object
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What is represented with a data object? (More than one answer is correct)</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Was wird durch ein Data Object repräsentiert? (Mehrere Antworten richtig)</p>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 3. Question --- Message End Event
        { 
            multiplechoice_question_text: `<p style="font-size:14pt;">What does the end event below?</p>`+`
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="225 114 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0kwb2i2" style="display: block;" transform="translate(231 120)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg>
            </div>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Was macht das angezeigte End Event?</p>`+`
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="225 114 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0kwb2i2" style="display: block;" transform="translate(231 120)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><path d="m 8.459999999999999,11.34 l 0,12.6 l 18.900000000000002,0 l 0,-12.6 z l 9.450000000000001,5.4 l 9.450000000000001,-5.4" style="fill: black; stroke-width: 1px; stroke: white;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg>
            </div>`,
            multiplechoice_question_categories:getCategory_id.category_id,   
        },
        // --- 4. Question --- Timer Intermediate Event
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">Expresses a time gap in processing or a wait for a period of time. Which of the following intermediate events fits to this description?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Drückt eine zeitliche Differenz in der Prozessbearbeitung oder ein Warten auf eine bestimmte Zeitspanne aus. Welches der folgenden Intermediate Events passt zu dieser Beschreibung?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 5. Question --- Inclusive Gateway
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What is the name of the following gateway?</p>`+`
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="62" height="62" viewBox="219 111 62 62" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1wamb49" style="display: block;" transform="translate(225 117)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g></svg></div>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Was ist der Name des angezeigten Gateways?</p>`+`
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="62" height="62" viewBox="219 111 62 62" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="ExclusiveGateway_1wamb49" style="display: block;" transform="translate(225 117)"><g class="djs-visual"><polygon points="25,0 50,25 25,50 0,25" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/><circle cx="25" cy="25" r="13" style="stroke: black; stroke-width: 2.5px; fill: white;"/></g><rect x="0" y="0" width="50" height="50" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="62" height="62" class="djs-outline" style="fill: none;"/></g></g></svg></div>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 6. Question --- Message End Event
        { 
            multiplechoice_question_text: `<p style="font-size:14pt;">A message arrives and triggers the start of the process. Which of the following events fits?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Eine Nachricht kommt an und löst den Beginn des Prozesses aus. Welches der folgenden Events passt hierzu?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id,   
        }
        ,
        // --- 7. Question --- Service Task
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What’s the purpose of a Service Task?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Was ist der Zweck eines Service Tasks?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 8. Question --- Data Flow
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What is the name of the connecting object element below?</p>`+ `<div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="388.000000pt" height="106.000000pt" viewBox="0 0 388.000000 106.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,106.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M190 850 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M295 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M405 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M520 850 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M625 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M735 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M847 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M955 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1065 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1177 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1285 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1397 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1507 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1615 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1727 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M1837 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M1947 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M2057 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2167 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2277 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2387 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2497 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2607 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2717 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2827 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M2937 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3047 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3157 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3267 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3377 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3487 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3597 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3472 388 c2 -7 30 -26 61 -43 75 -39 74 -56 -4 -95 -54 -28 -70 -49 -43 -56 17 -6 189 91 189 106 0 9 -34 33 -80 57 -80 42 -130 55 -123 31z"/><path d="M190 300 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M295 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M405 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M520 300 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M625 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M735 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M845 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M955 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1065 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1175 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1285 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1395 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1505 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1615 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1724 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M1834 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M1945 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M2054 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2164 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2274 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2384 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2494 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2605 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M2714 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2825 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M2934 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3044 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3155 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M3264 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3375 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M3485 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/></g></svg></div>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Wie lautet der Name des angezeigten verbindenden Objektelements?</p>`+`<div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="388.000000pt" height="106.000000pt" viewBox="0 0 388.000000 106.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,106.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M190 850 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M295 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M405 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M520 850 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M625 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M735 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M847 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M955 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1065 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1177 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1285 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1397 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1507 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M1615 860 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1727 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M1837 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M1947 864 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25 -38 14z"/><path d="M2057 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2167 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2277 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2387 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2497 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2607 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2717 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M2827 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M2937 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3047 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3157 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3267 863 c-14 -13 -7 -33 11 -33 24 0 32 8 25 26 -5 15 -25 19 -36 7z"/><path d="M3377 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3487 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3597 863 c-14 -13 -6 -33 13 -33 13 0 20 7 20 20 0 19 -20 27 -33 13z"/><path d="M3472 388 c2 -7 30 -26 61 -43 75 -39 74 -56 -4 -95 -54 -28 -70 -49 -43 -56 17 -6 189 91 189 106 0 9 -34 33 -80 57 -80 42 -130 55 -123 31z"/><path d="M190 300 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M295 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M405 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M520 300 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18 -13 2 -18 -3 -18 -18z"/><path d="M625 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M735 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M845 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M955 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1065 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1175 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1285 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1395 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1505 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1615 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M1724 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M1834 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M1945 310 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z"/><path d="M2054 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2164 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2274 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2384 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2494 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2605 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M2714 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M2825 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M2934 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3044 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3155 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M3264 309 c-9 -15 11 -33 30 -26 9 4 13 13 10 22 -7 17 -30 20 -40 4z"/><path d="M3375 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/><path d="M3485 310 c-8 -14 3 -30 21 -30 8 0 14 9 14 20 0 21 -24 28 -35 10z"/></g></svg></div>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 9. Question --- Intermediate Error Event
        { 
            multiplechoice_question_text: `<p style="font-size:14pt;">Used to model errors that may occur and how to solve them. Which of the following intermediate events fits?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Dient zur Modellierung von eventuell auftretenden Fehlern und deren Lösung. Welches der folgenden Intermediate Events passt hierzu?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },

        // --- 10. Question --- Terminate Event
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What does the end event below?</p>`+ `<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="226 158 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1polmqf" style="display: block;" transform="translate(232 164)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="10" style="stroke: black; stroke-width: 4px; fill: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Was macht das angezeigte End Event?</p>`+ `<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="226 158 48 48" version="1.1"><defs><marker id="sequenceflow-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="11" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15 Z" style="fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker><marker id="association-end-white-black-9uh5jcqe3lsj7mx582rco918z" viewBox="0 0 20 20" refX="12" refY="10" markerWidth="10" markerHeight="10" orient="auto"><path d="M 1 5 L 11 10 L 1 15" style="fill: none; stroke-width: 1.5px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;"/></marker></defs><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_1polmqf" style="display: block;" transform="translate(232 164)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/><circle cx="18" cy="18" r="10" style="stroke: black; stroke-width: 4px; fill: black;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g><g class="djs-drag-group" style="pointer-events: none;" transform="translate(265 -168)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(329 -165)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(340 -143)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(332 -166)"/><g class="djs-drag-group" style="pointer-events: none;" transform="translate(251 -153)"/></svg></div>`,
            multiplechoice_question_categories:getCategory_id.category_id,
        },
        // --- 11. Question --- Sub Process
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">Internal details have been modeled using tasks, gateways, events and sequence flows. The element has a thin border. Which of the following elements is described?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Interne Details wurden anhand von Tasks, Gateways, Events und Sequence Flows modelliert. Das Element hat einen dünnen Rand. Welches der folgenden Elemente wird beschrieben?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },
        // --- 12. Question --- Business Rule Task
        { 
            multiplechoice_question_text: `<p style="font-size:14pt;">When do you use the Business Rule Task?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;">Wann wird der Business Rule Task verwendet?</p>`,
            multiplechoice_question_categories:getCategory_id.category_id, 
        },

        // --- 13. Question --- Parallel Gateway
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What is the name of the following gateway?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;"></p>`,
            multiplechoice_question_categories:getCategory_id.category_id,
        },

        // --- 14. Question --- Task
        {
            multiplechoice_question_text: `<p style="font-size:14pt;">What is represented with a Task?</p>`,
            multiplechoice_question_text_de: `<p style="font-size:14pt;"></p>`,
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
                multiplechoice_question_answer_text_de:"Data Object",
                multiplechoice_question_answer_true:false
            },
            // true
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Store",
                multiplechoice_question_answer_text_de:"Data Store",
                multiplechoice_question_answer_true:true
            },
            // false 
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Flow",
                multiplechoice_question_answer_text_de:"Data Flow",
                multiplechoice_question_answer_true:false
            },


            // --- 2. Question --- Answers --- Data Object
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A place where the process has read and write access",
                multiplechoice_question_answer_text_de:"Ein Ort, an dem der Prozess Lese- und Schreibzugriff hat",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Departments",
                multiplechoice_question_answer_text_de:"Abteilungen",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Information that flows through the process.",
                multiplechoice_question_answer_text_de:"Informationen, die durch den Prozess fließen",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Documents",
                multiplechoice_question_answer_text_de:"Dokumente",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Roles",
                multiplechoice_question_answer_text_de:"Rollen",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Emails",
                multiplechoice_question_answer_text_de:"Emails",
                multiplechoice_question_answer_true:true
            },

            // --- 3. Question --- Answers --- Message End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a message is sent at the end of the process.",
                multiplechoice_question_answer_text_de:"Zeigt an, dass am Ende des Prozesses eine Nachricht gesendet wird",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a data object is crated at the end of the process.",
                multiplechoice_question_answer_text_de:"Zeigt an, dass ein Datenobjekt am Ende des Prozesses erstellt wird",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates that a message is received at the end of the process.",
                multiplechoice_question_answer_text_de:"Zeigt an, dass am Ende des Prozesses eine Nachricht empfangen wird",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process and all its activities immediately",
                multiplechoice_question_answer_text_de:"Beendet den Prozess und alle seine Aktivitäten sofort",
                multiplechoice_question_answer_true:false
            },

            // --- 4. Question --- Answers --- Timer Intermediate Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Error Event",
                multiplechoice_question_answer_text_de:"Error Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Clock Event",
                multiplechoice_question_answer_text_de:"Clock Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Timer Event",
                multiplechoice_question_answer_text_de:"Timer Event",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lock Event",
                multiplechoice_question_answer_text_de:"Lock Event",
                multiplechoice_question_answer_true:false
            },

            // --- 5. Question --- Answers --- Inclusive Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Parallel Gateway",
                multiplechoice_question_answer_text_de:"Parallel Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Complex Gateway",
                multiplechoice_question_answer_text_de:"Complex Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Event-based Gateway",
                multiplechoice_question_answer_text_de:"Event-based Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Exclusive Gateway",
                multiplechoice_question_answer_text_de:"Exclusive Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Inclusive Gateway",
                multiplechoice_question_answer_text_de:"Inclusive Gateway",
                multiplechoice_question_answer_true:true
            },

            // --- 6. Question --- Answers --- Message End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message End Event",
                multiplechoice_question_answer_text_de:"Message End Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Start Event",
                multiplechoice_question_answer_text_de:"Message Start Event",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Start Event",
                multiplechoice_question_answer_text_de:"Data Start Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Intermediate Message Start Event",
                multiplechoice_question_answer_text_de:"Intermediate Message Start Event",
                multiplechoice_question_answer_true:false
            },

            // --- 7. Question --- Answers --- Service Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task uses some sort of service that could be a web service or an automated application.",
                multiplechoice_question_answer_text_de:"Der Service Task verwendet eine Art von Dienst, der ein Webdienst oder eine automatisierte Anwendung sein kann",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task is a task where a human performer performs the task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"Der Service Task ist ein Task, bei dem eine Person die Aufgabe mit Hilfe einer Softwareanwendung ausführt",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Service Task is expected to be performed without the aid of any business process execution engine o rany application.",
                multiplechoice_question_answer_text_de:"Der Service Task ist ein Task, bei dem eine Aufgabe ohne die Hilfe einer Geschäftsprozessausführungs-Engine oder einer Anwendung ausgeführt wird",
                multiplechoice_question_answer_true:false
            },

            // --- 8-. Question --- Answers --- Data Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"Task Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"Sequence Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Data Flow",
                multiplechoice_question_answer_text_de:"Data Flow",
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
                multiplechoice_question_answer_text_de:"Escalation Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Conditional Event",
                multiplechoice_question_answer_text_de:"Conditional Event",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Error Event",
                multiplechoice_question_answer_text_de:"Error Event",
                multiplechoice_question_answer_true:true
            },
            // --- 10. Question --- Answers --- Terminate Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process immediately.",
                multiplechoice_question_answer_text_de:"Beendet den Prozess sofort",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the process and all its activities immediately.",
                multiplechoice_question_answer_text_de:"Beendet den Prozess und alle seine Aktivitäten sofort",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the tasks in a lane.",
                multiplechoice_question_answer_text_de:"Beendet die Tasks in einer Lane",
                multiplechoice_question_answer_true:true
            },
            // --- 11. Question --- Answers --- Sub Process
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task",
                multiplechoice_question_answer_text_de:"Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"Pool",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"Lane",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sub Process",
                multiplechoice_question_answer_text_de:"Sub Process",
                multiplechoice_question_answer_true:true
            },

            // --- 12. Question --- Answers --- Business Rule Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied to specific process activities.",
                multiplechoice_question_answer_text_de:"Wenn Geschäftsregeln bei spezifischen Prozessaktivitäten angewendet werden",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied to the whole process.",
                multiplechoice_question_answer_text_de:"Wenn Geschäftsregeln beim gesamten Prozess angewendet werden",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When business rules are applied on gateways.",
                multiplechoice_question_answer_text_de:"Wenn Geschäftsregeln bei Gateways angewendet werden",
                multiplechoice_question_answer_true:false
            },
        ])
        .execute();
    }
}