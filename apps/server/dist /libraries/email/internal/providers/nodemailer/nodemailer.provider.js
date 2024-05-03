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
exports.NodemailerProvider = void 0;
const common_1 = require("@nestjs/common");
const NodemailerSDK = require("nodemailer");
const configuration_1 = require("../../../../../core/configuration");
const logger_1 = require("../../../../logger");
const email_type_1 = require("../../email.type");
const email_template_service_1 = require("../../templates/email.template.service");
let NodemailerProvider = class NodemailerProvider {
    constructor(loggerService, configurationService, templateService) {
        this.loggerService = loggerService;
        this.configurationService = configurationService;
        this.templateService = templateService;
        this.logger = this.loggerService.create({ name: 'NodemailerProvider' });
        this.initialise();
    }
    initialise() {
        var _a;
        try {
            const host = (_a = this.configurationService.get('SERVER_EMAIL_MAILPIT_HOST')) !== null && _a !== void 0 ? _a : 'localhost';
            const port = this.configurationService.getNumber('SERVER_EMAIL_MAILPIT_PORT', 1022);
            this.client = NodemailerSDK.createTransport({
                host,
                port,
            });
            this.logger.success(`Nodemailer is active (${host}:${port})`);
        }
        catch (error) {
            this.logger.error(`Nodemailer failed to start: ${error.message}`);
        }
    }
    async send(options) {
        const from = email_type_1.EmailSender.default;
        const content = this.templateService.get(options);
        for (const to of options.to) {
            await this.client
                .sendMail({
                from: `${from.name} <${from.email}>`,
                to: to.email,
                subject: options.subject,
                html: content,
            })
                .then(result => {
                this.logger.log(`Emails sent`);
            })
                .catch(error => {
                this.logger.error(`Could not send emails (${error.statusCode})`);
                this.logger.error(error);
            });
        }
    }
};
exports.NodemailerProvider = NodemailerProvider;
exports.NodemailerProvider = NodemailerProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.LoggerService,
        configuration_1.ConfigurationService,
        email_template_service_1.EmailTemplateService])
], NodemailerProvider);
//# sourceMappingURL=nodemailer.provider.js.map