import { MigrationInterface, QueryRunner, getRepository, getConnection } from 'typeorm';
import { UserEntity } from 'modules/user/user.entity';
import { RoleType } from 'constants/role-type';

export class InsertUsers1565611653967 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        console.log('insertUsers')
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(UserEntity)
            .values([
                {
                    email: 'daniel.hilpoltsteiner@haw-landshut.de',
                    password: '12345678',
                    role: RoleType.Admin
                },{
                    email: 'markus.schmidtner@haw-landshut.de',
                    password: '12345678',
                    role: RoleType.Admin
                },{
                    email: 'demo@demo.de',
                    password: '12345678',
                },{
                    email: 'admin@demo.de',
                    password: '12345678',
                    role: RoleType.Admin
                },
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
