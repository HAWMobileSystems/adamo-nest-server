import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { TestEntity } from "./../test/test.entity";
import { Tg_Multiplechoice_AnsweredEntity } from "../tg_multiplechoice_answered/tg_multiplechoice_answered.entity";
import { Tg_MultiplechoiceDto } from './dto/tg_multiplechoiceDto';
import { Exclude } from "class-transformer";
@Entity({name:'tg_multiplechoice'})
export class Tg_MultiplechoiceEntity extends AbstractEntity<Tg_MultiplechoiceDto>{

  
    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Tg_Multiplechoice_AnsweredEntity, test => test.id)
    public tg_multiplechoice_unique_id: string;
    /** 
    @ApiModelProperty()
    @OneToMany(type => TestEntity, intro => intro.test_id)
    public tg_multiplechoice_id: string;
     */
    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_multiplechoice_id: string;

    @ApiModelProperty()
    @Column()
    @OneToMany( type => Multiplechoice_QuestionEntity, mc => mc.multiplechoice_question_id)
    public tg_multiplechoice_multiplechoice_id: string;

    @Exclude()
    dtoClass = Tg_MultiplechoiceDto;
}