import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CookieService } from '../../../../core/cookie';
import { User, UserDomainFacade } from '../../../user/domain';
import { AuthenticationDomainFacade } from '../../domain';
import { AuthenticationInfrastructureException } from '../authentication.infrastructure.exception';
export declare class AuthenticationGuardService {
    private cookieService;
    private authenticationDomainFacade;
    private userDomainFacade;
    private exception;
    constructor(cookieService: CookieService, authenticationDomainFacade: AuthenticationDomainFacade, userDomainFacade: UserDomainFacade, exception: AuthenticationInfrastructureException);
    validateRequest(reflector: Reflector, context: ExecutionContext): Promise<boolean>;
    checkUserNotVerified(reflector: Reflector, context: ExecutionContext, user: User): Promise<void>;
}
