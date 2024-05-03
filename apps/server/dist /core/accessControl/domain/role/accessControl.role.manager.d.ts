import { AccessControlRoleStatus } from './accessControl.role';
export declare namespace AccessControlRoleManager {
    function isStatusFound(status: AccessControlRoleStatus): boolean;
    function isStatusNotFound(status: AccessControlRoleStatus): boolean;
    function isStatusUnknown(status: AccessControlRoleStatus): boolean;
}
