import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { Tg_Multiplechoice_AnsweredEntity } from "../tg_multiplechoice_answered/tg_multiplechoice_answered.entity";
import { Tg_MultiplechoiceDto } from './dto/tg_multiplechoiceDto';
import { Exclude } from "class-transformer";

@Entity({name:'tg_multiplechoice'})
export class Tg_MultiplechoiceEntity extends AbstractEntity<Tg_MultiplechoiceDto>{
  
    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Tg_Multiplechoice_AnsweredEntity, test => test.tg_multiplechoice_answered_from_qs_id)
    public tg_multiplechoice_unique_id: string;

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_multiplechoice_id: string;

    @ApiModelProperty()
    @Column()
    @OneToMany( type => Multiplechoice_QuestionEntity, mc => mc.multiplechoice_question_id)
    public tg_multiplechoice_multiplechoice_id: string;

    @ApiModelProperty()
    @Column()
    public tg_multiplechoice_solved_correct: boolean;

    @Exclude()
    dtoClass = Tg_MultiplechoiceDto;
}