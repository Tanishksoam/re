import { EventService } from '@server/libraries/event';
import { GoogleService } from '@server/libraries/google';
import { LoggerService } from '@server/libraries/logger';
import { UserDomainFacade } from '@server/modules/user/domain';
import { Response } from 'express';
import { CookieService } from '../../../core/cookie';
import { AuthenticationDomainFacade } from '../domain';
import { AuthenticationApplicationException } from './authentication.application.exception';
import { GoogleByAuthenticationCallbackDto } from './authentication.dto';
export declare class GoogleByAuthenticationController {
    private authenticationDomainFacade;
    private userDomainFacade;
    private googleService;
    private loggerService;
    private eventService;
    private exception;
    private cookieService;
    private logger;
    constructor(authenticationDomainFacade: AuthenticationDomainFacade, userDomainFacade: UserDomainFacade, googleService: GoogleService, loggerService: LoggerService, eventService: EventService, exception: AuthenticationApplicationException, cookieService: CookieService);
    callback(body: GoogleByAuthenticationCallbackDto, response: Response): Promise<{
        token?: string;
    }>;
    private register;
}
