import { LoggerService } from '@server/libraries/logger';
import { AuthorizationCodeType, AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { UserDomainFacade } from '@server/modules/user/domain';
import { UserOrchestrator } from '@server/modules/user/orchestrators';
import { AuthorizationApplicationException } from './authorization.application.exception';
import { AuthorizationCreateCodeDto, AuthorizationVerifyCodeDto } from './authorization.dto';
export declare class AuthorizationController {
    private userDomainFacade;
    private exception;
    private loggerService;
    private authorizationDomainFacade;
    private userAuthorizationOrchestrator;
    private logger;
    constructor(userDomainFacade: UserDomainFacade, exception: AuthorizationApplicationException, loggerService: LoggerService, authorizationDomainFacade: AuthorizationDomainFacade, userAuthorizationOrchestrator: UserOrchestrator);
    createCode(type: AuthorizationCodeType, body: AuthorizationCreateCodeDto): Promise<import("@server/modules/authorization/domain").AuthorizationCode>;
    verifyCode(body: AuthorizationVerifyCodeDto, type: AuthorizationCodeType): Promise<{}>;
    private getCodeValues;
    private onSuccess;
    private deprecatePreviousCodes;
}
