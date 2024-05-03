import { ExceptionService } from '@server/core/exception';
import { User } from '@server/modules/user/domain';
export declare class AuthorizationDomainException {
    private service;
    constructor(service: ExceptionService);
    codeNotFoundById(id: string): never;
    codeNotFoundByKeys(user: User, keyPrivate: string, keyPublic: string): never;
}
