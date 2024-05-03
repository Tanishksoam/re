import { OAuth2Client } from 'google-auth-library';
import { ConfigurationService } from '../../core/configuration';
import { LoggerService } from '../logger';
export declare class GoogleService {
    private configurationService;
    private loggerService;
    private logger;
    client: OAuth2Client;
    private clientId;
    constructor(configurationService: ConfigurationService, loggerService: LoggerService);
    verifyToken(token: string): Promise<any>;
}
