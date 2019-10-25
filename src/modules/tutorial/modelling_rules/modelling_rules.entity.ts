import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { Modelling_RulesDto } from "../modelling_rules/dto/Modelling_RulesDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Modelling_QuestionEntity } from "../modelling_question/modelling_question.entity";

@Entity({name:'modelling_rules'})
export class Modelling_RulesEntity extends AbstractEntity<Modelling_RulesDto>{

    @PrimaryGeneratedColumn('uuid')
    @OneToMany(type => Modelling_QuestionEntity, mod_qs => mod_qs.id)
    public modelling_rule_id: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_text: string;

    dtoClass = Modelling_RulesDto;
}