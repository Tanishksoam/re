"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControl = void 0;
require("reflect-metadata");
const accessControl_role_decorator_1 = require("./decorators/accessControl.role.decorator");
var AccessControl;
(function (AccessControl) {
    AccessControl.Roles = accessControl_role_decorator_1.AccessControlRoleDecorator.set;
    AccessControl.getRoles = accessControl_role_decorator_1.AccessControlRoleDecorator.get;
})(AccessControl || (exports.AccessControl = AccessControl = {}));
//# sourceMappingURL=accessControl.js.map