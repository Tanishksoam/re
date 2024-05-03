"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const common_1 = require("@nestjs/common");
require("reflect-metadata");
var Authentication;
(function (Authentication) {
    const KEY_PUBLIC = 'authentication.public';
    const KEY_USER_NOT_VERIFIED = 'authentication.user-not-verified';
    Authentication.AllowUserNotVerified = () => (0, common_1.SetMetadata)(KEY_USER_NOT_VERIFIED, true);
    function isUserNotVerifiedAllowed(context, reflector) {
        return getValue(context, reflector, KEY_USER_NOT_VERIFIED);
    }
    Authentication.isUserNotVerifiedAllowed = isUserNotVerifiedAllowed;
    Authentication.Public = () => (0, common_1.SetMetadata)(KEY_PUBLIC, true);
    function isPublic(context, reflector) {
        return getValue(context, reflector, KEY_PUBLIC);
    }
    Authentication.isPublic = isPublic;
    function getValue(context, reflector, key) {
        return reflector.getAllAndOverride(key, [
            context.getHandler(),
            context.getClass(),
        ]);
    }
})(Authentication || (exports.Authentication = Authentication = {}));
//# sourceMappingURL=authentication.decorator.js.map