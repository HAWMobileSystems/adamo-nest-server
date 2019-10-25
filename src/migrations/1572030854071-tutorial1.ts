import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial11572030854071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "intro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "intro_text" character varying NOT NULL, "next_id" character varying NOT NULL, CONSTRAINT "PK_79b99362c5133645f8ed2001658" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`DROP TABLE "intro"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
