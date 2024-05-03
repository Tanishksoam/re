import { User } from '@server/modules/user/domain';
import { AuthorizationRole } from './authorization.role.model';
export declare class AuthorizationRoleUser {
    userId: string;
    user?: User;
    roleId: string;
    role?: AuthorizationRole;
}
