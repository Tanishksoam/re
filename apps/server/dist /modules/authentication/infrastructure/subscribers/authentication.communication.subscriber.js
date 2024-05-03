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
exports.AuthenticationCommunicationSubscriber = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const user_orchestrator_event_1 = require("../../../user/orchestrators/user.orchestrator.event");
const configuration_1 = require("../../../../core/configuration");
const email_1 = require("../../../../libraries/email");
const domain_1 = require("../../../user/domain");
const application_1 = require("../../application");
const domain_2 = require("../../domain");
let AuthenticationCommunicationSubscriber = class AuthenticationCommunicationSubscriber {
    constructor(configurationService, userDomainFacade, authenticationDomainFacade, emailService) {
        this.configurationService = configurationService;
        this.userDomainFacade = userDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
        this.emailService = emailService;
    }
    async handleUserRegistered(data) {
        var _a;
        const user = await this.userDomainFacade.findOneByIdOrFail(data.userId);
        const type = this.emailService.Type.AUTHENTICATION_WELCOME;
        await this.emailService.send({
            type,
            email: user.email,
            name: (_a = user.name) !== null && _a !== void 0 ? _a : user.email,
            subject: `Welcome`,
            variables: {},
        });
    }
    async handleResetPassword(data) {
        var _a;
        const user = await this.userDomainFacade.findOneByIdOrFail(data.userId);
        const token = this.authenticationDomainFacade.buildTokenResetPassword(user);
        const url = this.configurationService.getClientBaseUrl();
        const urlResetPassword = `${url}/reset-password/${token}`;
        const type = this.emailService.Type.AUTHENTICATION_FORGOT_PASSWORD;
        await this.emailService.send({
            type,
            email: user.email,
            name: (_a = user.name) !== null && _a !== void 0 ? _a : user.email,
            subject: `Reset your password`,
            variables: {
                url_password_reset: urlResetPassword,
            },
        });
    }
};
exports.AuthenticationCommunicationSubscriber = AuthenticationCommunicationSubscriber;
__decorate([
    (0, event_emitter_1.OnEvent)(user_orchestrator_event_1.UserOrchestratorEvent.Verified.key),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationCommunicationSubscriber.prototype, "handleUserRegistered", null);
__decorate([
    (0, event_emitter_1.OnEvent)(application_1.AuthenticationApplicationEvent.UserPasswordResetRequested.key),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationCommunicationSubscriber.prototype, "handleResetPassword", null);
exports.AuthenticationCommunicationSubscriber = AuthenticationCommunicationSubscriber = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        domain_1.UserDomainFacade,
        domain_2.AuthenticationDomainFacade,
        email_1.EmailService])
], AuthenticationCommunicationSubscriber);
//# sourceMappingURL=authentication.communication.subscriber.js.map