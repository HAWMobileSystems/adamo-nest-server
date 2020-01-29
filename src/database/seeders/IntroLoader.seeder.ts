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
//import jsonFile from './seedFiles/';
export default class SeedIntroLoader implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        
        //const word = (<any>jsonFile).intro_text;
        //console.log(word)



        /**
        console.log("Retreiving category id");
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        
        console.log("Seeding Text 1/40");
        const data1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "As already stated, a Sequence Flow is used to show the order of Flow elements in a business process diagram. When connecting Flow elements with Sequence Flows, certain rules need to be followed as presented on the next table (Figure 4), obtained from the BPMN 2.0 specification",
                intro_categories: getCategory_id.category_id,
                intro_next_id:"currentlyLastIntroPage",
                intro_is_first:false,
                intro_currently_last_intropage:true
           },
        ])
        .execute();
        console.log("Seeding Text 2/40");
        const data2 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "Exclusive Gateway - A diverging Exclusive Gateway (Decision) is used to create alternative paths within a Process flow - Only one of the paths can be taken, this means the gateway is exclusive - A Decision can be thought of as a question that is asked at a particular point in the Process - The question has a defined set of alternative answers - Each answer is associated with a condition Expression that is associated with a Gateway’s outgoing Sequence Flows",
                intro_categories: getCategory_id.category_id,
                intro_next_id:data1.identifiers[0].intro_id,
                intro_is_first:false,
                intro_currently_last_intropage:false
           },
        ])
        .execute();

        */

    }
}