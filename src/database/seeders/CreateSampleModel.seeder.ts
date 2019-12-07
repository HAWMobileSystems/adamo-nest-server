import { Seeder, Factory } from 'typeorm-seeding';
import { ModelEntity } from '../../modules/model/model.entity';
import { Connection, getRepository, getConnection } from 'typeorm';
import { ModelDto } from 'modules/model/dto/ModelDto';
import { PermissionEntity } from '../../modules/permission/permission.entity';
// import { UserLoginDto } from 'modul es/auth/dto/UserLoginDto';
import { UserEntity } from '../../modules/user/user.entity';
import { RoleRepository } from '../../modules/role/role.repository';
import { PermissionRepository } from 'modules/permission/permission.repository';
import { Logger } from '@nestjs/common';
import { RoleEntity } from '../../modules/role/role.entity';

export default class CreateSampleModel implements Seeder {
public async run(factory: Factory, connection: Connection): Promise<any> {
    const sampleModel: ModelEntity = new ModelEntity();

    // id: '',
    // modelName: '',
    // modelVersion: 1,
    // modelXML: '',
    // createdAt: new Date(),
    // updatedAt: new Date(),
    // dtoClass: ModelDto)

    // }
    const data = await connection
        .createQueryBuilder()
        .insert()
        .into(ModelEntity)
        .values([
            {
                modelName: "BeispielModelsl",
                modelVersion: 1,
                modelXML: "<?xml version='1.0' encoding='UTF-8'?>\n<bpmn2:definitions xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:bpmn2='http://www.omg.org/spec/BPMN/20100524/MODEL' xmlns:bpmndi='http://www.omg.org/spec/BPMN/20100524/DI' xmlns:dc='http://www.omg.org/spec/DD/20100524/DC' xmlns:di='http://www.omg.org/spec/DD/20100524/DI' xsi' :schemaLocation='http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd' id='sample-diagram' targetNamespace='http://bpmn.io/schema/bpmn'>\n  <bpmn2:process id='Process_1' isExecutable='false'>\n    <bpmn2:startEvent id='StartEvent_1'/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id='BPMNDiagram_1'>\n    <bpmndi:BPMNPlane id='BPMNPlane_1' bpmnElement='Process_1'>\n      <bpmndi:BPMNShape id='_BPMNShape_StartEvent_2' bpmnElement='StartEvent_1'>\n        <dc:Bounds height='36.0' width='36.0' x='412.0' y='240.0'/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>",
            },
        ])
        .execute();

        Logger.log(data.identifiers)
        const modelID = data.identifiers[0].id
            // const allUsers = await userService.list();
            // const currentModel = await this.modelService.findOneOrFail(data);
            // for(let user of allUsers) {
            //     await this.permissionService.createPermissionForNewModel(currentModel, user);
            // }
            // return data;
        // })

        // const values = () => {
        //     for(element of elements ){
        //         userID role.canRead, modelID;
        //     }
        //     return values
        // }

        // await getConnection()
        //     .createQueryBuilder()
        //     .relation(UserEntity, "users")
        //     .of(post)
        //     .add(category);
        // await getConnection().createQueryBuilder().relation(UserEntity, 'users').of(userEntity).add(categoriy);

        const users = await getRepository(UserEntity)
            .createQueryBuilder("users")
            .getMany();
        Logger.log("USERS")
        Logger.log(users);
        const readWriteRole = await getRepository(RoleEntity)
            .createQueryBuilder("roles")
            .where("roles.roleName = :roleName", { roleName: 'readWrite' })
            .getOne();
        Logger.log(readWriteRole);

        const array = this.buildInsertionArray(users, modelID, readWriteRole)
        Logger.log("Array")
        Logger.log(array)
        //     canWriteRole.s

        await connection.createQueryBuilder().insert().into(PermissionEntity)
            .values(this.buildInsertionArray(users, modelID, readWriteRole)).execute()
        //     .execute();

        // await connection.createQueryBuilder().insert().into(PermissionEntity).values();
        // connection.createQueryBuilder().select(

}

buildInsertionArray(users, insertedModelID, role) {
    let array = []
    Logger.log(users)
    for(let user of users) {
        array.push({
            modelID : insertedModelID, 
            userID: user.id, 
            roleID: role.id
        })
    }
    Logger.log(array)
    return array;
}
}



