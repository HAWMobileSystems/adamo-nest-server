import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Modelling_Question_RulesEntity } from '../modelling_question_rules.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class Modelling_Question_RulesDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public modelling_question_id: string;

    @ApiModelPropertyOptional()
    public modelling_question_rule_name: string;

    constructor(modelling: Modelling_Question_RulesEntity) {
        super(modelling);
        this.modelling_question_id = modelling.modelling_question_id;
        this.modelling_question_rule_name = modelling.modelling_question_rule_name;
    }
}