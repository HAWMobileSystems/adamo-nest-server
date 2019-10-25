import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial21572036303094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "modelling_rules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "modelling_rule_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelling_rule_text" character varying NOT NULL, CONSTRAINT "PK_5f432bd76f437c435008a31f36c" PRIMARY KEY ("id", "modelling_rule_id"))`);
        await queryRunner.query(`CREATE TABLE "modelling_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "question_text" character varying NOT NULL, CONSTRAINT "PK_21e6f895b18b7b03c090cfee63b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "modelling_question_rules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "modelling_question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelling_question_id_id" uuid, CONSTRAINT "PK_042a0e88e54af9e9faacae70f1c" PRIMARY KEY ("id", "modelling_question_id"))`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD CONSTRAINT "FK_16f4ad4315d9eded550740f8931" FOREIGN KEY ("modelling_question_id_id") REFERENCES "modelling_question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP CONSTRAINT "FK_16f4ad4315d9eded550740f8931"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`DROP TABLE "modelling_question_rules"`);
        await queryRunner.query(`DROP TABLE "modelling_question"`);
        await queryRunner.query(`DROP TABLE "modelling_rules"`);
    }

}
