import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Tg_Multiplechoice_AnsweredDto } from "./dto/tg_multiplechoice_answeredDto";
import { Multiplechoice_Question_AnswerEntity } from "../multiplechoice_question_answer/multiplechoice_question_answer.entity";
@Entity({name:'tg_multiplechoice'})
export class Tg_Multiplechoice_AnsweredEntity extends AbstractEntity<Tg_Multiplechoice_AnsweredDto>{

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_multiplechoice_answered_id: string;
   
    @ApiModelProperty()
    @ManyToOne(type => Multiplechoice_Question_AnswerEntity, test => test.multiplechoice_question_answer_id)
    public tg_multiplechoice_answered_answer_id: Multiplechoice_Question_AnswerEntity;

    @ApiModelProperty()
    public tg_multiplechoice_answered_answerd: boolean;

    dtoClass = Tg_Multiplechoice_AnsweredDto;
}