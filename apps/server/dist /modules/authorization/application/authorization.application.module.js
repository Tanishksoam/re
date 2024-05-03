"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../domain");
const domain_2 = require("../../user/domain");
const orchestrators_1 = require("../../user/orchestrators");
const domain_3 = require("../../authentication/domain");
const authorization_application_exception_1 = require("./authorization.application.exception");
const authorization_controller_1 = require("./authorization.controller");
const authorizationByMe_controller_1 = require("./authorizationByMe.controller");
let AuthorizationApplicationModule = class AuthorizationApplicationModule {
};
exports.AuthorizationApplicationModule = AuthorizationApplicationModule;
exports.AuthorizationApplicationModule = AuthorizationApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_2.UserDomainModule,
            domain_3.AuthenticationDomainModule,
            domain_1.AuthorizationDomainModule,
            orchestrators_1.UserOrchestratorModule,
        ],
        controllers: [authorization_controller_1.AuthorizationController, authorizationByMe_controller_1.AuthorizationByUserController],
        providers: [authorization_application_exception_1.AuthorizationApplicationException],
    })
], AuthorizationApplicationModule);
//# sourceMappingURL=authorization.application.module.js.map