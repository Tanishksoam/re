import { Logger } from 'winston';
import { ConfigurationService } from '../../../core/configuration';
export type WinstonLogger = Logger;
export declare class WinstonService {
    private configurationService;
    constructor(configurationService: ConfigurationService);
    create(): WinstonLogger;
    private createForDevelopment;
    private createForProduction;
}
