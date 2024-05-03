import { ExceptionService } from '@server/core/exception';
export declare class AuthorizationApplicationException {
    private service;
    constructor(service: ExceptionService);
    typeNotFound(type: string): never;
    invalidCodeVerification(error: Error): never;
    expiredCodeVerification(error: Error): never;
}
