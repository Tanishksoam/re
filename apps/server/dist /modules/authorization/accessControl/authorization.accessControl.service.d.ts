import { AccessControl, AccessControlProvider } from '@server/core/accessControl';
import { Request } from 'express';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { AuthorizationDomainFacade } from '../domain';
import { AuthorizationAccessControlException } from './authorization.accessControl.exception';
export declare class AuthorizationAccessControlService implements AccessControlProvider {
    private authenticationDomainFacade;
    private authorizationDomainFacade;
    private exception;
    constructor(authenticationDomainFacade: AuthenticationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, exception: AuthorizationAccessControlException);
    findUserData(request: Request): Promise<AccessControl.UserData>;
    onError(error: Error): never;
    private getUser;
    private findManyAuthorizationRoles;
}
