import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { Modelling_Question_RulesDto } from "../modelling_question_rules/dto/Modelling_Question_RulesDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Modelling_QuestionEntity } from "../modelling_question/modelling_question.entity";
import { Modelling_RulesEntity } from "../modelling_rules/modelling_rules.entity";
@Entity({name:'modelling_question_rules'})
export class Modelling_Question_RulesEntity extends AbstractEntity<Modelling_Question_RulesDto>{

    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(type => Modelling_QuestionEntity, mod_qs => mod_qs.id)
    public modelling_question_id: string;

    @ApiModelProperty()
    @OneToMany(type => Modelling_RulesEntity, mod_rule => mod_rule.id)
    public modelling_rule_id: string;

    dtoClass = Modelling_Question_RulesDto;
}