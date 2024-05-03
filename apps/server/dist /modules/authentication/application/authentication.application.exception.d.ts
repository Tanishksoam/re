import { ExceptionService } from '@server/core/exception';
export declare class AuthenticationApplicationException {
    private service;
    constructor(service: ExceptionService);
    invalidAccessToken(): never;
    userEmailNotFound(email: string): never;
    userPasswordNotFound(email: string): never;
    userEmailNotAvailable(email: string): never;
    invalidResetPasswordToken(): never;
    invalidGoogleToken(error?: Error): never;
}
