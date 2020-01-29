import { CategoryEntity } from "../../category/category.entity"
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { TestEntity } from "../test.entity";
enum tg{
    beginner,
    advanced,
    professional
}
export class TestDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public test_id: string;

    @ApiModelPropertyOptional()
    public test_solved_test_id: string;

    @ApiModelPropertyOptional()
    public test_categorie: string;

    @ApiModelPropertyOptional()
    public test_tg_identifier: tg;

    constructor(test: TestEntity) {
        console.log("IIIIIIIIITESTIIIIIIII");
        console.log(test);
        super(test);
        this.test_id = test.test_id;
        this.test_solved_test_id = test.test_solved_test_id;
        this.test_categorie = test.test_categorie;
        this.test_tg_identifier = test.test_tg_identifier;
    }
}
