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
    public mod_qs_id: string;

    @ApiModelProperty()
    @Column()
    public mod_qs_question_text: string;

    @ApiModelProperty()
    @Column()
    @OneToMany(type => CategoryEntity, category => category.category_id)
    public mod_qs_categories: string;

    @ApiModelProperty()
    @Column()
    @OneToMany(type => Modelling_RulesEntity, modelling_rule => modelling_rule.modelling_rule_id)
    public mod_qs_custom_ruleset: string;

    dtoClass = Modelling_QuestionDto;
}