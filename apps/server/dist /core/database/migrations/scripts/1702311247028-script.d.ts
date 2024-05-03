import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Script1702311247028 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
