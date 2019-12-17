import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection, AdvancedConsoleLogger } from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';

/**
 * Seeder for the Intro class,
 * #TODO => Automate Loading from .json files
 * CURRENTLY OUT OF ORDER
 * 
 */
export default class SeedBeginnerIntro implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
      /**   //retrieve CatEntity(Beginer)
        console.log("Retreiving category id");
        const getCategory_id_b = await getRepository(CategoryEntity)
        .createQueryBuilder("category")
        .where("category.category_name = :category_name",{category_name:'Beginner'})
        .getOne();
        //assign const
        const catBeginer = getCategory_id_b.category_id;
        //import seed files
        const beginnerIntro = require('./seedFiles/introSeed.js');
        // loop through file
        console.log(beginnerIntro);
        console.log(beginnerIntro.intro1);
        for(let i = 4;i>0;i--){
            let key = 'intro1';
            console.log(key);
            console.log(beginnerIntro.key);
           // console.log(beginnerIntro.key.value);
           */
        /**let key = "intro"+i;
        let name = "data"+1;
        let prevID = "";
        if(prevID == ""){
            //is first 
            const data1 = await connection
            .createQueryBuilder()
            .insert()
            .into(IntroEntity)
            .values([
                {
                    intro_text: beginnerIntro.key.value,
                    intro_categories: catBeginer,
                    intro_next_id:"currentlyLastCatBeginner",
                    intro_is_first:false,
                    intro_currently_last_intropage:true
               },
            ])
            .execute();
        }else{
            //nicht erstes
            const data2 = await connection
            .createQueryBuilder()
            .insert()
            .into(IntroEntity)
            .values([
                {
                    intro_text: beginnerIntro.key.value,
                    intro_categories: catBeginer,
                    intro_next_id:name.identifiers[0].intro_id,
                    intro_is_first:false,
                    intro_currently_last_intropage:true
            },
            ])
            .execute();**/
        
    }
}