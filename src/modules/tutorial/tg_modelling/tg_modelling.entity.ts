import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
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

    @ApiModelProperty()
    @Column()
    public tg_modelling_xml_providet: string;

    @ApiModelProperty()
    @Column()
    public tg_modelling_validation_score: number;

    @ApiModelProperty()
    @Column()
    public tg_modelling_editing_duration: number;

    @Exclude()
    dtoClass = Tg_ModellingDto;
}