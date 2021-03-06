import {MigrationInterface, QueryRunner} from "typeorm";

export class tutorial141583008973268 implements MigrationInterface {
    name = 'tutorial141583008973268'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD "modelling_rule_svg" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" ADD "modelling_rule_svg_de" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b" UNIQUE ("model_version")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "UQ_28d23f5ebf773368621b7cfa91d" UNIQUE ("model_name")`, undefined);
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "UQ_a6a29626d324b33c46efbb9c50b"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP COLUMN "modelling_rule_svg_de"`, undefined);
        await queryRunner.query(`ALTER TABLE "modelling_rules" DROP COLUMN "modelling_rule_svg"`, undefined);
    }

}
