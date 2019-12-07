import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { IntroDto } from "./dto/IntroDto";
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Tg_IntroEntity } from "../tg_intro/tg_intro.entity";
import { Exclude } from "class-transformer";

@Entity({name:'intro'})
export class IntroEntity extends AbstractEntity<IntroDto>{

    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(type => Tg_IntroEntity, category => category.tg_intro_intro_id)
    public intro_id: string;

    @ApiModelProperty()
    @Column()
    public intro_text: string;

    @ApiModelProperty()
    @Column()
    @OneToMany(type => CategoryEntity, category => category.category_id)
    public intro_categories: string;

    @ApiModelProperty()
    @Column()
    public intro_next_id: string;

    @ApiModelProperty()
    @Column()
    public intro_is_first: boolean;

    @ApiModelProperty()
    @Column()
    public intro_currently_last_intropage: boolean;

    @Exclude()
    dtoClass = IntroDto;
}