import 'reflect-metadata';
import { AccessControlRoleDecorator } from './decorators/accessControl.role.decorator';
import { UserData as UserDataType } from './internal/accessControl.type';
export declare namespace AccessControl {
    const Roles: (...names: string[]) => import("@nestjs/common").CustomDecorator<string>;
    const getRoles: typeof AccessControlRoleDecorator.get;
    type UserData = UserDataType;
}
