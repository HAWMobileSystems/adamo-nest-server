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
                <h1>This is the start of the beginners level</h1>
                <h2> Start Event </h2>
                <p>Indicates where a particular process starts. It does not have any particular behavior. It is optional and can be replaced by a start message event or no event at all, for example.</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="167 96 48 48" version="1.1"><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="StartEvent_1" style="display: block;" transform="translate(173 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g>
                </svg>
                </div>`,
                intro_text_de: `
                <div>
                <h1>Das ist der start des Levels Beginner</h1>
                <h2> Start Event </h2>
                <p>Zeigt an wo ein Prozess startet. Hat kein spezifisches Verhalten. Es ist optional und kann durch ein Start-Message Eregniss oder kein Ergeniss ersetzt werden.</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="167 96 48 48" version="1.1"><g class="djs-group"><g class="djs-element djs-shape selected" data-element-id="StartEvent_1" style="display: block;" transform="translate(173 102)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 2px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g>
                </svg>
                </div>`,
                intro_categories: catBeginer,
                intro_identifier:'1',
           },
           {
            intro_text: `
            <div>
            <h3>End Event</h3>
            <table style="width:100%">
            <tr>
                <th>Element</th>
                <th>Description</th>
                <th>Best Practices</th>
                <th>Notation</th>
            </tr>
            <tr>
                <td>End Event</td>
                <td>Indicates when the process ends. In terms of sequence flows, the end event ends the flow of the process, and thus, will not have any outgoing sequence flows.</td>
                <td>End event indicates where a process will end. </td>
                <td><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="193 119 48 48" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0z53vd4" style="display: block;" transform="translate(199 125)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg></td>
            </tr>
            </table>
            
            </div>`,
            intro_text_de: `
            <div>
            <h3>End Event</h3>
            <table style="width:100%">
            <tr>
                <th>Element</th>
                <th>Beschreibung</th>
                <th>Standart Vorgehensweise</th>
                <th>Notation</th>
            </tr>
            <tr>
                <td>End Event</td>
                <td>Indicates when the process ends. In terms of sequence flows, the end event ends the flow of the process, and thus, will not have any outgoing sequence flows.</td>
                <td>End event indicates where a process will end. </td>
                <td><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="193 119 48 48" version="1.1"><g class="djs-group"><g class="djs-element djs-shape" data-element-id="EndEvent_0z53vd4" style="display: block;" transform="translate(199 125)"><g class="djs-visual"><circle cx="18" cy="18" r="18" style="stroke: black; stroke-width: 4px; fill: white; fill-opacity: 0.95;"/></g><rect x="0" y="0" width="36" height="36" class="djs-hit" style="fill: none; stroke-opacity: 0; stroke: white; stroke-width: 15px;"/><rect x="-6" y="-6" width="48" height="48" class="djs-outline" style="fill: none;"/></g></g></svg></td>
            </tr>
            </table>
            
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