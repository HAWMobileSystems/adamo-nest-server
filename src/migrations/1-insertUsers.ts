import { MigrationInterface, QueryRunner, getRepository, getConnection } from 'typeorm';
import { UserEntity } from 'modules/user/user.entity';

export class test1565611653967 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(UserEntity)
            .values([
                {
                    email: 'daniel.hilpoltsteiner@haw-landshut.de',
                    password: '12345678',
                },{
                    email: 'markus.schmidtner@haw-landshut.de',
                    password: '12345678',
                },
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
