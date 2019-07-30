import { MigrationInterface, QueryRunner } from 'typeorm';

export class name1563182532956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE "partmodel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "model_name" character varying NOT NULL, "model_xml" character varying NOT NULL, "model_version" integer NOT NULL, CONSTRAINT "PK_e9fb229b5a0126657d9bf614c6e" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "model_name" character varying NOT NULL, "model_xml" character varying NOT NULL, "model_version" integer NOT NULL, CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "permission_name" character varying NOT NULL, "permission_xml" character varying NOT NULL, "permission_version" integer NOT NULL, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "can_read" boolean NOT NULL, "can_write" boolean NOT NULL, "is_admin" boolean NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "thumbnail"`);
        await queryRunner.query(
            `ALTER TABLE "users" DROP COLUMN "company_email"`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" DROP COLUMN "company_name"`,
        );
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "industry"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "zip_code"`);
        await queryRunner.query(
            `ALTER TYPE "public"."users_role_enum" RENAME TO "users_role_enum_old"`,
        );
        await queryRunner.query(
            `CREATE TYPE "users_role_enum" AS ENUM('USER', 'ADMIN')`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" TYPE "users_role_enum" USING "role"::"text"::"users_role_enum"`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER'`,
        );
        await queryRunner.query(`DROP TYPE "users_role_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TYPE "users_role_enum_old" AS ENUM('USER')`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" TYPE "users_role_enum_old" USING "role"::"text"::"users_role_enum_old"`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER'`,
        );
        await queryRunner.query(`DROP TYPE "users_role_enum"`);
        await queryRunner.query(
            `ALTER TYPE "users_role_enum_old" RENAME TO  "users_role_enum"`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "zip_code" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "city" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "state" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "country" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "address" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "industry" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "phone" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "company_name" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "company_email" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "thumbnail" character varying`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD "avatar" character varying`,
        );
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TABLE "partmodel"`);
    }
}
