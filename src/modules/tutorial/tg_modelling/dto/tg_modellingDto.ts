import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Tg_ModellingEntity } from '../tg_modelling.entity';
import { Modelling_QuestionEntity } from './../../modelling_question/modelling_question.entity';
import { DateTime } from 'aws-sdk/clients/devicefarm';

export class Tg_ModellingDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public tg_modelling_id: string;

    @ApiModelPropertyOptional()
    public tg_modelling_question_id: string;

    @ApiModelPropertyOptional()
    public tg_modelling_xml_providet: string;

    @ApiModelPropertyOptional()
    public tg_modelling_validation_score: number;

    @ApiModelPropertyOptional()
    public tg_modelling_editing_begin: number;
    

    constructor(test: Tg_ModellingEntity) {
        super(test);
        this.tg_modelling_id = test.tg_modelling_id;
        this.tg_modelling_question_id = test.tg_modelling_question_id;
        this.tg_modelling_xml_providet = test.tg_modelling_xml_providet;
        this.tg_modelling_validation_score = test.tg_modelling_validation_score;
        this.tg_modelling_editing_begin = test.tg_modelling_editing_begin;
    }
}

