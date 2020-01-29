import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { UserEntity } from "modules/user/user.entity";
import { IntroEntity } from "./../intro/intro.entity";
import { Tg_ModellingDto } from "./dto/tg_modellingDto";
import { Modelling_QuestionEntity } from "../modelling_question/modelling_question.entity";
import { Exclude } from "class-transformer";


@Entity({name:'tg_modelling'})
export class Tg_ModellingEntity extends AbstractEntity<Tg_ModellingDto>{

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_modelling_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => Modelling_QuestionEntity, intro => intro.mod_qs_id)
    public tg_modelling_question_id: string;

    /**
     * String or Entity ?
    @ApiModelProperty()
    @OneToMany(type => Modelling_QuestionEntity, intro => intro.id)
    public tg_modelling_question_id: string;

     */
    @ApiModelProperty()
    @Column()
    public tg_modelling_xml_providet: string;

    @ApiModelProperty()
    @Column()
    public tg_modelling_validation_score: string;

    @Exclude()
    dtoClass = Tg_ModellingDto;
}