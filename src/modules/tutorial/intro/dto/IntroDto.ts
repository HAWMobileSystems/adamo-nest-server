import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IntroEntity } from '../intro.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class IntroDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public intro_id: string;

    // @ApiModelPropertyOptional()
    // timestampLastChange: number;

    @ApiModelPropertyOptional()
    public intro_text: string;

    @ApiModelPropertyOptional()
    public intro_categories: string;

    @ApiModelPropertyOptional()
    public intro_next_id: string;

    constructor(intro: IntroEntity) {
        super(intro);
        this.id = intro.id;
        this.intro_text = intro.intro_text;
        this.intro_categories = intro.intro_categories;
        this.intro_next_id = intro.intro_next_id;
    }
}