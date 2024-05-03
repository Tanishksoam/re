"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const utility_1 = require("../../helpers/utility");
const configuration_service_object_1 = require("./configuration.service.object");
let ConfigurationService = class ConfigurationService {
    constructor(manager) {
        this.manager = manager;
    }
    get(key, valueDefault) {
        return this.manager.get(key, valueDefault);
    }
    getPort() {
        return this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.PORT, 3099);
    }
    getNumber(key, valueDefault) {
        return this.manager.get(key, valueDefault);
    }
    getBoolean(key, valueDefault) {
        return this.manager.get(key, valueDefault);
    }
    getEnvironment() {
        const value = this.get(configuration_service_object_1.ConfigurationServiceObject.Key.ENVIRONMENT, configuration_service_object_1.ConfigurationServiceObject.Environment.DEVELOPMENT);
        return value;
    }
    getAuthenticationTokenMethod() {
        const value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.AUTHENTICATION_TOKEN_METHOD, configuration_service_object_1.ConfigurationServiceObject.AuthenticationTokenMethod.COOKIES);
        return value;
    }
    getClientBaseUrl() {
        const value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.CLIENT_BASE_URL);
        const valueClean = utility_1.Utility.removeTrailingSlash(value);
        return valueClean;
    }
    getBaseUrl() {
        const port = this.getPort();
        const value = this.manager.get(configuration_service_object_1.ConfigurationServiceObject.Key.BASE_URL, `http://localhost:${port}`);
        const valueClean = utility_1.Utility.removeTrailingSlash(value);
        return valueClean;
    }
    isEnvironmentDevelopment() {
        return (this.getEnvironment() ===
            configuration_service_object_1.ConfigurationServiceObject.Environment.DEVELOPMENT);
    }
    isEnvironmentProduction() {
        return (this.getEnvironment() ===
            configuration_service_object_1.ConfigurationServiceObject.Environment.PRODUCTION);
    }
};
exports.ConfigurationService = ConfigurationService;
exports.ConfigurationService = ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ConfigurationService);
//# sourceMappingURL=configuration.service.js.map