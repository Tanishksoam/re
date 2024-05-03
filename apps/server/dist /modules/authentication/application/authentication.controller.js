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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_1 = require("../../../core/authentication");
const event_1 = require("../../../libraries/event");
const logger_1 = require("../../../libraries/logger");
const domain_1 = require("../../user/domain");
const cookie_1 = require("../../../core/cookie");
const domain_2 = require("../domain");
const authentication_application_event_1 = require("./authentication.application.event");
const authentication_application_exception_1 = require("./authentication.application.exception");
const authentication_dto_1 = require("./authentication.dto");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationDomainFacade, exception, userDomainFacade, loggerService, event, cookieService) {
        this.authenticationDomainFacade = authenticationDomainFacade;
        this.exception = exception;
        this.userDomainFacade = userDomainFacade;
        this.loggerService = loggerService;
        this.event = event;
        this.cookieService = cookieService;
        this.logger = this.loggerService.create({
            name: 'AuthenticationController',
        });
    }
    async login(body, response) {
        const { email, password } = body;
        const user = await this.userDomainFacade
            .findOneByEmailWithPassword(email)
            .catch(() => this.exception.userEmailNotFound(email));
        await this.userDomainFacade
            .verifyPassword(user, password)
            .catch(() => this.exception.userPasswordNotFound(email));
        const token = this.authenticationDomainFacade.buildToken(user.id);
        const data = this.authenticationDomainFacade.setAccessToken(response, token);
        return data;
    }
    async register(body, response) {
        const { email, password, name, } = body;
        const userExisting = await this.userDomainFacade
            .findOneByEmailOrFail(email)
            .catch(() => { });
        if (userExisting) {
            this.exception.userEmailNotAvailable(email);
        }
        const passwordHashed = await this.userDomainFacade.hashPassword(password);
        const user = await this.userDomainFacade.create({
            email,
            name,
            password: passwordHashed,
        });
        const token = this.authenticationDomainFacade.buildToken(user.id);
        await this.event.emit(authentication_application_event_1.AuthenticationApplicationEvent.UserRegistered.key, { userId: user.id });
        const data = this.authenticationDomainFacade.setAccessToken(response, token);
        return data;
    }
    async refresh(request, response) {
        const token = this.authenticationDomainFacade.getAccessToken(request);
        try {
            let userId;
            try {
                const payload = this.authenticationDomainFacade.verifyTokenOrFail(token);
                userId = payload.userId;
            }
            catch (error) {
                this.exception.invalidAccessToken();
            }
            const user = await this.userDomainFacade.findOneByIdOrFail(userId);
            const tokenRefreshed = this.authenticationDomainFacade.buildToken(user.id);
            const data = this.authenticationDomainFacade.setAccessToken(response, tokenRefreshed);
            return data;
        }
        catch (error) {
            this.cookieService.deleteAccessToken(response);
            throw error;
        }
    }
    async sendEmailResetPassword(body) {
        const user = await this.userDomainFacade
            .findOneByEmailOrFail(body.email)
            .catch(() => null);
        if (!user) {
            this.logger.log(`${body.email} was not found. Reset password email skipped.`);
            return {};
        }
        await this.event.emit(authentication_application_event_1.AuthenticationApplicationEvent.UserPasswordResetRequested.key, { userId: user.id });
        return {};
    }
    async resetPassword(body) {
        const { userId } = await this.authenticationDomainFacade
            .verifyTokenResetPasswordOrFail(body.token)
            .catch(() => this.exception.invalidResetPasswordToken());
        const user = await this.userDomainFacade.findOneByIdOrFail(userId);
        const passwordHashed = await this.userDomainFacade.hashPassword(body.password);
        await this.userDomainFacade.update(user, {
            password: passwordHashed,
        });
        return {};
    }
    async logout(response) {
        try {
            this.cookieService.deleteAccessToken(response);
        }
        catch (error) {
            console.log(error);
        }
        return {};
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, common_1.Post)('/login'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationLoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationRegisterDto, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/refresh'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('/reset-password-email'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationSendEmailResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "sendEmailResetPassword", null);
__decorate([
    (0, common_1.Patch)('/reset-password'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/logout'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logout", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, common_1.Controller)('/v1/authentication'),
    __metadata("design:paramtypes", [domain_2.AuthenticationDomainFacade,
        authentication_application_exception_1.AuthenticationApplicationException,
        domain_1.UserDomainFacade,
        logger_1.LoggerService,
        event_1.EventService,
        cookie_1.CookieService])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map