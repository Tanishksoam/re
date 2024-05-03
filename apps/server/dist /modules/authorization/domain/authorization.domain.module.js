"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const authorization_domain_exception_1 = require("./authorization.domain.exception");
const authorization_domain_facade_1 = require("./authorization.domain.facade");
const authorization_code_facade_1 = require("./code/authorization.code.facade");
const authorization_code_model_1 = require("./code/authorization.code.model");
const authorization_role_facade_1 = require("./role/authorization.role.facade");
const authorization_role_model_1 = require("./role/authorization.role.model");
const authorization_roleUser_model_1 = require("./role/authorization.roleUser.model");
let AuthorizationDomainModule = class AuthorizationDomainModule {
};
exports.AuthorizationDomainModule = AuthorizationDomainModule;
exports.AuthorizationDomainModule = AuthorizationDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_1.DatabaseHelperModule,
            typeorm_1.TypeOrmModule.forFeature([
                authorization_code_model_1.AuthorizationCode,
                authorization_role_model_1.AuthorizationRole,
                authorization_roleUser_model_1.AuthorizationRoleUser,
            ]),
        ],
        providers: [
            authorization_domain_facade_1.AuthorizationDomainFacade,
            authorization_code_facade_1.AuthorizationCodeFacade,
            authorization_domain_exception_1.AuthorizationDomainException,
            authorization_role_facade_1.AuthorizationRoleFacade,
        ],
        exports: [authorization_domain_facade_1.AuthorizationDomainFacade],
    })
], AuthorizationDomainModule);
//# sourceMappingURL=authorization.domain.module.js.map