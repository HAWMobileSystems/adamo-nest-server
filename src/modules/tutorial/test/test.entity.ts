import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from '../category/category.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { ApiModelProperty } from "@nestjs/swagger";
import { UserEntity } from './../../user/user.entity';
import { TestDto } from "./dto/testDto";
import { Tg_IntroEntity } from "../tg_intro/tg_intro.entity";
import { Tg_MultiplechoiceEntity } from "../tg_multiplechoice/tg_multiplechoice.entity";
import { Exclude } from "class-transformer";
import { Tg_ModellingEntity } from "../tg_modelling/tg_modelling.entity";

@Entity({name:'test'})
export class TestEntity extends AbstractEntity<TestDto>{

    @PrimaryGeneratedColumn('uuid')
    public test_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => Tg_IntroEntity, tg_i => tg_i.tg_intro_id)
    @OneToMany(type => Tg_MultiplechoiceEntity, tg_mc => tg_mc.tg_multiplechoice_unique_id)
    @OneToMany(type => Tg_ModellingEntity, tg_mod => tg_mod.tg_modelling_id)
    public test_solved_test_id: string;

    @ApiModelProperty()
    @Column()
    @ManyToOne(type => UserEntity, user => user.id)
    public test_user_id: string;
   
    @ApiModelProperty()
    @Column()
    @OneToMany(type => CategoryEntity, category => category.category_id)
    public test_categorie: string;

    @Exclude()
    dtoClass = TestDto;
}