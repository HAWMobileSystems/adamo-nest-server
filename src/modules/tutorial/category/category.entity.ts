import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { CategoryDto } from './dto/CategoryDto'
import { ApiModelProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

@Entity({name:'category'})
export class CategoryEntity extends AbstractEntity<CategoryDto>{

    @PrimaryGeneratedColumn('uuid')
    public category_id: string

    @ApiModelProperty()
    @Column()
    public category_name: string  
    
    @ApiModelProperty()
    @Column()
    public category_identifier: number
    
    @Exclude()
    dtoClass = CategoryDto;  
}