import { EventService } from '@server/libraries/event';
import { LoggerService } from '@server/libraries/logger';
import { UserDomainFacade } from '@server/modules/user/domain';
import { Request, Response } from 'express';
import { CookieService } from '../../../core/cookie';
import { AuthenticationDomainFacade } from '../domain';
import { AuthenticationApplicationException } from './authentication.application.exception';
import { AuthenticationLoginDto, AuthenticationRegisterDto, AuthenticationResetPasswordDto, AuthenticationSendEmailResetPasswordDto } from './authentication.dto';
export declare class AuthenticationController {
    private authenticationDomainFacade;
    private exception;
    private userDomainFacade;
    private loggerService;
    private event;
    private cookieService;
    private logger;
    constructor(authenticationDomainFacade: AuthenticationDomainFacade, exception: AuthenticationApplicationException, userDomainFacade: UserDomainFacade, loggerService: LoggerService, event: EventService, cookieService: CookieService);
    login(body: AuthenticationLoginDto, response: Response): Promise<{
        token?: string;
    }>;
    register(body: AuthenticationRegisterDto, response: Response): Promise<{
        token?: string;
    }>;
    refresh(request: Request, response: Response): Promise<{
        token?: string;
    }>;
    sendEmailResetPassword(body: AuthenticationSendEmailResetPasswordDto): Promise<{}>;
    resetPassword(body: AuthenticationResetPasswordDto): Promise<{}>;
    logout(response: Response): Promise<{}>;
}
