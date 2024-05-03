import { ConfigurationService } from '@server/core/configuration';
import { CookieService } from '@server/core/cookie';
import { User } from '@server/modules/user/domain';
import { Request, Response } from 'express';
export declare class AuthenticationDomainFacade {
    private configurationService;
    private cookieService;
    constructor(configurationService: ConfigurationService, cookieService: CookieService);
    buildToken(userId: string): string;
    getAccessToken(request: Request): string;
    setAccessToken(response: Response, token: string): {
        token?: string;
    };
    buildTokenResetPassword(user: User): string;
    verifyTokenOrFail(token: string): {
        userId: string;
    };
    verifyTokenResetPasswordOrFail(token: string): Promise<{
        userId: string;
    }>;
    assignRequestPayload(request: Request, payload: {
        user: User;
    }): void;
    getRequestPayload(request: Request): {
        user: {
            id: string;
            name: string;
            email: string;
        };
    };
    private getSecret;
}
