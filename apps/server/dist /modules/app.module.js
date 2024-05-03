"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const accessControl_1 = require("../core/accessControl");
const cookie_1 = require("../core/cookie");
const exception_1 = require("../core/exception");
const logging_1 = require("../core/logging");
const socket_1 = require("../libraries/socket");
const upload_module_1 = require("../libraries/upload/upload.module");
const configuration_module_1 = require("../core/configuration/configuration.module");
const cors_module_1 = require("../core/cors/cors.module");
const database_1 = require("../core/database");
const email_module_1 = require("../libraries/email/email.module");
const event_1 = require("../libraries/event");
const logger_1 = require("../libraries/logger");
const app_application_module_1 = require("./app.application.module");
const app_domain_module_1 = require("./app.domain.module");
const app_infrastructure_module_1 = require("./app.infrastructure.module");
const app_orchestrator_module_1 = require("./app.orchestrator.module");
const infrastructure_1 = require("./authentication/infrastructure");
const accessControl_2 = require("./authorization/accessControl");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configuration_module_1.ConfigurationModule,
            logger_1.LoggerModule,
            exception_1.ExceptionModule,
            database_1.DatabaseConfigurationModule,
            database_1.DatabaseSetupModule,
            cors_module_1.CorsModule,
            event_1.EventModule,
            email_module_1.EmailModule,
            upload_module_1.UploadModule,
            cookie_1.CookieModule,
            socket_1.SocketModule,
            accessControl_1.AccessControlModule,
            app_domain_module_1.AppDomainModule,
            app_application_module_1.AppApplicationModule,
            app_infrastructure_module_1.AppInfrastructureModule,
            app_orchestrator_module_1.AppOrchestratorModule,
            logging_1.LoggingModule,
        ],
        controllers: [],
        providers: [
            ...logging_1.LoggingModule.getInterceptors(),
            ...infrastructure_1.AuthenticationInfrastructureModule.getGuards(),
            ...accessControl_2.AuthorizationAccessControlModule.getGuards(),
            ...exception_1.ExceptionModule.getFilters(),
        ],
        exports: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map