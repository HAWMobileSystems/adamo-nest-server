import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial101582579745766 implements MigrationInterface {
    name = 'tutorial101582579745766'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" DROP COLUMN "multiplechoice_question_description"`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" DROP COLUMN "multiplechoice_question_description_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" ADD "multiplechoice_question_description_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" ADD "multiplechoice_question_description" character varying NOT NULL`, undefined);
    }

}
