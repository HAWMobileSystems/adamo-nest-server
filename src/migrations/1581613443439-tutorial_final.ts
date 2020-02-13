import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorialFinal1581613443439 implements MigrationInterface {
    name = 'tutorialFinal1581613443439'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_question_description" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_modelling" DROP COLUMN "tg_modelling_validation_score"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_modelling" ADD "tg_modelling_validation_score" integer NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_modelling" DROP COLUMN "tg_modelling_validation_score"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_modelling" ADD "tg_modelling_validation_score" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_question_description"`, undefined);
    }

}
