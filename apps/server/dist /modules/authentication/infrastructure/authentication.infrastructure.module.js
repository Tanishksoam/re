"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationInfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const email_module_1 = require("../../../libraries/email/email.module");
const domain_1 = require("../../user/domain");
const domain_2 = require("../domain");
const authentication_infrastructure_exception_1 = require("./authentication.infrastructure.exception");
const authentication_guard_1 = require("./guards/authentication.guard");
const authentication_guard_service_1 = require("./guards/authentication.guard.service");
const authentication_communication_subscriber_1 = require("./subscribers/authentication.communication.subscriber");
let AuthenticationInfrastructureModule = class AuthenticationInfrastructureModule {
    static getGuards() {
        return [{ provide: core_1.APP_GUARD, useClass: authentication_guard_1.AuthenticationGuard }];
    }
};
exports.AuthenticationInfrastructureModule = AuthenticationInfrastructureModule;
exports.AuthenticationInfrastructureModule = AuthenticationInfrastructureModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [domain_1.UserDomainModule, domain_2.AuthenticationDomainModule, email_module_1.EmailModule],
        providers: [
            authentication_communication_subscriber_1.AuthenticationCommunicationSubscriber,
            authentication_guard_service_1.AuthenticationGuardService,
            authentication_infrastructure_exception_1.AuthenticationInfrastructureException,
        ],
        exports: [authentication_guard_service_1.AuthenticationGuardService],
    })
], AuthenticationInfrastructureModule);
//# sourceMappingURL=authentication.infrastructure.module.js.map