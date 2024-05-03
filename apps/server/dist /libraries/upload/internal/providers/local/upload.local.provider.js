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
exports.UploadLocalProvider = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../../../../core/configuration");
const file_1 = require("../../../../../helpers/file");
const logger_1 = require("../../../../logger");
let UploadLocalProvider = class UploadLocalProvider {
    constructor(loggerService, configurationService) {
        this.loggerService = loggerService;
        this.configurationService = configurationService;
        this.PATH_LOCAL_PUBLIC = './upload-local/public';
        this.PATH_LOCAL_PRIVATE = './upload-local/private';
        this.logger = this.loggerService.create({ name: 'UploadLocalProvider' });
        this.initialise();
    }
    initialise() {
        try {
            file_1.FileHelper.writeFolder(this.PATH_LOCAL_PUBLIC);
            this.staticServerUrl = `${this.configurationService.getBaseUrl()}`;
            this.logger.success(`Upload Local is active`);
        }
        catch (error) {
            this.logger.error(`Upload Local failed to start: ${error.message}`);
        }
    }
    async uploadPublic({ file, }) {
        const content = file.buffer;
        const fileName = file.originalname.replace(/[^\w\.]/gi, '');
        const path = file_1.FileHelper.joinPaths(this.PATH_LOCAL_PUBLIC, fileName);
        file_1.FileHelper.writeFile(path, content);
        const url = `${this.staticServerUrl}/${path}`;
        return { url };
    }
    async uploadPrivate({ file, }) {
        const content = file.buffer;
        const fileName = file.originalname.replace(/[^\w\.]/gi, '');
        const path = file_1.FileHelper.joinPaths(this.PATH_LOCAL_PRIVATE, fileName);
        file_1.FileHelper.writeFile(path, content);
        const url = `${this.staticServerUrl}/${path}`;
        return { url };
    }
};
exports.UploadLocalProvider = UploadLocalProvider;
UploadLocalProvider.path = '/upload-local';
exports.UploadLocalProvider = UploadLocalProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.LoggerService,
        configuration_1.ConfigurationService])
], UploadLocalProvider);
//# sourceMappingURL=upload.local.provider.js.map