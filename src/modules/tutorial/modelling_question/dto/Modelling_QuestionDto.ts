import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Modelling_QuestionEntity } from '../modelling_question.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Modelling_RulesEntity } from "../../modelling_rules/modelling_rules.entity"

export class Modelling_QuestionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public id: string;

    // @ApiModelPropertyOptional()
    // timestampLastChange: number;

    @ApiModelPropertyOptional()
    public question_text: string;

    @ApiModelPropertyOptional()
    public categories: CategoryEntity;

    @ApiModelPropertyOptional()
    public custom_ruleset: Modelling_RulesEntity;

    constructor(modelling: Modelling_QuestionEntity) {
        super(modelling);
        this.id = modelling.id;
        this.question_text = modelling.question_text;
        this.categories = modelling.categories;
        this.custom_ruleset = modelling.custom_ruleset;
    }
}