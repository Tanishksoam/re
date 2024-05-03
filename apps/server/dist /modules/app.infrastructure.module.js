"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const infrastructure_1 = require("./authentication/infrastructure");
const infrastructure_2 = require("./authorization/infrastructure");
const infrastructure_3 = require("./notification/infrastructure");
let AppInfrastructureModule = class AppInfrastructureModule {
};
exports.AppInfrastructureModule = AppInfrastructureModule;
exports.AppInfrastructureModule = AppInfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            infrastructure_1.AuthenticationInfrastructureModule,
            infrastructure_2.AuthorizationInfrastructureModule,
            infrastructure_3.NotificationInfrastructureModule,
        ],
        controllers: [],
        providers: [],
    })
], AppInfrastructureModule);
//# sourceMappingURL=app.infrastructure.module.js.map