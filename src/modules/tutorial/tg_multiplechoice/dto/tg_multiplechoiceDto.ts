import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { Tg_MultiplechoiceEntity } from '../tg_multiplechoice.entity';
import { Tg_Multiplechoice_AnsweredEntity } from './../../tg_multiplechoice_answered/tg_multiplechoice_answered.entity';
import { TestEntity } from './../../test/test.entity';
export class Tg_MultiplechoiceDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public tg_multiplechoice_unique_id: Tg_Multiplechoice_AnsweredEntity;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_id: TestEntity;

    @ApiModelPropertyOptional()
    public tg_multiplechoice_multiplechoice_id: string;

    constructor(test: Tg_MultiplechoiceEntity) {
        super(test);
        this.tg_multiplechoice_unique_id = test.tg_multiplechoice_unique_id;
        this.tg_multiplechoice_id = test.tg_multiplechoice_id;
        this.tg_multiplechoice_multiplechoice_id = test.tg_multiplechoice_multiplechoice_id;
    }
}
