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
exports.CorsService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../configuration");
let CorsService = class CorsService {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    getOptions() {
        const clientBaseUrl = this.configurationService.getClientBaseUrl();
        const options = {
            [configuration_1.ConfigurationServiceObject.Environment.DEVELOPMENT]: {
                origin: [clientBaseUrl],
                credentials: true,
            },
            [configuration_1.ConfigurationServiceObject.Environment.PRODUCTION]: {
                origin: clientBaseUrl,
                credentials: true,
            },
        };
        const environment = this.configurationService.getEnvironment();
        const value = options[environment];
        const valueDefault = options[configuration_1.ConfigurationServiceObject.Environment.DEVELOPMENT];
        return value !== null && value !== void 0 ? value : valueDefault;
    }
};
exports.CorsService = CorsService;
exports.CorsService = CorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService])
], CorsService);
//# sourceMappingURL=cors.service.js.map