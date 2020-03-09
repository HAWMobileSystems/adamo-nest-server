import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial121582982605002 implements MigrationInterface {
    name = 'tutorial121582982605002'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP COLUMN "modelling_rule_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP COLUMN "modelling_question_used"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD "modelling_question_rule_name" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP CONSTRAINT "PK_5f432bd76f437c435008a31f36c"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD CONSTRAINT "PK_abbd94c3b5e9d55049cf604134f" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP COLUMN "modelling_rule_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD "modelling_rule_id" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP COLUMN "modelling_rule_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD "modelling_rule_id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP CONSTRAINT "PK_abbd94c3b5e9d55049cf604134f"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD CONSTRAINT "PK_5f432bd76f437c435008a31f36c" PRIMARY KEY ("id", "modelling_rule_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP COLUMN "modelling_question_rule_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD "modelling_question_used" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD "modelling_rule_id" character varying NOT NULL`, undefined);
    }

}
