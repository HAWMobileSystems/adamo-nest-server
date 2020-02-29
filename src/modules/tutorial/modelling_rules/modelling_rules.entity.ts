import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Modelling_RulesDto } from "../modelling_rules/dto/Modelling_RulesDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { Modelling_Question_RulesEntity} from '../modelling_question_rules/modelling_question_rules.entity';
import { Exclude } from "class-transformer";

@Entity({name:'modelling_rules'})
export class Modelling_RulesEntity extends AbstractEntity<Modelling_RulesDto>{

    // @PrimaryGeneratedColumn('uuid')
    // public modelling_rule_unique_id: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_id: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_text: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_text_de: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_svg: string;

    @ApiModelProperty()
    @Column()
    public modelling_rule_svg_de: string;

    @Exclude()
    dtoClass = Modelling_RulesDto;
}