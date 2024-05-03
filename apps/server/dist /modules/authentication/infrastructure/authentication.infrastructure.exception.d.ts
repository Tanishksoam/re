import { ExceptionService } from '@server/core/exception';
import { User } from '@server/modules/user/domain';
export declare class AuthenticationInfrastructureException {
    private service;
    constructor(service: ExceptionService);
    invalidAccessToken(): never;
    userNotVerified(user: User): never;
}
