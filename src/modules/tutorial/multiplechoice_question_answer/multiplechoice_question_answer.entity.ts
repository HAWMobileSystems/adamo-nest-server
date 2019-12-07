import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { Multiplechoice_Question_AnswerDto } from "./dto/Multiplechoice_Question_AnswerDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";

@Entity({name:'multiplechoice_question_answer'})
export class Multiplechoice_Question_AnswerEntity extends AbstractEntity<Multiplechoice_Question_AnswerDto>{

    @PrimaryGeneratedColumn('uuid')
    public multiplechoice_question_answer_id: string;
    
    @ApiModelProperty()
    @Column()
    @OneToMany(type => Multiplechoice_QuestionEntity, mult_qs => mult_qs.multiplechoice_question_id)
    public multiplechoice_question_answer_question_id: string;

    @ApiModelProperty()
    @Column()
    public multiplechoice_question_answer_text: string;

    @ApiModelProperty()
    @Column()
    public multiplechoice_question_answer_true: boolean;

    @Exclude()
    dtoClass = Multiplechoice_Question_AnswerDto;
}