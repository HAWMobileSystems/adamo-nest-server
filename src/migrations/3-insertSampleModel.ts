import {
    MigrationInterface,
    QueryRunner,
    getRepository,
    getConnection,
} from 'typeorm';
import { UserEntity } from 'modules/user/user.entity';
import { ModelEntity } from 'modules/model/model.entity';
import { Logger } from '@nestjs/common';
import { RoleEntity } from 'modules/role/role.entity';
import { PermissionEntity } from 'modules/permission/permission.entity';
import { PermissionDto } from 'modules/permission/dto/PermissionDto';

export class InsertSampleModel1565611653967 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        console.log('insertSampleModel')
        let savedModel = null;
        const sampleModel = new ModelEntity();
        sampleModel.modelName =  'BeispielModell';
        sampleModel.modelVersion = 1,
        sampleModel.modelXML=
        "<?xml version='1.0' encoding='UTF-8'?>\n<bpmn2:definitions xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:bpmn2='http://www.omg.org/spec/BPMN/20100524/MODEL' xmlns:bpmndi='http://www.omg.org/spec/BPMN/20100524/DI' xmlns:dc='http://www.omg.org/spec/DD/20100524/DC' xmlns:di='http://www.omg.org/spec/DD/20100524/DI' xsi' :schemaLocation='http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd' id='sample-diagram' targetNamespace='http://bpmn.io/schema/bpmn'>\n  <bpmn2:process id='Process_1' isExecutable='false'>\n    <bpmn2:startEvent id='StartEvent_1'/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id='BPMNDiagram_1'>\n    <bpmndi:BPMNPlane id='BPMNPlane_1' bpmnElement='Process_1'>\n      <bpmndi:BPMNShape id='_BPMNShape_StartEvent_2' bpmnElement='StartEvent_1'>\n        <dc:Bounds height='36.0' width='36.0' x='412.0' y='240.0'/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>",

        await queryRunner.manager.save(ModelEntity, sampleModel).then(model => savedModel = model);


        // const data  = await queryRunner.manager
        //     .createQueryBuilder()
        //     .insert()
        //     .into(ModelEntity)
        //     .values([
        //         {
        //             modelName: 'BeispielModell',
        //             modelVersion: 1,
        //             modelXML:
        //                 "<?xml version='1.0' encoding='UTF-8'?>\n<bpmn2:definitions xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:bpmn2='http://www.omg.org/spec/BPMN/20100524/MODEL' xmlns:bpmndi='http://www.omg.org/spec/BPMN/20100524/DI' xmlns:dc='http://www.omg.org/spec/DD/20100524/DC' xmlns:di='http://www.omg.org/spec/DD/20100524/DI' xsi' :schemaLocation='http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd' id='sample-diagram' targetNamespace='http://bpmn.io/schema/bpmn'>\n  <bpmn2:process id='Process_1' isExecutable='false'>\n    <bpmn2:startEvent id='StartEvent_1'/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id='BPMNDiagram_1'>\n    <bpmndi:BPMNPlane id='BPMNPlane_1' bpmnElement='Process_1'>\n      <bpmndi:BPMNShape id='_BPMNShape_StartEvent_2' bpmnElement='StartEvent_1'>\n        <dc:Bounds height='36.0' width='36.0' x='412.0' y='240.0'/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>",
        //         },
        //     ])
        //     .execute();
    
        // Logger.log(`After SampelModel insert` + data.identifiers);
        // console.log(`After SampelModel insert` + data);
        
        console.log(savedModel)
        // const model : ModelEntity = await queryRunner.manager.findOne(ModelEntity, savedModel)

        const users : UserEntity[] = await queryRunner.manager.getRepository(UserEntity)
            .createQueryBuilder('users')
            .getMany();
        const readWriteRole : RoleEntity = await queryRunner.manager.getRepository(RoleEntity)
            .createQueryBuilder('roles')
            .where('roles.roleName = :roleName', { roleName: 'readWrite' })
            .getOne();

        // const array = this.buildPermission(users, model, readWriteRole);
        // Logger.log(array);
        //     canWriteRole.s

        for (let user of users) {
            const permission =  new PermissionEntity();
            permission.user = user;
            permission.role = readWriteRole;
            permission.model = savedModel; 
            let savedPermission : PermissionEntity = null;

            await queryRunner.manager.save(permission).then( permission => savedPermission = permission as PermissionEntity)

            console.log(savedPermission)
        }
            // await queryRunner.manager
            // .createQueryBuilder()
            // .insert()
            // .into(PermissionEntity)
            // .values(this.buildPermission(users, model, readWriteRole))
            // .execute();
    }

    // buildInsertionArray(users, insertedModelID, role) {
    //     let array = [];
    //     for (let user of users) {
    //         array.push({
    //             modelID: insertedModelID,
    //             userID: user,
    //             roleID: role,
    //         });
    //     }
    //     return array;
    // }
    buildPermission(users: UserEntity [], model: ModelEntity, role: RoleEntity) {
        let array = [];
        for (let user of users) {
            let permission =  PermissionEntity.create();
            permission.user = user;
            permission.role = role;
            permission.model = model;
            let permissionDto = new PermissionDto(permission);
            console.log(permissionDto)
            array.push( permissionDto);
        }
        return array;
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
