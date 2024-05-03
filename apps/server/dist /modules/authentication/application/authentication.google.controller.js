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
exports.GoogleByAuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_1 = require("../../../core/authentication");
const event_1 = require("../../../libraries/event");
const google_1 = require("../../../libraries/google");
const logger_1 = require("../../../libraries/logger");
const domain_1 = require("../../user/domain");
const cookie_1 = require("../../../core/cookie");
const domain_2 = require("../domain");
const authentication_application_event_1 = require("./authentication.application.event");
const authentication_application_exception_1 = require("./authentication.application.exception");
const authentication_dto_1 = require("./authentication.dto");
let GoogleByAuthenticationController = class GoogleByAuthenticationController {
    constructor(authenticationDomainFacade, userDomainFacade, googleService, loggerService, eventService, exception, cookieService) {
        this.authenticationDomainFacade = authenticationDomainFacade;
        this.userDomainFacade = userDomainFacade;
        this.googleService = googleService;
        this.loggerService = loggerService;
        this.eventService = eventService;
        this.exception = exception;
        this.cookieService = cookieService;
        this.logger = this.loggerService.create({
            name: 'GoogleByAuthenticationController',
        });
    }
    async callback(body, response) {
        const { name, email } = await this.googleService
            .verifyToken(body.token)
            .catch(error => this.exception.invalidGoogleToken(error));
        let token;
        try {
            const user = await this.userDomainFacade.findOneByEmailOrFail(email);
            token = this.authenticationDomainFacade.buildToken(user.id);
        }
        catch (error) {
            const registerData = await this.register(email, name);
            token = registerData.token;
        }
        const data = this.authenticationDomainFacade.setAccessToken(response, token);
        return data;
    }
    async register(email, name) {
        await this.userDomainFacade.create({
            email,
            name,
        });
        const user = await this.userDomainFacade.findOneByEmailOrFail(email);
        await this.userDomainFacade.setVerified(user);
        const token = this.authenticationDomainFacade.buildToken(user.id);
        await this.eventService.emit(authentication_application_event_1.AuthenticationApplicationEvent.UserRegistered.key, { userId: user.id });
        this.logger.log(`User ${email} registered with google`);
        return { token };
    }
};
exports.GoogleByAuthenticationController = GoogleByAuthenticationController;
__decorate([
    (0, common_1.Post)('/callback'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.GoogleByAuthenticationCallbackDto, Object]),
    __metadata("design:returntype", Promise)
], GoogleByAuthenticationController.prototype, "callback", null);
exports.GoogleByAuthenticationController = GoogleByAuthenticationController = __decorate([
    (0, common_1.Controller)('/v1/authentication/google'),
    __metadata("design:paramtypes", [domain_2.AuthenticationDomainFacade,
        domain_1.UserDomainFacade,
        google_1.GoogleService,
        logger_1.LoggerService,
        event_1.EventService,
        authentication_application_exception_1.AuthenticationApplicationException,
        cookie_1.CookieService])
], GoogleByAuthenticationController);
//# sourceMappingURL=authentication.google.controller.js.map