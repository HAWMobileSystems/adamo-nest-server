import {MigrationInterface, QueryRunner} from "typeorm";

export class intro1581879311947 implements MigrationInterface {
    name = 'intro1581879311947'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "intro" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "intro_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "intro_text" character varying NOT NULL, "intro_categories" character varying NOT NULL, "intro_identifier" character varying NOT NULL, "intro_id_id" uuid, "intro_id_tg_intro_id" uuid, CONSTRAINT "PK_3e7d0301e4ec445520fe00ad459" PRIMARY KEY ("id", "intro_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
        await queryRunner.query(`ALTER TABLE "intro" ADD CONSTRAINT "FK_7a07bd1a9c1a734742529c7643b" FOREIGN KEY ("intro_id_id", "intro_id_tg_intro_id") REFERENCES "tg_intro"("id","tg_intro_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "intro" DROP CONSTRAINT "FK_7a07bd1a9c1a734742529c7643b"`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`DROP TABLE "intro"`, undefined);
    }

}
