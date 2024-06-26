"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const domain_1 = require("../../modules/authentication/domain");
const logging_interceptor_1 = require("./logging.interceptor");
const logging_service_1 = require("./logging.service");
let LoggingModule = class LoggingModule {
    static getInterceptors() {
        return [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ];
    }
};
exports.LoggingModule = LoggingModule;
exports.LoggingModule = LoggingModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_1.AuthenticationDomainModule],
        providers: [logging_service_1.LoggingService],
        exports: [logging_service_1.LoggingService],
    })
], LoggingModule);
//# sourceMappingURL=logging.module.js.map