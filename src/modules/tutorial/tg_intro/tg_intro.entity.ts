import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { type } from "os";
import { ApiModelProperty } from "@nestjs/swagger";
import { Multiplechoice_QuestionEntity } from "../multiplechoice_question/multiplechoice_question.entity";
import { UserEntity } from "modules/user/user.entity";
import { IntroEntity } from "./../intro/intro.entity";
import { Tg_IntroDto } from "./dto/tg_introDto";
@Entity({name:'tg_intro'})
export class Tg_IntroEntity extends AbstractEntity<Tg_IntroDto>{

    @ApiModelProperty()
    @PrimaryGeneratedColumn('uuid')
    public tg_intro_id: string;
   
    @ApiModelProperty()
    @OneToMany(type => IntroEntity, intro => intro.id)
    public tg_intro_intro_id: IntroEntity;

    @ApiModelProperty()
    public tg_intro_last_clicked_id: string;

    dtoClass = Tg_IntroDto;
}