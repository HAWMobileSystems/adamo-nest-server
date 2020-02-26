import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { Tg_IntroDto } from "./dto/tg_introDto";
import { Exclude } from "class-transformer";

@Entity({name:'tg_intro'})
export class Tg_IntroEntity extends AbstractEntity<Tg_IntroDto>{

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_intro_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => CategoryEntity, intro => intro.category_id)
    public tg_intro_intro_category: string;

    @ApiModelProperty()
    @Column()
    public tg_intro_is_finished: boolean;
   
    @ApiModelProperty()
    @Column()
    public tg_intro_intro_id: string;

    @Exclude()
    dtoClass = Tg_IntroDto;
}