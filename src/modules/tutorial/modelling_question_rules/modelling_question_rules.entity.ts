import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Modelling_Question_RulesDto } from "../modelling_question_rules/dto/Modelling_Question_RulesDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { Modelling_RulesEntity } from "../modelling_rules/modelling_rules.entity";
import { Exclude } from "class-transformer";
import { Modelling_QuestionEntity } from "../modelling_question/modelling_question.entity";

@Entity({name:'modelling_question_rules'})
export class Modelling_Question_RulesEntity extends AbstractEntity<Modelling_Question_RulesDto>{

    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Modelling_RulesEntity, mod_rule => mod_rule.modelling_rule_id)
    public modelling_question_id: string;

    @ApiModelProperty()
    @Column()
    public modelling_question_rule_name: string;

    @Exclude()
    dtoClass = Modelling_Question_RulesDto;
}