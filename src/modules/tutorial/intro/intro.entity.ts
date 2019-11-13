import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { IntroDto } from "../intro/dto/IntroDto"
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity({name:'intro'})
export class IntroEntity extends AbstractEntity<IntroDto>{

    @PrimaryGeneratedColumn('uuid')
    public intro_id: string;

    @ApiModelProperty()
    @Column()
    public intro_text: string;

    @ApiModelProperty()
    @Column()
    @ManyToOne(type => CategoryEntity, category => category.category_id)
    public intro_categories: string;

    @ApiModelProperty()
    @Column()
    public intro_next_id: string;

    dtoClass = IntroDto;
}