import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';
import { IsBase64 } from 'class-validator';
import { start } from 'repl';


//import * as page1 from '!!raw-loader!./seedFiles/introBeginner/intro_text1.md';
//import  page1  from './seedFiles/introBeginner/intro_text1.md!txt';
//import page1 from '../seeders/seedFiles/introBeginner/page1.txt';
/**
 * Seeder for the Intro Beginner,
 * define Pic as SVG
 * 
 */
export default class SeedIntroBeginner implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        console.log("Retreiving category id");
        const getCategory_id_b = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();


        //console.log("Assignactual ID to variable");
        const catBeginer = getCategory_id_b.category_id;
        const md1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: `
                <div>
                <h1>Überschrift dieses Beginner levels</h1>
                <p>Some text as description</p>
                <p>maybe a picture</p>
                </div>`,
                intro_categories: catBeginer,
                intro_identifier:'1',
           },
           {
            intro_text: `
            <div>
            <h1>Überschrift level2 Beginner</h1>
            <p>Some text as description</p>
            <p>maybe a picture</p>
            </div>`,
            intro_categories: catBeginer,
            intro_identifier:'2',
       },
        ])
        .execute();

        //console.log("GET Text from File");
       // const someTextContent = require('./seedFiles/introBeginner/');

        //let reader = new FileReader();

        //let content = reader.readAsText("./seedFiles/introBeginner/page1.txt");
        // var fs = require("fs");
        // var text = fs.readFileSync(".seedFiles/introBeginner/page1.md").toString('utf-8');
        // console.log(text);
        
        // //console.log("Start Seeding Page 1");
        // const md1 = await connection
        // .createQueryBuilder()
        // .insert()
        // .into(IntroEntity)
        // .values([
        //     {
        //         intro_text: text,
        //         intro_categories: catBeginer,
        //         intro_identifier:'1',
        //    },
        // ])
        // .execute();
    }
}