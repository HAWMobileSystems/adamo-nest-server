import { Entity, Column,PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from '../../../common/abstract.entity';
import { CategoryDto } from './dto/CategoryDto'

@Entity({name:'category'})
export class CategoryEntity extends AbstractEntity<CategoryDto>{

    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public name: string    
    
    dtoClass = CategoryDto;  
}