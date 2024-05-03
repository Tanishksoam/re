"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlRoleDecorator = void 0;
const common_1 = require("@nestjs/common");
var AccessControlRoleDecorator;
(function (AccessControlRoleDecorator) {
    const KEY = 'access-control.roles';
    AccessControlRoleDecorator.set = (...names) => (0, common_1.SetMetadata)(KEY, names);
    function get(context, reflector) {
        var _a;
        return ((_a = reflector.getAllAndOverride(KEY, [
            context.getHandler(),
            context.getClass(),
        ])) !== null && _a !== void 0 ? _a : []);
    }
    AccessControlRoleDecorator.get = get;
})(AccessControlRoleDecorator || (exports.AccessControlRoleDecorator = AccessControlRoleDecorator = {}));
//# sourceMappingURL=accessControl.role.decorator.js.map