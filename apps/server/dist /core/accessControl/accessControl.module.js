"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const accessControl_1 = require("../../modules/authorization/accessControl");
const accessControl_guard_1 = require("./guards/accessControl.guard");
const accessControl_service_1 = require("./internal/accessControl.service");
const accessControl_validator_1 = require("./internal/accessControl.validator");
let AccessControlModule = class AccessControlModule {
    static getGuards() {
        return [{ provide: core_1.APP_GUARD, useClass: accessControl_guard_1.AccessControlGuard }];
    }
};
exports.AccessControlModule = AccessControlModule;
exports.AccessControlModule = AccessControlModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [accessControl_1.AuthorizationAccessControlModule],
        providers: [accessControl_service_1.AccessControlService, accessControl_validator_1.AccessControlValidator],
        exports: [accessControl_service_1.AccessControlService],
    })
], AccessControlModule);
//# sourceMappingURL=accessControl.module.js.map