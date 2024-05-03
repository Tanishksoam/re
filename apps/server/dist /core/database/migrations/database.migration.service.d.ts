import { DataSource } from 'typeorm';
import { DatabaseConfigurationService } from '../configuration/database.configuration.service';
export declare class DatabaseMigrationService {
    private databaseConfiguration;
    constructor(databaseConfiguration: DatabaseConfigurationService);
    getDataSource(): DataSource;
}
