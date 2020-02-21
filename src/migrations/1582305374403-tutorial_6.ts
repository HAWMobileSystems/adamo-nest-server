import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial61582305374403 implements MigrationInterface {
    name = 'tutorial61582305374403'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_text_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_question_text_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_question_description_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" ADD "multiplechoice_question_text_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" ADD "multiplechoice_question_description_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question_answer" ADD "multiplechoice_question_answer_text_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question_answer" DROP COLUMN "multiplechoice_question_answer_text_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" DROP COLUMN "multiplechoice_question_description_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" DROP COLUMN "multiplechoice_question_text_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_question_description_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_question_text_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_text_de"`, undefined);
    }

}
