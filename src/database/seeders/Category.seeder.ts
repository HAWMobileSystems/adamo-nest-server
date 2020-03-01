import { Seeder, Factory } from 'typeorm-seeding';
import { Connection} from 'typeorm';
import { CategoryEntity } from '../../modules/tutorial/category/category.entity';

export default class SeedCategory implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        const seedCategory = await connection
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values([
           {
                category_name:"Beginner",
                category_identifier:1
            },
            {
                category_name:"Advanced",
                category_identifier:2
           },
            {
                category_name:"Professional",
                category_identifier:3
            },
        ])
        .execute();
    }
}