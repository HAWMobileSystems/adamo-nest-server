import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial41573643720775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_e8afa09aeed482faa0fe635f504"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_an"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "categories" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "custom_ruleset" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id" uuid`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_e8afa09aeed482faa0fe635f504" FOREIGN KEY ("tg_multiplechoice_answered_answer_id_id", "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id") REFERENCES "multiplechoice_question_answer"("id","multiplechoice_question_answer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2" FOREIGN KEY ("tg_multiplechoice_multiplechoice_id_id", "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id") REFERENCES "multiplechoice_question"("id","multiplechoice_question_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_e8afa09aeed482faa0fe635f504"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "custom_ruleset"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "categories"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_an" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_e8afa09aeed482faa0fe635f504" FOREIGN KEY ("tg_multiplechoice_answered_answer_id_id", "tg_multiplechoice_answered_answer_id_multiplechoice_question_an") REFERENCES "multiplechoice_question_answer"("id","multiplechoice_question_answer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2" FOREIGN KEY ("tg_multiplechoice_multiplechoice_id_id", "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id") REFERENCES "multiplechoice_question"("id","multiplechoice_question_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
