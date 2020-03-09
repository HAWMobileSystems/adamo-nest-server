'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IntroEntity } from '../intro.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class IntroDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public intro_id: string;

    @ApiModelPropertyOptional()
    public intro_text: string;

    @ApiModelPropertyOptional()
    public intro_text_de: string;

    @ApiModelPropertyOptional()
    public intro_categories: string;

    @ApiModelPropertyOptional()
    public intro_identifier: string;

    @ApiModelPropertyOptional()
    public intro_intro_svg_intro_page: string;

    constructor(intro: IntroEntity) {
        super(intro);
        this.intro_id = intro.intro_id;
        this.intro_text = intro.intro_text;
        this.intro_text_de = intro.intro_text_de;
        this.intro_categories = intro.intro_categories;
        this.intro_identifier = intro.intro_identifier;
    }
}