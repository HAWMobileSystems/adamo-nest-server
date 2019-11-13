import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from './../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection } from 'typeorm';
import { Modelling_QuestionEntity } from './../../modules/tutorial/modelling_question/modelling_question.entity';
import { CategoryEntity } from './../../modules/tutorial/category/category.entity';
import { Modelling_RulesEntity} from './../../modules/tutorial/modelling_rules/modelling_rules.entity';
import { Modelling_Question_RulesEntity } from './../../modules/tutorial/modelling_question_rules/modelling_question_rules.entity';
export default class SeedTutorial implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        /**
        const data = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "BeispielModellll",
                next_id:"asudhiasdasd",
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

       // const seedCategory = await connection
       // .createQueryBuilder()
       // .insert()
       // .into(CategoryEntity)
       // .values([
        //    {
       //         name:"Beginner",
       //     },
       //     {
       //         name:"Advanced",
       //     },
       //     {
       //         name:"Professional",
       //     },
       // ])
       // .execute();

        const category_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.name = :name",{name:'Beginner'})
        .getOne();
        
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
        .execute()*/

        
        
    }
}