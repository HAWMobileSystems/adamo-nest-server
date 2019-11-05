import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial31572948481717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "multiplechoice_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "multiplechoice_question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "multiplechoice_question_text" character varying NOT NULL, CONSTRAINT "PK_7cc114a23137064ad233d2cf7ca" PRIMARY KEY ("id", "multiplechoice_question_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_multiplechoice" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_multiplechoice_answered_answer_id_id" uuid, "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid, CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id"))`);
        await queryRunner.query(`CREATE TABLE "multiplechoice_question_answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "multiplechoice_question_answer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "multiplechoice_question_answer_text" character varying NOT NULL, "multiplechoice_question_answer_true" boolean NOT NULL, CONSTRAINT "PK_70593a7cecd84fc5221e2461f96" PRIMARY KEY ("id", "multiplechoice_question_answer_id"))`);
        await queryRunner.query(`CREATE TABLE "test" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "test_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test_tg_identifier" integer NOT NULL, "test_user_id_id" uuid, CONSTRAINT "PK_94272108dacdd24e4a5724f0206" PRIMARY KEY ("id", "test_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_intro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_intro_id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_5d147643b8429fe69e4f24186cf" PRIMARY KEY ("id", "tg_intro_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_modelling" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_modelling_id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_c38d193bec59fbc2d41dc2cee86" PRIMARY KEY ("id", "tg_modelling_id"))`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id" uuid`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_e8afa09aeed482faa0fe635f504" FOREIGN KEY ("tg_multiplechoice_answered_answer_id_id", "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id") REFERENCES "multiplechoice_question_answer"("id","multiplechoice_question_answer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "FK_930bcc88be2e8b612ff7b34fd79" FOREIGN KEY ("test_user_id_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2" FOREIGN KEY ("tg_multiplechoice_multiplechoice_id_id", "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id") REFERENCES "multiplechoice_question"("id","multiplechoice_question_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_07acfe3c4e6471c589be580c3e2"`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "FK_930bcc88be2e8b612ff7b34fd79"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "FK_e8afa09aeed482faa0fe635f504"`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_multiplechoice_question_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_multiplechoice_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_answer_id_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_f41b4a4a7adea553072959b17fc"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP COLUMN "tg_multiplechoice_answered_id"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_multiplechoice_question_answer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_answer_id_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" DROP CONSTRAINT "PK_10a5f08db9e37f8824e9b7e9406"`);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice" ADD CONSTRAINT "PK_f41b4a4a7adea553072959b17fc" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`);
        await queryRunner.query(`DROP TABLE "tg_modelling"`);
        await queryRunner.query(`DROP TABLE "tg_intro"`);
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TABLE "multiplechoice_question_answer"`);
        await queryRunner.query(`DROP TABLE "tg_multiplechoice"`);
        await queryRunner.query(`DROP TABLE "multiplechoice_question"`);
    }

}
