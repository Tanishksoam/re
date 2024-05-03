"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cookie_1 = require("../../../core/cookie");
const database_1 = require("../../../core/database");
const authorization_code_model_1 = require("../../authorization/domain/code/authorization.code.model");
const authentication_domain_facade_1 = require("./authentication.domain.facade");
let AuthenticationDomainModule = class AuthenticationDomainModule {
};
exports.AuthenticationDomainModule = AuthenticationDomainModule;
exports.AuthenticationDomainModule = AuthenticationDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_1.DatabaseHelperModule,
            typeorm_1.TypeOrmModule.forFeature([authorization_code_model_1.AuthorizationCode]),
            cookie_1.CookieModule,
        ],
        providers: [authentication_domain_facade_1.AuthenticationDomainFacade],
        exports: [authentication_domain_facade_1.AuthenticationDomainFacade],
    })
], AuthenticationDomainModule);
//# sourceMappingURL=authentication.domain.module.js.map