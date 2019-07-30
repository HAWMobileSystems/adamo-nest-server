import {MigrationInterface, QueryRunner} from "typeorm";

export class update1563197498534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "name" TO "role_name"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "permission_name"`);
        // await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "timestamp_last_change"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "permission_xml"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "permission_version"`);
        // await queryRunner.query(`ALTER TABLE "models" ADD "timestamp_last_change" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "permission_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "PK_920331560282b8bd21bb02290df"`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "PK_5782485e6ad1e46edc8b1413787" PRIMARY KEY ("id", "permission_id")`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "model_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "user_id" character varying  NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "role_id" character varying  NOT NULL`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "model_id"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "role_id"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "PK_5782485e6ad1e46edc8b1413787"`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "permission_version" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "permission_xml" character varying NOT NULL`);
        // await queryRunner.query(`ALTER TABLE "permissions" ADD "timestamp_last_change" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD "permission_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "role_name" TO "name"`);
    }

}
