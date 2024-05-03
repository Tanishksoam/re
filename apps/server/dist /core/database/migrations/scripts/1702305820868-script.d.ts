import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Script1702305820868 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
