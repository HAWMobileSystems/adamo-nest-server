import { Seeder, Factory } from 'typeorm-seeding';
import { Connection} from 'typeorm';

export default class SeedTutorial implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
    }
}