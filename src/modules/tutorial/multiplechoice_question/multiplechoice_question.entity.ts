import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { Multiplechoice_QuestionDto } from "./dto/Multiplechoice_QuestionDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_Question_AnswerEntity } from "../multiplechoice_question_answer/multiplechoice_question_answer.entity";

@Entity({name:'multiplechoice_question'})
export class Multiplechoice_QuestionEntity extends AbstractEntity<Multiplechoice_QuestionDto>{

    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Multiplechoice_Question_AnswerEntity, mult_qs_an => mult_qs_an.multiplechoice_question_answer_id)
    public multiplechoice_question_id: string;

    @ApiModelProperty()
    @Column()
    public multiplechoice_question_text: string;

    @ApiModelProperty()
    @Column()
    @OneToMany(type => CategoryEntity, category => category.category_id)
    public multiplechoice_question_categories: string;


    dtoClass = Multiplechoice_QuestionDto;
}