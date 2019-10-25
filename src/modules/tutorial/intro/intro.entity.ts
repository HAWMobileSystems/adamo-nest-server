import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { IntroDto } from "../intro/dto/IntroDto"
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";

@Entity({name:'intro'})
export class IntroEntity extends AbstractEntity<IntroDto>{

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @ApiModelProperty()
    @Column()
    public intro_text: string;

    @ApiModelProperty()
    @OneToMany(type => CategoryEntity, category => category.id)
    public categories: CategoryEntity;

    @ApiModelProperty()
    @Column()
    public next_id: string;

    dtoClass = IntroDto;
}