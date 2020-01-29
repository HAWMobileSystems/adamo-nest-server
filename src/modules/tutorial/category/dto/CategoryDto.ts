import { CategoryEntity } from "modules/tutorial/category/category.entity";
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class CategoryDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public category_id: string

    @ApiModelPropertyOptional()
    public category_name: string

    constructor(category: CategoryEntity) {
        super(category);
        this.category_id = category.category_id;
        this.category_name = category.category_name;
    }
}