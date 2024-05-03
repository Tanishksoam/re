"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const google_1 = require("../../../libraries/google");
const domain_1 = require("../../../modules/user/domain");
const domain_2 = require("../domain");
const authentication_application_exception_1 = require("./authentication.application.exception");
const authentication_controller_1 = require("./authentication.controller");
const authentication_google_controller_1 = require("./authentication.google.controller");
let AuthenticationApplicationModule = class AuthenticationApplicationModule {
};
exports.AuthenticationApplicationModule = AuthenticationApplicationModule;
exports.AuthenticationApplicationModule = AuthenticationApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_2.AuthenticationDomainModule, domain_1.UserDomainModule, google_1.GoogleModule],
        controllers: [authentication_controller_1.AuthenticationController, authentication_google_controller_1.GoogleByAuthenticationController],
        providers: [authentication_application_exception_1.AuthenticationApplicationException],
        exports: [],
    })
], AuthenticationApplicationModule);
//# sourceMappingURL=authentication.application.module.js.map