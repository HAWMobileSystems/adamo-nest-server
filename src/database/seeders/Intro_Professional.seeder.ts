import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { IsBase64 } from 'class-validator';
import { start } from 'repl';
/**
 * Seeder for the Intro Professional.
 * 
 */
export default class SeedIntroProf implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        console.log("Retreiving category id");
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Professional'})
        .getOne();
        //console.log("Assignactual ID to variable");
        const catProf = getCategory_id.category_id;
        //console.log("Create SVG picture Variable");
        const getPic1Text = "<svg viewBox=\"0 0 1226 1481\" ><path d=\"M0 1394V87C0 46.3 13.3 19.8 40 7.5 66.7-4.8 98.7.3 136 23l1034 634c37.3 22.7 56 50.3 56 83s-18.7 60.3-56 83L136 1458c-37.3 22.7-69.3 27.8-96 15.5-26.7-12.3-40-38.8-40-79.5z\" fill=\"#FFFFFF\"/></svg>"       
        //console.log("Start Seeding Page 1");
        const md1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: `## Ueberschrift
                pls add picture here: 
                ${getPic1Text}.
                This is not 
                something Like.`,
                intro_categories: catProf,
                intro_identifier:'1',
           },
        ])
        .execute();
    }
}