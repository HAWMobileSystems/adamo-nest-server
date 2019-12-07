import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { UserEntity } from '../../modules/user/user.entity';
// import { User } from '../../../src/modules/models/User';
import { IntroEntity } from '../../modules/tutorial/intro/intro.entity';
import { CategoryEntity } from 'modules/tutorial/category/category.entity';

export class CreateBruce implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        // const userFactory = factory<User, { role: string }>(User as any);
        // const adminUserFactory = userFactory({ role: 'admin' });

        // const bruce = await adminUserFactory.make();
        // console.log(bruce);

        // const bruce2 = await adminUserFactory.seed();
        // console.log(bruce2);

        // const bruce3 = await adminUserFactory
        //     .map(async (e: User) => {
        //         e.firstName = 'Bruce';
        //         return e;
        //     })
        //     .seed();
        // console.log(bruce3);

        // return bruce;

        // const connection = await factory.getConnection();
       
         await connection
            .createQueryBuilder()
            .insert()
            .into(UserEntity)
            .values([
                {
                    email: 'demo@demo.dee3eassas3',
                    password: '123456789111',
               },
            ])
            .execute();
        
    }

    //     const em = connection.createEntityManager();

    //     const element = {
    //         email: "daniel.hilpoltsteiner@haw-landshut.com",
    //         password: "12345678"
    //         }
    //     return await em.save(element);
    //     // const user = new UserEntity();
    //     // user.id = uuid.v1();
    //     // user.firstName = 'Daniel';
    //     // user.lastName = 'Hilpoltsteiner';
    //     // user.email = 'daniel.hilpoltsteiner@haw-landshut.de';
    //     // // user.username = 'bruce';
    //     // user.password = '12345678';
    //     // return await em.save(user);
    // }
}
