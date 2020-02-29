import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Modelling_RulesEntity } from '../modelling_rules.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class Modelling_RulesDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public modelling_rule_id: string;

    @ApiModelPropertyOptional()
    public modelling_rule_text: string;

    @ApiModelPropertyOptional()
    public modelling_rule_text_de: string;

    @ApiModelPropertyOptional()
    public modelling_rule_svg: string;

    @ApiModelPropertyOptional()
    public modelling_rule_svg_de: string;

    constructor(modelling: Modelling_RulesEntity) {
        super(modelling);
    //    this.modelling_rule_unique_id = modelling.modelling_rule_unique_id;
        this.modelling_rule_text = modelling.modelling_rule_text;
        this.modelling_rule_id = modelling.modelling_rule_id;
        this.modelling_rule_text_de = modelling.modelling_rule_text_de;
        this.modelling_rule_svg = modelling.modelling_rule_svg;
        this.modelling_rule_svg_de = modelling.modelling_rule_svg_de;
    }
}