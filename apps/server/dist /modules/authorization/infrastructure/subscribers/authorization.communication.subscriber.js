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
exports.AuthorizationCommunicationSubscriber = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const authorization_domain_event_1 = require("../../domain/authorization.domain.event");
const email_1 = require("../../../../libraries/email");
const domain_1 = require("../../../user/domain");
const domain_2 = require("../../domain");
let AuthorizationCommunicationSubscriber = class AuthorizationCommunicationSubscriber {
    constructor(userDomainFacade, authorizationDomainFacade, emailService) {
        this.userDomainFacade = userDomainFacade;
        this.authorizationDomainFacade = authorizationDomainFacade;
        this.emailService = emailService;
    }
    async handleCodeCreated(data) {
        var _a;
        const code = await this.authorizationDomainFacade.code.findOneByIdOrFail(data.authorizationCodeId);
        const user = await this.userDomainFacade.findOneByAuthorizationCodeOrFail(code);
        const keyPrivate = this.authorizationDomainFacade.code.getKeyPrivate(code);
        const type = this.emailService.Type.AUTHORIZATION_VERIFICATION_CODE;
        await this.emailService.send({
            type,
            email: user.email,
            name: (_a = user.name) !== null && _a !== void 0 ? _a : user.email,
            subject: `Single-use verification code`,
            variables: {
                code: keyPrivate,
                expiration: this.getExpiration(code),
            },
        });
    }
    getExpiration(code) {
        const durationMinutes = code.durationMinutes;
        const minutes = durationMinutes % 60;
        const hours = (durationMinutes - minutes) / 60;
        if (minutes > 0 && hours > 0) {
            return `${hours} hours and ${minutes} minutes`;
        }
        if (minutes > 0) {
            return `${minutes} minutes`;
        }
        if (hours > 1) {
            return `${hours} hours`;
        }
        return `${hours} hour`;
    }
};
exports.AuthorizationCommunicationSubscriber = AuthorizationCommunicationSubscriber;
__decorate([
    (0, event_emitter_1.OnEvent)(authorization_domain_event_1.AuthorizationDomainEvent.CodeCreated.key),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorizationCommunicationSubscriber.prototype, "handleCodeCreated", null);
exports.AuthorizationCommunicationSubscriber = AuthorizationCommunicationSubscriber = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domain_1.UserDomainFacade,
        domain_2.AuthorizationDomainFacade,
        email_1.EmailService])
], AuthorizationCommunicationSubscriber);
//# sourceMappingURL=authorization.communication.subscriber.js.map