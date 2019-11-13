import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial201573672706812 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP CONSTRAINT "FK_16f4ad4315d9eded550740f8931"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_e8afa09aeed482faa0fe635f504"`);
        await queryRunner.query(`CREATE TABLE "tg_multiplechoice_answered" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_multiplechoice_answered_answer_id" character varying NOT NULL, "tg_multiplechoice_answered_answerd" boolean NOT NULL, "tg_multiplechoice_answered_answer_id_id" uuid, "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid, CONSTRAINT "PK_9190e8f4fe09b3a1cbdc8fdc3df" PRIMARY KEY ("id", "tg_multiplechoice_answered_id"))`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "next_id"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "question_text"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "categories"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "custom_ruleset"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_an"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "category_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "PK_addfe3b3b96174012cd4710e975" PRIMARY KEY ("id", "category_id")`);
        await queryRunner.query(`ALTER TABLE "category" ADD "category_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "intro" DROP CONSTRAINT "PK_79b99362c5133645f8ed2001658"`);
        await queryRunner.query(`ALTER TABLE "intro" ADD CONSTRAINT "PK_3e7d0301e4ec445520fe00ad459" PRIMARY KEY ("id", "intro_id")`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_categories" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_next_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_categories_id" uuid`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "intro_categories_category_id" uuid`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP CONSTRAINT "PK_21e6f895b18b7b03c090cfee63b"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD CONSTRAINT "PK_c86c69d50d34709abfba0beeb5e" PRIMARY KEY ("id", "mod_qs_id")`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_question_text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_categories" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "mod_qs_custom_ruleset" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD "modelling_question_id_mod_qs_id" uuid`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "intro" ADD CONSTRAINT "FK_27b0d77c542b7598a214d732140" FOREIGN KEY ("intro_categories_id", "intro_categories_category_id") REFERENCES "category"("id","category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD CONSTRAINT "FK_70e80b3579e84f68d51f07f3410" FOREIGN KEY ("modelling_question_id_id", "modelling_question_id_mod_qs_id") REFERENCES "modelling_question"("id","mod_qs_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" ADD CONSTRAINT "FK_bfac929a868f6f86dd2e84b17d4" FOREIGN KEY ("tg_multiplechoice_answered_answer_id_id", "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id") REFERENCES "multiplechoice_question_answer"("id","multiplechoice_question_answer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" DROP CONSTRAINT "FK_bfac929a868f6f86dd2e84b17d4"`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP CONSTRAINT "FK_70e80b3579e84f68d51f07f3410"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP CONSTRAINT "FK_27b0d77c542b7598a214d732140"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" DROP COLUMN "modelling_question_id_mod_qs_id"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_custom_ruleset"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_categories"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_question_text"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP CONSTRAINT "PK_c86c69d50d34709abfba0beeb5e"`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD CONSTRAINT "PK_21e6f895b18b7b03c090cfee63b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "modelling_question" DROP COLUMN "mod_qs_id"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_categories_category_id"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_categories_id"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_next_id"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_categories"`);
        await queryRunner.query(`ALTER TABLE "intro" DROP CONSTRAINT "PK_3e7d0301e4ec445520fe00ad459"`);
        await queryRunner.query(`ALTER TABLE "intro" ADD CONSTRAINT "PK_79b99362c5133645f8ed2001658" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "intro" DROP COLUMN "intro_id"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "category_name"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "PK_addfe3b3b96174012cd4710e975"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_an" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "custom_ruleset" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "categories" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelling_question" ADD "question_text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "intro" ADD "next_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "tg_multiplechoice_answered"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_e8afa09aeed482faa0fe635f504" FOREIGN KEY ("tg_multiplechoice_answered_answer_id_id", "tg_multiplechoice_answered_answer_id_multiplechoice_question_an") REFERENCES "multiplechoice_question_answer"("id","multiplechoice_question_answer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "modelling_question_rules" ADD CONSTRAINT "FK_16f4ad4315d9eded550740f8931" FOREIGN KEY ("modelling_question_id_id") REFERENCES "modelling_question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
