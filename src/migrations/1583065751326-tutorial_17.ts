import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial171583065751326 implements MigrationInterface {
    name = 'tutorial171583065751326'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "category" ADD "category_identifier" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "category_identifier"`, undefined);
    }

}
