import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Modelling_RulesEntity } from '../modelling_rules.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class Modelling_RulesDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public modelling_rule_text: string;

    @ApiModelPropertyOptional()
    public modelling_rule_id: string;


    constructor(modelling: Modelling_RulesEntity) {
        super(modelling);
        this.modelling_rule_text = modelling.modelling_rule_text;
        this.modelling_rule_id = modelling.modelling_rule_id;
    }
}