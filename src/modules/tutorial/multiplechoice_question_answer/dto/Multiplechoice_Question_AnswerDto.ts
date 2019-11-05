import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Multiplechoice_QuestionEntity } from './../../multiplechoice_question/multiplechoice_question.entity';
import { Multiplechoice_Question_AnswerEntity } from "../multiplechoice_question_answer.entity";

export class MultipleChoice_Question_AnswerDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public multiplechoice_question_answer_id: string;

    @ApiModelPropertyOptional()
    public multiplechoice_question_answer_question_id: Multiplechoice_QuestionEntity;

    @ApiModelPropertyOptional()
    public multiplechoice_question_answer_text: string;

    @ApiModelPropertyOptional()
    public multiplechoice_question_answer_true: boolean;

    constructor(mc_question: Multiplechoice_Question_AnswerEntity) {
        super(mc_question);
        this.multiplechoice_question_answer_id = mc_question.multiplechoice_question_answer_id;
        this.multiplechoice_question_answer_question_id = mc_question.multiplechoice_question_answer_question_id;
        this.multiplechoice_question_answer_text = mc_question.multiplechoice_question_answer_text;
        this.multiplechoice_question_answer_true = mc_question.multiplechoice_question_answer_true;

    }
}
