import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial81582391109739 implements MigrationInterface {
    name = 'tutorial81582391109739'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" ADD "tg_multiplechoice_answered_id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" DROP CONSTRAINT "PK_3a8d2ff8ba692480e6e1fca1596"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" ADD CONSTRAINT "PK_9190e8f4fe09b3a1cbdc8fdc3df" PRIMARY KEY ("id", "tg_multiplechoice_answered_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" ADD "tg_multiplechoice_answered_from_qs_id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" DROP COLUMN "tg_multiplechoice_answered_from_qs_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" DROP CONSTRAINT "PK_9190e8f4fe09b3a1cbdc8fdc3df"`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" ADD CONSTRAINT "PK_3a8d2ff8ba692480e6e1fca1596" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "tg_multiplechoice_answered" DROP COLUMN "tg_multiplechoice_answered_id"`, undefined);
    }

}
