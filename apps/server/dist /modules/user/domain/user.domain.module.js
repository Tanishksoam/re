"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const user_domain_facade_1 = require("./user.domain.facade");
const user_exception_1 = require("./user.exception");
const user_model_1 = require("./user.model");
let UserDomainModule = class UserDomainModule {
};
exports.UserDomainModule = UserDomainModule;
exports.UserDomainModule = UserDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [database_1.DatabaseHelperModule, typeorm_1.TypeOrmModule.forFeature([user_model_1.User])],
        providers: [user_domain_facade_1.UserDomainFacade, user_exception_1.UserException],
        exports: [user_domain_facade_1.UserDomainFacade],
    })
], UserDomainModule);
//# sourceMappingURL=user.domain.module.js.map