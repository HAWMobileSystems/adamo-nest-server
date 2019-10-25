import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { Modelling_QuestionDto } from "../modelling_question/dto/Modelling_QuestionDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Modelling_RulesEntity } from "../modelling_rules/modelling_rules.entity";
@Entity({name:'modelling_question'})
export class Modelling_QuestionEntity extends AbstractEntity<Modelling_QuestionDto>{

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ApiModelProperty()
    @Column()
    public question_text: string;

    @ApiModelProperty()
    @OneToMany(type => CategoryEntity, category => category.id)
    public categories: CategoryEntity;

    @ApiModelProperty()
    @OneToMany(type => Modelling_RulesEntity, modelling_rule => modelling_rule.id)
    public custom_ruleset: Modelling_RulesEntity;

    dtoClass = Modelling_QuestionDto;
}