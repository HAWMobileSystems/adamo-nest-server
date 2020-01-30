import { MigrationInterface, QueryRunner, getRepository, getConnection } from 'typeorm';
import { RoleEntity } from 'modules/role/role.entity';

export class InsertRoles1565611653967 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
  
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(RoleEntity)
            .values([
                {'roleName': 'admin', 'canRead': true,'canWrite': true, 'isAdmin': true},
                {'roleName': 'readOnly', 'canRead': true,'canWrite': false, 'isAdmin': false},
                {'roleName': 'readWrite', 'canRead': true,'canWrite': true, 'isAdmin': false},
                {'roleName': 'noAccess', 'canRead': false,'canWrite': false, 'isAdmin': false},
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "roles"`);
    }
}
