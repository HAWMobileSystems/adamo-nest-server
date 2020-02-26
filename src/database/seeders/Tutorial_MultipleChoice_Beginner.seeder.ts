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
                multiplechoice_question_text_de: "Was macht das Start Event?",
                multiplechoice_question_categories:getCategory_id.category_id,

            },
            // --- 2. Question --- Pool
            {
                multiplechoice_question_text: "A … is a limited space of a single process (contains the sequence flows between activities). A process is completely contained in … Which of the following elements fits to this description?",
                multiplechoice_question_text_de: "... ist ein begrenzter Bereich eines einzelnen Prozesses (enthält die Sequenzflüsse zwischen den Aktivitäten). Ein Prozess ist vollständigenthalten in ... Welches der folgenden Elemente passt zu dieser Beschreibung?",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 3. Question --- Receive Task
            { 
                multiplechoice_question_text: "Waits for a message to arrive from an internal or external participant. Which task fulfills this?",
                multiplechoice_question_text_de: "Wartet auf die Ankunft einer Nachricht von einem internen oder externen Teilnehmer.Welcher Task erfüllt dies?",
                multiplechoice_question_categories:getCategory_id.category_id,   
            },
            // --- 4. Question --- Script Task
            {
                multiplechoice_question_text: "What’s the purpose of a Script Task?",
                multiplechoice_question_text_de: "Was ist der Zweck eines Skript Tasks?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 5. Question --- Sequence Flow
            {
                multiplechoice_question_text: "What is the name of the connecting object element below?" +` <div><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="424.000000pt" height="61.000000pt" viewBox="0 0 424.000000 61.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,61.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M3550 356 l0 -56 -1687 -2 c-1493 -3 -1688 -5 -1688 -18 0 -13 195 -15 1688 -18 l1687 -2 0 -56 c0 -49 2 -56 18 -52 111 31 402 123 402 128 0 5-290 97 -402 128 -16 4 -18 -3 -18 -52z"/> </g> </svg>`,
                multiplechoice_question_text_de: "Wie lautet der Name des angezeigten verbindenden Objektelements?" +` <div><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="424.000000pt" height="61.000000pt" viewBox="0 0 424.000000 61.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,61.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M3550 356 l0 -56 -1687 -2 c-1493 -3 -1688 -5 -1688 -18 0 -13 195 -15 1688 -18 l1687 -2 0 -56 c0 -49 2 -56 18 -52 111 31 402 123 402 128 0 5-290 97 -402 128 -16 4 -18 -3 -18 -52z"/> </g> </svg> </div>`,
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 6. Question --- Manual Task
            { 
                multiplechoice_question_text: "It is expected to be performed without the aid of any business process execution engine or any application. Which of the following tasks fits to this description?",
                multiplechoice_question_text_de: "Der Task wird ohne die Hilfe einer Geschäftsprozessausführungs-Engine oder einer Anwendung durchgeführt. Welcher der folgenden Tasks passt zu dieser Beschreibung?",
                multiplechoice_question_categories:getCategory_id.category_id,   
            }
            ,
            // --- 7. Question --- User Task
            {
                multiplechoice_question_text: "When do you use the User Task?",
                multiplechoice_question_text_de: "Wann wird der User Task verwendet?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 8. Question --- Lane
            {
                multiplechoice_question_text: "What is the name of the diagram element below?" +` <div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="547.000000pt" height="183.000000pt" viewBox="0 0 547.000000 183.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M80 920 l0 -850 2645 0 2645 0 0 850 0 850 -2645 0 -2645 0 0 -850z m280 0 l0 -840 -135 0 -135 0 0 840 0 840 135 0 135 0 0 -840z m5000 425 l0 -415 -2495 0 -2495 0 0 415 0 415 2495 0 2495 0 0 -415z m0 -845 l0 -420 -2495 0 -2495 0 0 420 0 420 2495 0 2495 0 0 -420z"/><path d="M186 1204 c-35 -35 -6 -94 47 -94 14 0 33 7 41 16 20 20 21 68 1 84 -18 15 -19 9 -4 -24 9 -20 9 -29 -1 -41 -21 -26 -30 -17 -30 30 0 38 -3 45 -19 45 -11 0 -27 -7 -35 -16z m34 -40 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M177 1083 c-11 -10 -8 -51 3 -58 8 -5 8 -11 1 -19 -6 -7 -9 -27 -8 -44 l2 -32 60 1 60 1 -43 9 c-54 10 -62 16 -62 40 0 16 7 19 50 19 64 0 66 18 3 22 -41 3 -48 6 -51 26 -3 20 0 22 47 22 28 0 51 5 51 10 0 11 -103 14 -113 3z"/><path d="M225 881 c-38 -5 -51 -11 -53 -24 -6 -31 7 -67 24 -67 13 0 14 3 4 14 -13 17 -10 57 5 57 6 0 14 -15 18 -35 9 -36 26 -49 52 -40 11 5 14 19 13 55 -1 27 -5 48 -8 47 -3 0 -27 -4 -55 -7z m51 -43 c7 -23 -9 -44 -25 -34 -6 4 -11 20 -11 36 0 22 4 28 15 24 8 -3 17 -15 21 -26z"/><path d="M120 740 c0 -6 29 -10 67 -10 l68 0 -68 -45 c-37 -25 -67 -50 -67 -55 0 -6 36 -10 85 -10 98 0 116 18 23 22 l-63 3 63 40 c34 22 62 46 62 52 0 10 -24 13 -85 13 -50 0 -85 -4 -85 -10z"/><path d="M466 1628 c-21 -30 -20 -44 4 -68 42 -42 119 -7 105 48 -4 15 -12 30 -18 34 -18 11 -20 2 -5 -21 9 -15 10 -26 2 -38 -21 -34 -34 -26 -34 21 0 39 -3 46 -19 46 -11 0 -27 -10 -35 -22z m34 -34 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M455 1490 c-4 -12 -2 -27 5 -35 8 -10 8 -18 -1 -33 -10 -17 -10 -24 1 -37 12 -14 12 -18 -1 -26 -9 -6 11 -8 56 -8 l70 1 -49 9 c-55 9 -71 20 -63 43 5 12 20 16 57 16 66 0 65 18 -2 22 -46 3 -53 6 -56 26 -3 20 0 22 47 22 27 0 53 5 56 10 4 6 -16 10 -54 10 -51 0 -61 -3 -66 -20z"/><path d="M508 1313 c-40 -4 -49 -8 -54 -28 -3 -13 -1 -33 6 -44 11 -22 30 -29 30 -11 0 6 -4 10 -10 10 -5 0 -10 12 -10 26 0 34 34 29 38 -6 7 -50 42 -66 63 -29 8 15 8 28 1 44 -7 16 -7 26 1 34 8 8 7 11 -3 9 -8 -1 -36 -3 -62 -5z m52 -53 c0 -10 -5 -22 -11 -26 -14 -8 -29 14 -29 44 0 20 3 21 20 12 11 -6 20 -19 20 -30z"/><path d="M410 1160 c0 -5 28 -10 63 -12 l62 -3 -62 -39 c-88 -54 -84 -66 22 -66 101 0 115 18 18 22 l-68 3 68 43 c37 23 67 47 67 52 0 6 -36 10 -85 10 -47 0 -85 -4 -85 -10z"/><path d="M466 778 c-21 -30 -20 -44 4 -68 42 -42 119 -7 105 48 -4 15 -12 30 -18 34 -18 11 -20 2 -5 -21 9 -15 10 -26 2 -38 -21 -34 -34 -26 -34 21 0 39 -3 46 -19 46 -11 0 -27 -10 -35 -22z m34 -34 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M455 640 c-4 -12 -2 -27 5 -35 8 -10 8 -18 -1 -33 -10 -17 -10 -24 1 -37 12 -14 12 -18 -1 -26 -9 -6 11 -8 56 -8 l70 1 -49 9 c-55 9 -71 20 -63 43 5 12 20 16 57 16 66 0 65 18 -2 22 -46 3 -53 6 -56 26 -3 20 0 22 47 22 27 0 53 5 56 10 4 6 -16 10 -54 10 -51 0 -61 -3 -66 -20z"/><path d="M508 463 c-40 -4 -49 -8 -54 -28 -3 -13 -1 -33 6 -44 11 -22 30 -29 30 -11 0 6 -4 10 -10 10 -5 0 -10 12 -10 26 0 34 34 29 38 -6 7 -50 42 -66 63 -29 8 15 8 28 1 44 -7 16 -7 26 1 34 8 8 7 11 -3 9 -8 -1 -36 -3 -62 -5z m52 -53 c0 -10 -5 -22 -11 -26 -14 -8 -29 14 -29 44 0 20 3 21 20 12 11 -6 20 -19 20 -30z"/><path d="M410 320 c0 -5 28 -10 63 -12 l62 -3 -62 -39 c-88 -54 -84 -66 22 -66 101 0 115 18 18 22 l-68 3 68 43 c37 23 67 47 67 52 0 6 -36 10 -85 10 -47 0 -85 -4 -85 -10z"/></g></svg></div>`,
                multiplechoice_question_text_de: "Was ist der Name des angezeigten Diagramm-Elements?" +` <div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="547.000000pt" height="183.000000pt" viewBox="0 0 547.000000 183.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M80 920 l0 -850 2645 0 2645 0 0 850 0 850 -2645 0 -2645 0 0 -850z m280 0 l0 -840 -135 0 -135 0 0 840 0 840 135 0 135 0 0 -840z m5000 425 l0 -415 -2495 0 -2495 0 0 415 0 415 2495 0 2495 0 0 -415z m0 -845 l0 -420 -2495 0 -2495 0 0 420 0 420 2495 0 2495 0 0 -420z"/><path d="M186 1204 c-35 -35 -6 -94 47 -94 14 0 33 7 41 16 20 20 21 68 1 84 -18 15 -19 9 -4 -24 9 -20 9 -29 -1 -41 -21 -26 -30 -17 -30 30 0 38 -3 45 -19 45 -11 0 -27 -7 -35 -16z m34 -40 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M177 1083 c-11 -10 -8 -51 3 -58 8 -5 8 -11 1 -19 -6 -7 -9 -27 -8 -44 l2 -32 60 1 60 1 -43 9 c-54 10 -62 16 -62 40 0 16 7 19 50 19 64 0 66 18 3 22 -41 3 -48 6 -51 26 -3 20 0 22 47 22 28 0 51 5 51 10 0 11 -103 14 -113 3z"/><path d="M225 881 c-38 -5 -51 -11 -53 -24 -6 -31 7 -67 24 -67 13 0 14 3 4 14 -13 17 -10 57 5 57 6 0 14 -15 18 -35 9 -36 26 -49 52 -40 11 5 14 19 13 55 -1 27 -5 48 -8 47 -3 0 -27 -4 -55 -7z m51 -43 c7 -23 -9 -44 -25 -34 -6 4 -11 20 -11 36 0 22 4 28 15 24 8 -3 17 -15 21 -26z"/><path d="M120 740 c0 -6 29 -10 67 -10 l68 0 -68 -45 c-37 -25 -67 -50 -67 -55 0 -6 36 -10 85 -10 98 0 116 18 23 22 l-63 3 63 40 c34 22 62 46 62 52 0 10 -24 13 -85 13 -50 0 -85 -4 -85 -10z"/><path d="M466 1628 c-21 -30 -20 -44 4 -68 42 -42 119 -7 105 48 -4 15 -12 30 -18 34 -18 11 -20 2 -5 -21 9 -15 10 -26 2 -38 -21 -34 -34 -26 -34 21 0 39 -3 46 -19 46 -11 0 -27 -10 -35 -22z m34 -34 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M455 1490 c-4 -12 -2 -27 5 -35 8 -10 8 -18 -1 -33 -10 -17 -10 -24 1 -37 12 -14 12 -18 -1 -26 -9 -6 11 -8 56 -8 l70 1 -49 9 c-55 9 -71 20 -63 43 5 12 20 16 57 16 66 0 65 18 -2 22 -46 3 -53 6 -56 26 -3 20 0 22 47 22 27 0 53 5 56 10 4 6 -16 10 -54 10 -51 0 -61 -3 -66 -20z"/><path d="M508 1313 c-40 -4 -49 -8 -54 -28 -3 -13 -1 -33 6 -44 11 -22 30 -29 30 -11 0 6 -4 10 -10 10 -5 0 -10 12 -10 26 0 34 34 29 38 -6 7 -50 42 -66 63 -29 8 15 8 28 1 44 -7 16 -7 26 1 34 8 8 7 11 -3 9 -8 -1 -36 -3 -62 -5z m52 -53 c0 -10 -5 -22 -11 -26 -14 -8 -29 14 -29 44 0 20 3 21 20 12 11 -6 20 -19 20 -30z"/><path d="M410 1160 c0 -5 28 -10 63 -12 l62 -3 -62 -39 c-88 -54 -84 -66 22 -66 101 0 115 18 18 22 l-68 3 68 43 c37 23 67 47 67 52 0 6 -36 10 -85 10 -47 0 -85 -4 -85 -10z"/><path d="M466 778 c-21 -30 -20 -44 4 -68 42 -42 119 -7 105 48 -4 15 -12 30 -18 34 -18 11 -20 2 -5 -21 9 -15 10 -26 2 -38 -21 -34 -34 -26 -34 21 0 39 -3 46 -19 46 -11 0 -27 -10 -35 -22z m34 -34 c0 -24 -4 -34 -12 -32 -24 8 -22 68 2 68 5 0 10 -16 10 -36z"/><path d="M455 640 c-4 -12 -2 -27 5 -35 8 -10 8 -18 -1 -33 -10 -17 -10 -24 1 -37 12 -14 12 -18 -1 -26 -9 -6 11 -8 56 -8 l70 1 -49 9 c-55 9 -71 20 -63 43 5 12 20 16 57 16 66 0 65 18 -2 22 -46 3 -53 6 -56 26 -3 20 0 22 47 22 27 0 53 5 56 10 4 6 -16 10 -54 10 -51 0 -61 -3 -66 -20z"/><path d="M508 463 c-40 -4 -49 -8 -54 -28 -3 -13 -1 -33 6 -44 11 -22 30 -29 30 -11 0 6 -4 10 -10 10 -5 0 -10 12 -10 26 0 34 34 29 38 -6 7 -50 42 -66 63 -29 8 15 8 28 1 44 -7 16 -7 26 1 34 8 8 7 11 -3 9 -8 -1 -36 -3 -62 -5z m52 -53 c0 -10 -5 -22 -11 -26 -14 -8 -29 14 -29 44 0 20 3 21 20 12 11 -6 20 -19 20 -30z"/><path d="M410 320 c0 -5 28 -10 63 -12 l62 -3 -62 -39 c-88 -54 -84 -66 22 -66 101 0 115 18 18 22 l-68 3 68 43 c37 23 67 47 67 52 0 6 -36 10 -85 10 -47 0 -85 -4 -85 -10z"/></g></svg></div>`,
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 9. Question --- End Event
            { 
                multiplechoice_question_text: "What does the end event? (More than one answer is correct)",
                multiplechoice_question_text_de: "Was macht das End Event? (Mehrere Antworten richtig)",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            
            // --- 10. Question --- Exclusive Gateway
            {
                multiplechoice_question_text: "How many paths are chosen by an exclusive gateway?",
                multiplechoice_question_text_de: "Wie viele Pfade wählt ein Exclusive Gateway?",
                multiplechoice_question_categories:getCategory_id.category_id,
            },
            // --- 11. Question --- Message Flow
            {
                multiplechoice_question_text: "What is the name of the connecting object element below?" +` <div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="402.000000pt" height="52.000000pt" viewBox="0 0 402.000000 52.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3510 345 l0 -65 -80 0 c-73 0 -80 -2 -80 -20 0 -18 7 -20 80 -20 l80 0 0 -65 c0 -55 3 -65 18 -65 29 1 277 134 280 151 2 11 -36 34 -137 82 -77 37 -145 67 -151 67 -6 0 -10 -27 -10 -65z m140 -31 c55 -26 100 -50 100 -53 0 -7 -185 -101 -199 -101 -6 0 -10 45 -10 100 0 55 2 100 5 100 2 0 49 -21 104 -46z"/><path d="M200 343 c-93 -35 -72 -167 27 -167 28 0 42 7 63 32 l26 32 127 0 c120 0 127 1 127 20 0 19 -7 20 -127 20 l-127 0 -25 30 c-26 30 -64 44 -91 33z m58 -45 c15 -15 15 -61 0 -76 -26 -26 -88 0 -88 36 0 40 61 67 88 40z"/><path d="M717 273 c-4 -3 -7 -12 -7 -20 0 -10 32 -13 150 -13 143 0 150 1 150 20 0 19 -7 20 -143 20 -79 0 -147 -3 -150 -7z"/><path d="M1150 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M1590 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2030 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2470 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2910 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/></g></svg></div>`,
                multiplechoice_question_text_de: "Wie lautet der Name des angezeigten verbindenden Objektelements?" +` <div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="402.000000pt" height="52.000000pt" viewBox="0 0 402.000000 52.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3510 345 l0 -65 -80 0 c-73 0 -80 -2 -80 -20 0 -18 7 -20 80 -20 l80 0 0 -65 c0 -55 3 -65 18 -65 29 1 277 134 280 151 2 11 -36 34 -137 82 -77 37 -145 67 -151 67 -6 0 -10 -27 -10 -65z m140 -31 c55 -26 100 -50 100 -53 0 -7 -185 -101 -199 -101 -6 0 -10 45 -10 100 0 55 2 100 5 100 2 0 49 -21 104 -46z"/><path d="M200 343 c-93 -35 -72 -167 27 -167 28 0 42 7 63 32 l26 32 127 0 c120 0 127 1 127 20 0 19 -7 20 -127 20 l-127 0 -25 30 c-26 30 -64 44 -91 33z m58 -45 c15 -15 15 -61 0 -76 -26 -26 -88 0 -88 36 0 40 61 67 88 40z"/><path d="M717 273 c-4 -3 -7 -12 -7 -20 0 -10 32 -13 150 -13 143 0 150 1 150 20 0 19 -7 20 -143 20 -79 0 -147 -3 -150 -7z"/><path d="M1150 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M1590 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2030 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2470 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/><path d="M2910 260 c0 -20 4 -20 148 -18 123 3 147 5 147 18 0 13 -24 15 -147 18 -144 2 -148 2 -148 -18z"/></g></svg></div>`,
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            // --- 12. Question --- Send Task
            { 
                multiplechoice_question_text: "Sends a message to an internal or external participant. Which task is used for this?",
                multiplechoice_question_text_de: "Sendet eine Nachricht an einen internen oder externen Teilnehmer.Welcher Task wird dafür verwendet?",
                multiplechoice_question_categories:getCategory_id.category_id, 
            },
            
            // --- 13. Question --- Parallel Gateway
            {
                multiplechoice_question_text: "What is the name of the following gateway?" +` <div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="133.000000pt" height="124.000000pt" viewBox="0 0 133.000000 124.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,124.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M367 912 c-147 -147 -267 -272 -267 -277 0 -13 532 -545 545 -545 6 0 132 122 280 270 l270 270 -275 275 c-151 151 -277 275 -280 275 -3 0 -125 -120 -273 -268z m548 -12 l270 -270 -265 -265 c-146 -146 -269 -265 -275 -265 -13 0 -535 522 -535 535 0 10 520 535 530 535 3 0 127 -121 275 -270z"/><path d="M590 820 l0 -130 -130 0 -130 0 0 -55 0 -55 130 0 130 0 0 -130 0 -130 55 0 55 0 0 130 0 130 130 0 130 0 0 55 0 55 -130 0 -130 0 0 130 0 130 -55 0 -55 0 0 -130z"/></g></svg></div>`,
                multiplechoice_question_text_de: "Was ist der Name des angezeigten Gateways?" +`<div><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="133.000000pt" height="124.000000pt" viewBox="0 0 133.000000 124.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,124.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M367 912 c-147 -147 -267 -272 -267 -277 0 -13 532 -545 545 -545 6 0 132 122 280 270 l270 270 -275 275 c-151 151 -277 275 -280 275 -3 0 -125 -120 -273 -268z m548 -12 l270 -270 -265 -265 c-146 -146 -269 -265 -275 -265 -13 0 -535 522 -535 535 0 10 520 535 530 535 3 0 127 -121 275 -270z"/><path d="M590 820 l0 -130 -130 0 -130 0 0 -55 0 -55 130 0 130 0 0 -130 0 -130 55 0 55 0 0 130 0 130 130 0 130 0 0 55 0 55 -130 0 -130 0 0 130 0 130 -55 0 -55 0 0 -130z"/></g></svg></div>`,
                multiplechoice_question_categories:getCategory_id.category_id,
            },

            // --- 14. Question --- Task
            {
                multiplechoice_question_text: "What is represented with a Task?",
                multiplechoice_question_text_de: "Was wird durch einen Task repräsentiert?",
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
                multiplechoice_question_answer_text_de:"Den Ablauf des Prozesses beeinflussen, aber den Prozess nicht starten oder (direkt) beenden.",
                multiplechoice_question_answer_true:false
            },
            // true
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates where a process starts",
                multiplechoice_question_answer_text_de:"Zeigt an, wo ein Prozess beginnt",
                multiplechoice_question_answer_true:true
            },
            // false 
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates when the process ends",
                multiplechoice_question_answer_text_de:"Zeigt an, wann der Prozess endet",
                multiplechoice_question_answer_true:false
            },
            // false
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[0].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the flow of the process",
                multiplechoice_question_answer_text_de:"Beendet den Ablauf des Prozesses",
                multiplechoice_question_answer_true:false
            },



            // --- 2. Question --- Answers --- Pools
        
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"Lane",
                multiplechoice_question_answer_true:false
            

            
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"Pool",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Subprocess",
                multiplechoice_question_answer_text_de:"Subprocess",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[1].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task",
                multiplechoice_question_answer_text_de:"Task",
                multiplechoice_question_answer_true:false
            },

            // --- 3. Question --- Answers --- Receive Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Receive Task",
                multiplechoice_question_answer_text_de:"Receive Task",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Send Task",
                multiplechoice_question_answer_text_de:"Send Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"Script Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[2].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Manual Task",
                multiplechoice_question_answer_text_de:"Manual Task",
                multiplechoice_question_answer_true:false
            },

            // --- 4. Question --- Answers --- Script Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task uses some sort of service that could be a web service or an automated application",
                multiplechoice_question_answer_text_de:"Der Skript-Task verwendet eine Art Dienst, der ein Webdienst oder eine automatisierte Anwendung sein kann",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is executed by a business process engine.",
                multiplechoice_question_answer_text_de:"Der Skript-Task wird von einer Geschäftsprozess-Engine ausgeführt",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is a task where a human performer performs the task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"Der Skript-Task ist ein Task, bei der eine Person die Aufgabe mit Hilfe einer Softwareanwendung ausführt",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[3].multiplechoice_question_id,
                multiplechoice_question_answer_text:"The Script Task is expected to be performed without the aid of any business process execution engine or any application",
                multiplechoice_question_answer_text_de:"Der Skript Task wird ohne die Hilfe einer Geschäftsprozessausführungs-Engine oder einer Anwendung ausgeführt wird",
                multiplechoice_question_answer_true:false
            },

            // --- 5. Question --- Answers --- Sequence Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Flow",
                multiplechoice_question_answer_text_de:"Message Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Process Flow",
                multiplechoice_question_answer_text_de:"Process Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"Task Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[4].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"Sequence Flow",
                multiplechoice_question_answer_true:true
            },

            // --- 6. Question --- Answers --- Manual Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"User Task",
                multiplechoice_question_answer_text_de:"User Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"Script Task",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Service Task",
                multiplechoice_question_answer_text_de:"Service Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Manual Task",
                multiplechoice_question_answer_text_de:"Manual Task",
                multiplechoice_question_answer_true:true
            },

            // --- 7. Question --- Answers --- User Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a human performer performs the Task with the assistance of a software application.",
                multiplechoice_question_answer_text_de:"Wenn eine Person den Task mit Hilfe einer Software-Anwendung ausführt ",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task is expected to be performed without the aid of any business process execution engine or any application.",
                multiplechoice_question_answer_text_de:"Wenn eine Aufgabe ohne die Hilfe einer Geschäftsprozessausführungs-Engine oder einer Anwendung ausgeführt wird",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task uses some sort of service that could be a web service or an automated application.",
                multiplechoice_question_answer_text_de:"Wenn ein Task eine Art von Dienst verwendet, der ein Webdienst oder eine automatisierte Anwendung sein könnte",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[6].multiplechoice_question_id,
                multiplechoice_question_answer_text:"When a task is executed by a business process engine.",
                multiplechoice_question_answer_text_de:"Wenn eine Aufgabe von einer Geschäftsprozess-Engine ausgeführt wird",
                multiplechoice_question_answer_true:false
            },
            // --- 8-. Question --- Answers --- Lane
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Pool",
                multiplechoice_question_answer_text_de:"Pool",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Lane",
                multiplechoice_question_answer_text_de:"Lane",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[7].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Subprocess",
                multiplechoice_question_answer_text_de:"Subprocess",
                multiplechoice_question_answer_true:false
            },
            // --- 9. Question --- Answers --- End Event
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Affect the flow of the process, but will not start or (directly) terminate the Process",
                multiplechoice_question_answer_text_de:"Den Ablauf des Prozesses beeinflussen, aber den Prozess nicht starten oder (direkt) beenden",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Ends the flow of the process.",
                multiplechoice_question_answer_text_de:"Beendet den Ablauf des Prozesses ",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates where a process starts.",
                multiplechoice_question_answer_text_de:"Zeigt an, wo ein Prozess beginnt",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[8].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Indicates when the process ends.",
                multiplechoice_question_answer_text_de:"Zeigt an, wann der Prozess endet ",
                multiplechoice_question_answer_true:true
            },
            // --- 10. Question --- Answers --- Exclusive Gateway
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"At least one",
                multiplechoice_question_answer_text_de:"Mindestens einen",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[5].multiplechoice_question_id,
                multiplechoice_question_answer_text:"All",
                multiplechoice_question_answer_text_de:"Alle",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[9].multiplechoice_question_id,
                multiplechoice_question_answer_text:"One",
                multiplechoice_question_answer_text_de:"Einen",
                multiplechoice_question_answer_true:true
            },
            // --- 11. Question --- Answers --- Message Flow
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Task Flow",
                multiplechoice_question_answer_text_de:"Task Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Sequence Flow",
                multiplechoice_question_answer_text_de:"Sequence Flow",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Message Flow",
                multiplechoice_question_answer_text_de:"Message Flow",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[10].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Process Flow",
                multiplechoice_question_answer_text_de:"Process Flow",
                multiplechoice_question_answer_true:false
            },

            // --- 12. Question --- Answers --- Send Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Receive Task",
                multiplechoice_question_answer_text_de:"Receive Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Script Task",
                multiplechoice_question_answer_text_de:"Script Task",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Send Task",
                multiplechoice_question_answer_text_de:"Send Task",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[11].multiplechoice_question_id,
                multiplechoice_question_answer_text:"User Task",
                multiplechoice_question_answer_text_de:"User Task",
                multiplechoice_question_answer_true:false
            },

            // --- 13. Question --- Answers --- Parallel Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Parallel Gateway",
                multiplechoice_question_answer_text_de:"Parallel Gateway",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Exclusive Gateway",
                multiplechoice_question_answer_text_de:"Exclusive Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Inclusive Gateway",
                multiplechoice_question_answer_text_de:"Inclusive Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Complex Gateway",
                multiplechoice_question_answer_text_de:"Complex Gateway",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[12].multiplechoice_question_id,
                multiplechoice_question_answer_text:"Event-based Gateway",
                multiplechoice_question_answer_text_de:"Event-based Gateway",
                multiplechoice_question_answer_true:false
            },

            // --- 14. Question --- Answers --- Task
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task tells a process to continue exclusively down one path.",
                multiplechoice_question_answer_text_de:"Ein Task sagt einem Prozess, dass er ausschließlich auf einem Pfad weitergehen soll",
                multiplechoice_question_answer_true:false
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task represents work that is performed within a Business Process.",
                multiplechoice_question_answer_text_de:"Ein Task repräsentiert Arbeit, die innerhalb eines Geschäftsprozesses ausgeführt wird",
                multiplechoice_question_answer_true:true
            },
            {
                multiplechoice_question_answer_question_id:seedMult_Qs.identifiers[13].multiplechoice_question_id,
                multiplechoice_question_answer_text:"A task represents a department of a company.",
                multiplechoice_question_answer_text_de:"Ein Task repräsentiert eine Abteilung eines Unternehmens",
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