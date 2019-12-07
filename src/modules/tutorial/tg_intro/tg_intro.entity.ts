import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { UserEntity } from "modules/user/user.entity";
import { IntroEntity } from "./../intro/intro.entity";
import { Tg_IntroDto } from "./dto/tg_introDto";
import { Exclude } from "class-transformer";
@Entity({name:'tg_intro'})
export class Tg_IntroEntity extends AbstractEntity<Tg_IntroDto>{

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_intro_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => IntroEntity, intro => intro.intro_id)
    public tg_intro_intro_id: string;

    @ApiModelProperty()
    @Column()
    public tg_intro_last_clicked_id: string;

    @Exclude()
    dtoClass = Tg_IntroDto;
}