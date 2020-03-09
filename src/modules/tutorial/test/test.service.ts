import { Injectable } from '@nestjs/common';
import { QueryRunner, SelectQueryBuilder, UpdateResult, getRepository } from 'typeorm';
import { TestEntity } from './test.entity';
import { TestRepository } from './test.repository';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice/tg_multiplechoice.entity';
import { UserEntity } from 'modules/user/user.entity';
import { Tg_ModellingEntity } from '../tg_modelling/tg_modelling.entity';

@Injectable()
export class TestService {
       constructor(
        // @InjectRepository(Role)
        private readonly repository: TestRepository
    ) {
    }

    /**
     * THis Method returns the Leaders
     * @param clas in which the leaders are displayed (MultipleChoice/Intro/Modelling)
     * @param count number of leaders
     */

    async getStatistics(clas: any,count: number) {
        //Get all users: THERE CANNOT B ANY TEST WITHOUT A USER
        //Get the leading Persons per
        clas = 'Mult'
        switch(clas){
            case('Mult'):{
                const userStatistics = await getRepository(TestEntity)
                .createQueryBuilder("test")
                .select("test.test_solved_test_id","id")
                .addSelect("test.test_user_id","user")
                .addSelect("tg_multiplechoice.tg_multiplechoice_multiplechoice_id","qs")
                .innerJoin(Tg_MultiplechoiceEntity,'tg_multiplechoice','tg_multiplechoice.tg_multiplechoice_id::VARCHAR = test.test_solved_test_id ')
                .where("tg_multiplechoice.tg_multiplechoice_solved_correct = :tg_multiplechoice_solved_correct",{tg_multiplechoice_solved_correct:true})
                .getRawMany();



                let userMap :Map<any,string[]> = new Map()
                let userArray = []
                userStatistics.forEach(e=>{
                    userArray.push(e.user)
                })
                let uniqueUserArray = this.uniqueArray(userArray)
                let uniqueUserStringArray = []
                uniqueUserArray.forEach(uid =>{
                    // let user_id = uid
                    uniqueUserStringArray = []
                    userStatistics.forEach(e=>{
                        // console.log()
                        console.log(e.user == uid)
                        console.log(e.user === uid)
                        if(e.user == uid){
                            uniqueUserStringArray.push(e.qs)
                        }
                    })
                    userMap.set(uid,uniqueUserStringArray)
                })
                console.log(userMap)
                return userMap
            }
            case('Mod'):{
                // const UserStatistics = await getRepository(TestEntity)
                // .createQueryBuilder("test")
                // .select("test_table.test_solved_test_id","id")
                // .innerJoin(Tg_ModellingEntity,'tg_mult', 'tg_mult.tg_multiplechoice_id::VARCHAR = test.test_solved_test_id ')
                // .where("tg_mult.tg_modelling_validation_score > :tg_modelling_validation_score",{tg_modelling_validation_score:66})
                // .getRawMany();
            }
            case('Intro'):{

            }
        }
        
    }


    async find(): Promise<TestEntity[]> {
        return await this.repository.find();
    }

    async create(intro: TestEntity) {
        return await this.repository.save(intro);
    }

    async update(intro: TestEntity): Promise<UpdateResult> {
        return await this.repository.update(intro.id, intro);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }
   
    createQueryBuilder(alias: string = 'test', queryRunner?: QueryRunner): SelectQueryBuilder<TestEntity> {
        return this.repository.createQueryBuilder(alias, queryRunner);
    }
    //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    uniqueArray(array) {
        var result = Array.from(new Set(array));
        return result    
    }
}
