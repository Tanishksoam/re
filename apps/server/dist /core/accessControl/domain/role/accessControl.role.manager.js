"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlRoleManager = void 0;
var AccessControlRoleManager;
(function (AccessControlRoleManager) {
    function isStatusFound(status) {
        return status === 'found';
    }
    AccessControlRoleManager.isStatusFound = isStatusFound;
    function isStatusNotFound(status) {
        return status === 'not-found';
    }
    AccessControlRoleManager.isStatusNotFound = isStatusNotFound;
    function isStatusUnknown(status) {
        return status === 'unknown';
    }
    AccessControlRoleManager.isStatusUnknown = isStatusUnknown;
})(AccessControlRoleManager || (exports.AccessControlRoleManager = AccessControlRoleManager = {}));
//# sourceMappingURL=accessControl.role.manager.js.map