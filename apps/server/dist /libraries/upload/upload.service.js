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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../core/configuration");
const logger_1 = require("../logger");
const aws_1 = require("./internal/providers/aws/aws");
const upload_local_provider_1 = require("./internal/providers/local/upload.local.provider");
let UploadService = class UploadService {
    constructor(configurationService, loggerService) {
        this.configurationService = configurationService;
        this.loggerService = loggerService;
        this.instance = this.createInstance();
    }
    isMocked() {
        const isDevelopment = this.configurationService.isEnvironmentDevelopment();
        return isDevelopment;
    }
    createInstance() {
        if (this.isMocked()) {
            return new upload_local_provider_1.UploadLocalProvider(this.loggerService, this.configurationService);
        }
        else {
            return new aws_1.UploadAWS(this.loggerService, this.configurationService);
        }
    }
    async uploadPublic(...files) {
        const responses = [];
        for (const file of files) {
            const response = await this.instance.uploadPublic({ file });
            responses.push(response);
        }
        return responses;
    }
    async uploadPrivate(...files) {
        const responses = [];
        for (const file of files) {
            const response = await this.instance.uploadPrivate({ file });
            responses.push(response);
        }
        return responses;
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        logger_1.LoggerService])
], UploadService);
//# sourceMappingURL=upload.service.js.map