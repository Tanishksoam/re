"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authorization/domain");
const domain_2 = require("../../../modules/authentication/domain");
const domain_3 = require("../domain");
const user_controller_1 = require("./user.controller");
let UserApplicationModule = class UserApplicationModule {
};
exports.UserApplicationModule = UserApplicationModule;
exports.UserApplicationModule = UserApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_3.UserDomainModule,
            domain_2.AuthenticationDomainModule,
            domain_1.AuthorizationDomainModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [],
    })
], UserApplicationModule);
//# sourceMappingURL=user.application.module.js.map