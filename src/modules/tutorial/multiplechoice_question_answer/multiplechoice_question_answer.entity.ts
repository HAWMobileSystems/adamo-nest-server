import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { MultipleChoice_Question_AnswerDto } from "./dto/Multiplechoice_Question_AnswerDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { Tg_Multiplechoice_AnsweredEntity } from "../tg_multiplechoice_answered/tg_multiplechoice_answered.entity";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";

@Entity({name:'multiplechoice_question_answer'})
export class Multiplechoice_Question_AnswerEntity extends AbstractEntity<MultipleChoice_Question_AnswerDto>{

    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Tg_Multiplechoice_AnsweredEntity, mult_qs_an => mult_qs_an.id)
    public multiplechoice_question_answer_id: string;
   
    @ApiModelProperty()
    @OneToMany(type => Multiplechoice_QuestionEntity, multiplechoice_question_entitiy => multiplechoice_question_entitiy.multiplechoice_question_id)
    public multiplechoice_question_answer_question_id: Multiplechoice_QuestionEntity;

    @ApiModelProperty()
    @Column()
    public multiplechoice_question_answer_text: string;
   
    @ApiModelProperty()
    @Column()
    public multiplechoice_question_answer_true: boolean;
    
    dtoClass = MultipleChoice_Question_AnswerDto;
}