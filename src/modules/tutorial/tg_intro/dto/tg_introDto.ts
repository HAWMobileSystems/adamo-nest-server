import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { IntroEntity } from "../../intro/intro.entity";
import { Tg_IntroEntity } from "../tg_intro.entity";

export class Tg_IntroDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public tg_intro_id: string;

    @ApiModelPropertyOptional()
    public tg_intro_intro_id: IntroEntity;

    @ApiModelPropertyOptional()
    public tg_intro_last_clicked_id: string;

    constructor(test: Tg_IntroEntity) {
        super(test);
        this.tg_intro_id = test.tg_intro_id;
        this.tg_intro_intro_id = test.tg_intro_intro_id;
        this.tg_intro_last_clicked_id = test.tg_intro_last_clicked_id;
    }
}
