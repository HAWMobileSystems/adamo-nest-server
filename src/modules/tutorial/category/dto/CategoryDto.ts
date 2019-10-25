import { CategoryEntity } from "modules/tutorial/category/category.entity";
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';

export class CategoryDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public id: string

    @ApiModelPropertyOptional()
    public name: string

    constructor(category: CategoryEntity) {
        super(category);
        this.id = category.id;
        this.name = category.name;
    }
}