import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../../common/dto/AbstractDto';
import { TestEntity } from "../test.entity";

export class TestDto extends AbstractDto {
    @ApiModelPropertyOptional()
    public test_id: string;

    @ApiModelPropertyOptional()
    public test_solved_test_id: string;

    @ApiModelPropertyOptional()
    public test_categorie: string;

    constructor(test: TestEntity) {
        super(test);
        this.test_id = test.test_id;
        this.test_solved_test_id = test.test_solved_test_id;
        this.test_categorie = test.test_categorie;
    }
}
