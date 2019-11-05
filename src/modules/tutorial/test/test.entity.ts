import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { UserEntity } from './../../user/user.entity';
import { TestDto } from "./dto/testDto";
enum tg{
    beginner,
    advanced,
    professional
}
@Entity({name:'test'})
export class TestEntity extends AbstractEntity<TestDto>{

    @PrimaryGeneratedColumn('uuid')
    public test_id: string;
   
    @ApiModelProperty()
    @OneToMany(type => Multiplechoice_QuestionEntity, multiplechoice_question_entitiy => multiplechoice_question_entitiy.multiplechoice_question_id)
    public test_solved_test_id: string;

    @ApiModelProperty()
    @ManyToOne(type => UserEntity, user => user.id)
    public test_user_id: string;
   
    @ApiModelProperty()
    @OneToMany(type => CategoryEntity, category => category.id)
    public test_categorie: CategoryEntity;

    @ApiModelProperty()
    @Column()
    public test_tg_identifier: tg;

    dtoClass = TestDto;
}