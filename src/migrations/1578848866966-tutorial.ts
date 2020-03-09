import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial1578848866966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" RENAME COLUMN "modelName" TO "model_name"`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category_name" character varying NOT NULL, CONSTRAINT "PK_addfe3b3b96174012cd4710e975" PRIMARY KEY ("id", "category_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_intro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_intro_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_intro_intro_id" character varying NOT NULL, "tg_intro_last_clicked_id" character varying NOT NULL, CONSTRAINT "PK_5d147643b8429fe69e4f24186cf" PRIMARY KEY ("id", "tg_intro_id"))`);
       // await queryRunner.query(`CREATE TABLE "intro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "intro_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "intro_text" character varying NOT NULL, "intro_categories" character varying NOT NULL, "intro_identifier" character varying NOT NULL, "intro_id_id" character varying, "intro_id_tg_intro_id" character varying, CONSTRAINT "PK_3e7d0301e4ec445520fe00ad459" PRIMARY KEY ("id", "intro_id"))`);
        await queryRunner.query(`CREATE TABLE "modelling_rules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "modelling_rule_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelling_rule_text" character varying NOT NULL, CONSTRAINT "PK_5f432bd76f437c435008a31f36c" PRIMARY KEY ("id", "modelling_rule_id"))`);
        await queryRunner.query(`CREATE TABLE "modelling_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "mod_qs_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mod_qs_question_text" character varying NOT NULL, "mod_qs_categories" character varying NOT NULL, "mod_qs_custom_ruleset" character varying NOT NULL, CONSTRAINT "PK_c86c69d50d34709abfba0beeb5e" PRIMARY KEY ("id", "mod_qs_id"))`);
        await queryRunner.query(`CREATE TABLE "modelling_question_rules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "modelling_question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelling_rule_id" character varying NOT NULL, CONSTRAINT "PK_042a0e88e54af9e9faacae70f1c" PRIMARY KEY ("id", "modelling_question_id"))`);
        await queryRunner.query(`CREATE TABLE "multiplechoice_question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "multiplechoice_question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "multiplechoice_question_text" character varying NOT NULL, "multiplechoice_question_categories" character varying NOT NULL, CONSTRAINT "PK_7cc114a23137064ad233d2cf7ca" PRIMARY KEY ("id", "multiplechoice_question_id"))`);
        await queryRunner.query(`CREATE TABLE "multiplechoice_question_answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "multiplechoice_question_answer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "multiplechoice_question_answer_question_id" character varying NOT NULL, "multiplechoice_question_answer_text" character varying NOT NULL, "multiplechoice_question_answer_true" boolean NOT NULL, CONSTRAINT "PK_70593a7cecd84fc5221e2461f96" PRIMARY KEY ("id", "multiplechoice_question_answer_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_multiplechoice_answered" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_multiplechoice_answered_answer_id" character varying NOT NULL, "tg_multiplechoice_answered_answerd" boolean NOT NULL, CONSTRAINT "PK_3a8d2ff8ba692480e6e1fca1596" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tg_multiplechoice" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_multiplechoice_unique_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_multiplechoice_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_multiplechoice_multiplechoice_id" character varying NOT NULL, CONSTRAINT "PK_610d11dbdae1689923bdfd22fea" PRIMARY KEY ("id", "tg_multiplechoice_unique_id", "tg_multiplechoice_id"))`);
        await queryRunner.query(`CREATE TABLE "tg_modelling" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tg_modelling_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tg_modelling_question_id" character varying NOT NULL, "tg_modelling_xml_providet" character varying NOT NULL, "tg_modelling_validation_score" character varying NOT NULL, "tg_modelling_editing_begin" integer NOT NULL, CONSTRAINT "PK_c38d193bec59fbc2d41dc2cee86" PRIMARY KEY ("id", "tg_modelling_id"))`);
        await queryRunner.query(`CREATE TABLE "test" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "test_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test_solved_test_id" character varying NOT NULL, "test_user_id" character varying NOT NULL, "test_categorie" character varying NOT NULL, "test_tg_identifier" integer NOT NULL, "test_user_id_id" uuid, CONSTRAINT "PK_94272108dacdd24e4a5724f0206" PRIMARY KEY ("id", "test_id"))`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        //await queryRunner.query(`ALTER TABLE "intro" ADD CONSTRAINT "FK_7a07bd1a9c1a734742529c7643b" FOREIGN KEY ("intro_id_id", "intro_id_tg_intro_id") REFERENCES "tg_intro"("id","tg_intro_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "FK_930bcc88be2e8b612ff7b34fd79" FOREIGN KEY ("test_user_id_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "FK_930bcc88be2e8b612ff7b34fd79"`);
       // await queryRunner.query(`ALTER TABLE "intro" DROP CONSTRAINT "FK_7a07bd1a9c1a734742529c7643b"`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TABLE "tg_modelling"`);
        await queryRunner.query(`DROP TABLE "tg_multiplechoice"`);
        await queryRunner.query(`DROP TABLE "tg_multiplechoice_answered"`);
        await queryRunner.query(`DROP TABLE "multiplechoice_question_answer"`);
        await queryRunner.query(`DROP TABLE "multiplechoice_question"`);
        await queryRunner.query(`DROP TABLE "modelling_question_rules"`);
        await queryRunner.query(`DROP TABLE "modelling_question"`);
        await queryRunner.query(`DROP TABLE "modelling_rules"`);
       // await queryRunner.query(`DROP TABLE "intro"`);
        await queryRunner.query(`DROP TABLE "tg_intro"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`ALTER TABLE "models" RENAME COLUMN "model_name" TO "modelName"`);
    }

}
