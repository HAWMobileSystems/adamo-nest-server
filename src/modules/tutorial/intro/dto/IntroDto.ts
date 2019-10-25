import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IntroEntity } from '../intro.entity';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class IntroDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public id: string;

    // @ApiModelPropertyOptional()
    // timestampLastChange: number;

    @ApiModelPropertyOptional()
    public intro_text: string;

    @ApiModelPropertyOptional()
    public categories: CategoryEntity;

    @ApiModelPropertyOptional()
    public next_id: string;

    constructor(intro: IntroEntity) {
        super(intro);
        this.id = intro.id;
        this.intro_text = intro.intro_text;
        this.categories = intro.categories;
        this.next_id = intro.next_id;
    }
}