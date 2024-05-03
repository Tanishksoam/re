import { Request } from 'express';
import { LoggerService } from '@server/libraries/logger';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { UserDomainFacade } from '@server/modules/user/domain';
import { AuthorizationDomainFacade } from '../domain';
export declare class AuthorizationByUserController {
    private userDomainFacade;
    private loggerService;
    private authorizationDomainFacade;
    private authenticationDomainFacade;
    private logger;
    constructor(userDomainFacade: UserDomainFacade, loggerService: LoggerService, authorizationDomainFacade: AuthorizationDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    getPermissions(request: Request): Promise<{
        roles: import("../domain").AuthorizationRole[];
    }>;
}
