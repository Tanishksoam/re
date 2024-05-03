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
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const configuration_1 = require("../../core/configuration");
const logger_1 = require("../logger");
let GoogleService = class GoogleService {
    constructor(configurationService, loggerService) {
        this.configurationService = configurationService;
        this.loggerService = loggerService;
        this.logger = this.loggerService.create({ name: 'GoogleService' });
        try {
            this.clientId = this.configurationService.get('SERVER_GOOGLE_CLIENT_ID');
            if (!this.clientId) {
                this.logger.warning(`Set GOOGLE_CLIENT_ID in your .env to activate Google Auth`);
                return;
            }
            this.client = new google_auth_library_1.OAuth2Client(this.clientId);
            this.logger.success(`Google Oauth active`);
        }
        catch (error) {
            this.logger.error(`Could not start Google Oauth`);
            this.logger.error(error);
        }
    }
    async verifyToken(token) {
        const ticket = await this.client.verifyIdToken({
            idToken: token,
            audience: this.clientId,
        });
        const { name, email } = ticket.getPayload();
        return {
            name,
            email,
        };
    }
};
exports.GoogleService = GoogleService;
exports.GoogleService = GoogleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        logger_1.LoggerService])
], GoogleService);
//# sourceMappingURL=google.service.js.map