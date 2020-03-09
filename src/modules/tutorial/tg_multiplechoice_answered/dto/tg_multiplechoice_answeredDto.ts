import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Tg_Multiplechoice_AnsweredEntity } from '../tg_multiplechoice_answered.entity';

export class Tg_Multiplechoice_AnsweredDto extends AbstractDto {

    @ApiModelPropertyOptional()
    public tg_multiplechoice_answered_id: string;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_answered_answer_id: string;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_answered_answerd: boolean;

    constructor(test: Tg_Multiplechoice_AnsweredEntity) {
        super(test);
        this.tg_multiplechoice_answered_id = test.tg_multiplechoice_answered_id;
        this.tg_multiplechoice_answered_answer_id = test.tg_multiplechoice_answered_answer_id;
        this.tg_multiplechoice_answered_answerd = test.tg_multiplechoice_answered_answerd;
    }
}
