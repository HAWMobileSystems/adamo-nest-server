import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice.entity';

export class Tg_MultiplechoiceDto extends AbstractDto {
    
    @ApiModelPropertyOptional()
    public tg_multiplechoice_unique_id: string;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_id: string;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_multiplechoice_id: string;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_solved_correct: boolean;

    constructor(test: Tg_MultiplechoiceEntity) {
        super(test);
        this.tg_multiplechoice_unique_id = test.tg_multiplechoice_unique_id;
        // this.tg_multiplechoice_id = test.tg_multiplechoice_id;
        this.tg_multiplechoice_multiplechoice_id = test.tg_multiplechoice_multiplechoice_id;
        this.tg_multiplechoice_solved_correct = test.tg_multiplechoice_solved_correct;
    }
}
