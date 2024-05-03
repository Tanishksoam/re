"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationAccessControlModule = void 0;
const common_1 = require("@nestjs/common");
const accessControl_1 = require("../../../core/accessControl");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const authorization_accessControl_exception_1 = require("./authorization.accessControl.exception");
const authorization_accessControl_service_1 = require("./authorization.accessControl.service");
let AuthorizationAccessControlModule = class AuthorizationAccessControlModule {
    static getGuards() {
        return [...accessControl_1.AccessControlModule.getGuards()];
    }
};
exports.AuthorizationAccessControlModule = AuthorizationAccessControlModule;
exports.AuthorizationAccessControlModule = AuthorizationAccessControlModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_1.AuthenticationDomainModule, domain_2.AuthorizationDomainModule],
        providers: [
            authorization_accessControl_service_1.AuthorizationAccessControlService,
            authorization_accessControl_exception_1.AuthorizationAccessControlException,
        ],
        exports: [authorization_accessControl_service_1.AuthorizationAccessControlService],
    })
], AuthorizationAccessControlModule);
//# sourceMappingURL=authorization.accessControl.module.js.map