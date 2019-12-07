import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Tg_Multiplechoice_AnsweredDto } from "./dto/tg_multiplechoice_answeredDto";
import { Multiplechoice_Question_AnswerEntity } from "../multiplechoice_question_answer/multiplechoice_question_answer.entity";
import { Tg_MultiplechoiceEntity } from "../tg_multiplechoice/tg_multiplechoice.entity";
import { Exclude } from "class-transformer";

@Entity({name:'tg_multiplechoice_answered'})
export class Tg_Multiplechoice_AnsweredEntity extends AbstractEntity<Tg_Multiplechoice_AnsweredDto>{

    @ApiModelProperty()
    @ManyToOne(type => Tg_MultiplechoiceEntity, test => test.tg_multiplechoice_id)
    public tg_multiplechoice_answered_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => Multiplechoice_Question_AnswerEntity, test => test.multiplechoice_question_answer_id)
    public tg_multiplechoice_answered_answer_id: string;

    @ApiModelProperty()
    @Column()
    public tg_multiplechoice_answered_answerd: boolean;

    @Exclude()
    dtoClass = Tg_Multiplechoice_AnsweredDto;
}