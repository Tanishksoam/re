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
exports.MailjetProvider = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../../../../core/configuration");
const logger_1 = require("../../../../logger");
const node_mailjet_1 = require("node-mailjet");
const email_type_1 = require("../../email.type");
const email_template_service_1 = require("../../templates/email.template.service");
let MailjetProvider = class MailjetProvider {
    constructor(configurationService, loggerService, templateService) {
        this.configurationService = configurationService;
        this.loggerService = loggerService;
        this.templateService = templateService;
        this.templateIds = {
            [email_type_1.EmailType.DEFAULT]: null,
            [email_type_1.EmailType.AUTHENTICATION_WELCOME]: null,
            [email_type_1.EmailType.AUTHENTICATION_FORGOT_PASSWORD]: null,
            [email_type_1.EmailType.AUTHORIZATION_VERIFICATION_CODE]: null,
        };
        this.logger = this.loggerService.create({ name: 'MailjetProvider' });
        this.initialise();
    }
    initialise() {
        const isProduction = this.configurationService.isEnvironmentProduction();
        if (!isProduction) {
            this.logger.warning(`Mailjet is disabled in development`);
            return;
        }
        try {
            const apiKey = this.configurationService.get('SERVER_EMAIL_MAILJET_API_KEY');
            const secretKey = this.configurationService.get('SERVER_EMAIL_MAILJET_SECRET_KEY');
            if (!apiKey || !secretKey) {
                this.logger.warning(`Set EMAIL_MAILJET_API_KEY and EMAIL_MAILJET_SECRET_KEY to activate Mailjet`);
                return;
            }
            this.client = new node_mailjet_1.default({ apiKey, apiSecret: secretKey });
            this.logger.success(`Mailjet service active`);
        }
        catch (error) {
            this.logger.error(`Could not start Mailjet service`);
            this.logger.error(error);
        }
    }
    async send(options) {
        const message = this.buildMessage(options);
        return this.client
            .post('send', { version: 'v3.1' })
            .request({
            Messages: [
                Object.assign({}, message),
            ],
        })
            .then(result => {
            this.logger.log(`Emails sent`, result);
        })
            .catch(error => {
            this.logger.error(`Could not send emails (${error.statusCode})`);
        });
    }
    buildMessage(options) {
        const from = {
            Email: email_type_1.EmailSender.default.email,
            Name: email_type_1.EmailSender.default.name,
        };
        const to = options.to.map(item => ({ Email: item.email, Name: item.name }));
        const message = {
            From: from,
            To: to,
            Subject: options.subject,
            HTMLPart: undefined,
            Variables: undefined,
            TemplateLanguage: undefined,
            templateId: undefined,
        };
        const templateId = this.templateIds[options.type];
        if (templateId) {
            message.TemplateLanguage = true;
            message.templateId = templateId;
            message.Variables = options.variables;
        }
        else {
            const content = this.templateService.get(options);
            message.HTMLPart = content;
        }
        return message;
    }
};
exports.MailjetProvider = MailjetProvider;
exports.MailjetProvider = MailjetProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        logger_1.LoggerService,
        email_template_service_1.EmailTemplateService])
], MailjetProvider);
//# sourceMappingURL=mailjet.provider.js.map