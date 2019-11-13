import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial61573648956451 implements MigrationInterface {

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
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" ADD "multiplechoice_question_categories" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question_answer" ADD "multiplechoice_question_answer_question_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "test_solved_test_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "test_categorie" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_intro" ADD "tg_intro_intro_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_intro" ADD "tg_intro_last_clicked_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" ADD "tg_modelling_question_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" ADD "tg_modelling_xml_providet" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" ADD "tg_modelling_validation_score" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_unique_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id" character varying NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_unique_id"`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" DROP COLUMN "tg_modelling_validation_score"`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" DROP COLUMN "tg_modelling_xml_providet"`);
        await queryRunner.query(`ALTER TABLE "tg_modelling" DROP COLUMN "tg_modelling_question_id"`);
        await queryRunner.query(`ALTER TABLE "tg_intro" DROP COLUMN "tg_intro_last_clicked_id"`);
        await queryRunner.query(`ALTER TABLE "tg_intro" DROP COLUMN "tg_intro_intro_id"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "test_categorie"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "test_solved_test_id"`);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question_answer" DROP COLUMN "multiplechoice_question_answer_question_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "multiplechoice_question" DROP COLUMN "multiplechoice_question_categories"`);
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
