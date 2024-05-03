import { ExceptionService } from '@server/core/exception';
export declare class AuthorizationAccessControlException {
    private service;
    constructor(service: ExceptionService);
    invalidPermission(error: Error): never;
}
