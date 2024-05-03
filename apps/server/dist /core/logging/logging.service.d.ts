import { Request } from 'express';
import { LoggerService } from '@server/libraries/logger';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
export declare class LoggingService {
    private authenticationDomainFacade;
    private loggerService;
    private logger;
    constructor(authenticationDomainFacade: AuthenticationDomainFacade, loggerService: LoggerService);
    logOnStart(request: Request): void;
    logOnStop(request: Request): void;
}
