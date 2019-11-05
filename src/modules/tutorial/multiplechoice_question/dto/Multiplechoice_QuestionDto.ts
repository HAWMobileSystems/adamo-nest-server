import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question.entity";

export class Multiplechoice_QuestionDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public multiplechoice_question_id: string;

    @ApiModelPropertyOptional()
    public multiplechoice_question_text: string;

    @ApiModelPropertyOptional()
    public multiplechoice_question_categories: CategoryEntity;

    constructor(mc_question: Multiplechoice_QuestionEntity) {
        super(mc_question);
        this.multiplechoice_question_id = mc_question.multiplechoice_question_id;
        this.multiplechoice_question_text = mc_question.multiplechoice_question_text;
        this.multiplechoice_question_categories = mc_question.multiplechoice_question_categories;

    }
}