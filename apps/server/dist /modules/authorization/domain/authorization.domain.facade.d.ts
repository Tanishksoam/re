import { AuthorizationCodeFacade } from './code/authorization.code.facade';
import { AuthorizationRoleFacade } from './role/authorization.role.facade';
export declare class AuthorizationDomainFacade {
    code: AuthorizationCodeFacade;
    role: AuthorizationRoleFacade;
    constructor(code: AuthorizationCodeFacade, role: AuthorizationRoleFacade);
}
