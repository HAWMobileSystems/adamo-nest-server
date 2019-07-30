import { Factory, Seeder, define } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import * as uuid from 'uuid';

import { RoleEntity } from '../../modules/role/role.entity';

export class CreateRoles implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {

        await connection
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
        //await factory(Role)().seedMany(10);
        // const em = connection.createEntityManager();
        //     await em.save(this.createRole('admin', true, true, true));
        //     await em.save(this.createRole('readOnly', true, false, false));
        //     await em.save(this.createRole('readWrite', true, true, false));
        //     return await em.save(this.createRole('noAccess', false, false, false));
    }

    // createRole (name, canRead, canWrite, isAdmin) {
    //     const role = new Role();
    //         role.id = uuid.v1();
    //         role.name = name
    //         role.canRead = canRead;
    //         role.canWrite = canWrite;
    //         role.isAdmin = isAdmin;
    //         return role;
    // }

}
