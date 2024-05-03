"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationInfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const email_module_1 = require("../../../libraries/email/email.module");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../../user/domain");
const domain_3 = require("../domain");
const authorization_communication_subscriber_1 = require("./subscribers/authorization.communication.subscriber");
let AuthorizationInfrastructureModule = class AuthorizationInfrastructureModule {
};
exports.AuthorizationInfrastructureModule = AuthorizationInfrastructureModule;
exports.AuthorizationInfrastructureModule = AuthorizationInfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_2.UserDomainModule,
            domain_3.AuthorizationDomainModule,
            domain_1.AuthenticationDomainModule,
            email_module_1.EmailModule,
        ],
        providers: [authorization_communication_subscriber_1.AuthorizationCommunicationSubscriber],
        exports: [],
    })
], AuthorizationInfrastructureModule);
//# sourceMappingURL=authorization.infrastructure.module.js.map