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
            },
            {
                category_name:"Advanced",
           },
            {
                category_name:"Professional",
            },
        ])
        .execute();
    }
}