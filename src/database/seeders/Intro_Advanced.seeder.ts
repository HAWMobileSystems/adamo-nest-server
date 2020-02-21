import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';

/**
 * Seeder for the Intro Advanced,
 * define SVG and push to DB
 * 
 */
export default class SeedIntroAdvanced implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        console.log("Retreiving category id");
        const getCategory_id = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Advanced'})
        .getOne();
        //console.log("Assignactual ID to variable");
        const catAdvanced = getCategory_id.category_id;
        //console.log("Create SVG picture Variable");
    
        //console.log("Start Seeding Page 1");
        const md1 = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: `
                <div>
                <h1>Englisch---Überschrift dieses levels</h1>
                <p>Some text as description</p>
                <p>maybe a picture</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve" width="512px" height="512px">
                <g>
                    <path d="M54.319,37.839C54.762,35.918,55,33.96,55,32c0-9.095-4.631-17.377-12.389-22.153c-0.473-0.29-1.087-0.143-1.376,0.327   c-0.29,0.471-0.143,1.086,0.327,1.376C48.724,15.96,53,23.604,53,32c0,1.726-0.2,3.451-0.573,5.147C51.966,37.051,51.489,37,51,37   c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7C58,41.341,56.509,39.024,54.319,37.839z M51,49c-2.757,0-5-2.243-5-5s2.243-5,5-5   s5,2.243,5,5S53.757,49,51,49z" fill="#D80027"/>
                    <path d="M38.171,54.182C35.256,55.388,32.171,56,29,56c-6.385,0-12.527-2.575-17.017-7.092C13.229,47.643,14,45.911,14,44   c0-3.859-3.14-7-7-7s-7,3.141-7,7s3.14,7,7,7c1.226,0,2.378-0.319,3.381-0.875C15.26,55.136,21.994,58,29,58   c3.435,0,6.778-0.663,9.936-1.971c0.51-0.211,0.753-0.796,0.542-1.307C39.267,54.213,38.681,53.971,38.171,54.182z M2,44   c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5S2,46.757,2,44z" fill="#D80027"/>
                    <path d="M4,31.213c0.024,0.002,0.048,0.003,0.071,0.003c0.521,0,0.959-0.402,0.997-0.93c0.712-10.089,7.586-18.52,17.22-21.314   C23.142,11.874,25.825,14,29,14c3.86,0,7-3.141,7-7s-3.14-7-7-7c-3.851,0-6.985,3.127-6.999,6.975   C11.42,9.922,3.851,19.12,3.073,30.146C3.034,30.696,3.449,31.175,4,31.213z M29,2c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5   S26.243,2,29,2z" fill="#D80027"/>
                </g>
                </svg>
                </div>`,
                intro_text_de: `
                <div>
                <h1>Überschrift dieses levels</h1>
                <p>Some text as description</p>
                <p>maybe a picture</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve" width="512px" height="512px">
                <g>
                    <path d="M54.319,37.839C54.762,35.918,55,33.96,55,32c0-9.095-4.631-17.377-12.389-22.153c-0.473-0.29-1.087-0.143-1.376,0.327   c-0.29,0.471-0.143,1.086,0.327,1.376C48.724,15.96,53,23.604,53,32c0,1.726-0.2,3.451-0.573,5.147C51.966,37.051,51.489,37,51,37   c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7C58,41.341,56.509,39.024,54.319,37.839z M51,49c-2.757,0-5-2.243-5-5s2.243-5,5-5   s5,2.243,5,5S53.757,49,51,49z" fill="#D80027"/>
                    <path d="M38.171,54.182C35.256,55.388,32.171,56,29,56c-6.385,0-12.527-2.575-17.017-7.092C13.229,47.643,14,45.911,14,44   c0-3.859-3.14-7-7-7s-7,3.141-7,7s3.14,7,7,7c1.226,0,2.378-0.319,3.381-0.875C15.26,55.136,21.994,58,29,58   c3.435,0,6.778-0.663,9.936-1.971c0.51-0.211,0.753-0.796,0.542-1.307C39.267,54.213,38.681,53.971,38.171,54.182z M2,44   c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5S2,46.757,2,44z" fill="#D80027"/>
                    <path d="M4,31.213c0.024,0.002,0.048,0.003,0.071,0.003c0.521,0,0.959-0.402,0.997-0.93c0.712-10.089,7.586-18.52,17.22-21.314   C23.142,11.874,25.825,14,29,14c3.86,0,7-3.141,7-7s-3.14-7-7-7c-3.851,0-6.985,3.127-6.999,6.975   C11.42,9.922,3.851,19.12,3.073,30.146C3.034,30.696,3.449,31.175,4,31.213z M29,2c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5   S26.243,2,29,2z" fill="#D80027"/>
                </g>
                </svg>
                </div>`,
                intro_categories: catAdvanced,
                intro_identifier:'1',
           },
           {
            intro_text: `
            <div>
            <h1>Englisch----Überschrift level2</h1>
            <p>Some text as description</p>
            <p>maybe a picture</p>
            </div>`,
            intro_text_de: `
            <div>
            <h1>Überschrift level2</h1>
            <p>Some text as description</p>
            <p>maybe a picture</p>
            </div>`,
            intro_categories: catAdvanced,
            intro_identifier:'2',
       },
        ])
        .execute();
    }
}