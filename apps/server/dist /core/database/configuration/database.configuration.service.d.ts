import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { ConfigurationService } from '../../configuration';
export declare class DatabaseConfigurationService {
    private configurationService;
    constructor(configurationService: ConfigurationService);
    getOptions(): TypeOrmModuleOptions;
    getOptionsMigration(): DataSourceOptions;
    private getOptionsBase;
    private isMigrationActive;
    private getOptionsCommon;
    private getOptionsDevelopment;
    private getOptionsProduction;
}
