import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Modelling_QuestionEntity } from '../modelling_question.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { VirtualTimeScheduler } from 'rxjs';

export class Modelling_QuestionDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public mod_qs_id: string;

    @ApiModelPropertyOptional()
    public mod_qs_identifier: number;

    @ApiModelPropertyOptional()
    public mod_qs_question_text: string;

    @ApiModelPropertyOptional()
    public mod_qs_question_text_de: string;

    @ApiModelPropertyOptional()
    public mod_qs_question_description: string;

    @ApiModelPropertyOptional()
    public mod_qs_question_description_de: string;

    @ApiModelPropertyOptional()
    public mod_qs_categories: string;

    @ApiModelPropertyOptional()
    public mod_qs_custom_ruleset: string;

    constructor(modelling: Modelling_QuestionEntity) {
        super(modelling);
        this.mod_qs_id = modelling.mod_qs_id;
        this.mod_qs_question_text = modelling.mod_qs_question_text;
        this.mod_qs_identifier = modelling.mod_qs_identifier;
        this.mod_qs_question_text_de = modelling.mod_qs_question_text_de;
        this.mod_qs_question_description = modelling.mod_qs_question_description;
        this.mod_qs_question_description_de = modelling.mod_qs_question_description_de;
        this.mod_qs_categories = modelling.mod_qs_categories;
        this.mod_qs_custom_ruleset = modelling.mod_qs_custom_ruleset;
    }
}