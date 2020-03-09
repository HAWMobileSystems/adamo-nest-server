import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorialFinal21581878198987 implements MigrationInterface {
    name = 'tutorialFinal21581878198987'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_intro" RENAME COLUMN "tg_intro_last_clicked_id" TO "tg_intro_is_finished"`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_intro" DROP COLUMN "tg_intro_is_finished"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_intro" ADD "tg_intro_is_finished" boolean NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_intro" DROP COLUMN "tg_intro_is_finished"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_intro" ADD "tg_intro_is_finished" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_intro" RENAME COLUMN "tg_intro_is_finished" TO "tg_intro_last_clicked_id"`, undefined);
    }

}
