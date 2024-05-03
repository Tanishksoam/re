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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../core/configuration");
const logger_1 = require("../logger");
const email_type_1 = require("./internal/email.type");
const mailjet_provider_1 = require("./internal/providers/mailjet/mailjet.provider");
const nodemailer_provider_1 = require("./internal/providers/nodemailer/nodemailer.provider");
let EmailService = class EmailService {
    constructor(loggerService, configurationService, nodemailerProvider, mailjetProvider) {
        this.loggerService = loggerService;
        this.configurationService = configurationService;
        this.nodemailerProvider = nodemailerProvider;
        this.mailjetProvider = mailjetProvider;
        this.Type = email_type_1.EmailType;
        this.logger = this.loggerService.create({ name: 'EmailService' });
        const isProduction = this.configurationService.isEnvironmentProduction();
        if (isProduction) {
            this.provider = this.mailjetProvider;
        }
        else {
            this.provider = this.nodemailerProvider;
        }
    }
    async send(options) {
        return this.provider
            .send({
            type: options.type,
            content: options.content,
            to: [
                {
                    name: options.name,
                    email: options.email,
                },
            ],
            variables: options.variables,
            subject: options.subject,
        })
            .then(() => {
            this.logger.log(`Email sent to ${options.email}`, options);
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.LoggerService,
        configuration_1.ConfigurationService,
        nodemailer_provider_1.NodemailerProvider,
        mailjet_provider_1.MailjetProvider])
], EmailService);
//# sourceMappingURL=email.service.js.map