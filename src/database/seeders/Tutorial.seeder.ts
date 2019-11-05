import { Seeder, Factory } from 'typeorm-seeding';
import { IntroEntity } from './../../modules/tutorial/intro/intro.entity';
import { Connection, getRepository, getConnection } from 'typeorm';

export default class CreateSampleModel implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const data = await connection
        .createQueryBuilder()
        .insert()
        .into(IntroEntity)
        .values([
            {
                intro_text: "BeispielModell",
                next_id:"asudhi",
           },
        ])
        .execute();
    }
}