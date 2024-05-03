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
exports.WinstonService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const configuration_1 = require("../../../core/configuration");
let WinstonService = class WinstonService {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    create() {
        const isDevelopment = this.configurationService.isEnvironmentDevelopment();
        if (isDevelopment) {
            return this.createForDevelopment();
        }
        return this.createForProduction();
    }
    createForDevelopment() {
        return (0, winston_1.createLogger)({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
                return `[${timestamp}] [${level}] ${message}`;
            })),
            transports: [new winston_1.transports.Console()],
        });
    }
    createForProduction() {
        return (0, winston_1.createLogger)({
            format: winston_1.format.json(),
            transports: [new winston_1.transports.Console()],
        });
    }
};
exports.WinstonService = WinstonService;
exports.WinstonService = WinstonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService])
], WinstonService);
//# sourceMappingURL=winston.service.js.map