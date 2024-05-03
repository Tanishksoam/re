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
exports.AuthorizationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_1 = require("../../../core/authentication");
const logger_1 = require("../../../libraries/logger");
const domain_1 = require("../domain");
const domain_2 = require("../../user/domain");
const orchestrators_1 = require("../../user/orchestrators");
const authorization_application_exception_1 = require("./authorization.application.exception");
const authorization_dto_1 = require("./authorization.dto");
let AuthorizationController = class AuthorizationController {
    constructor(userDomainFacade, exception, loggerService, authorizationDomainFacade, userAuthorizationOrchestrator) {
        this.userDomainFacade = userDomainFacade;
        this.exception = exception;
        this.loggerService = loggerService;
        this.authorizationDomainFacade = authorizationDomainFacade;
        this.userAuthorizationOrchestrator = userAuthorizationOrchestrator;
        this.logger = this.loggerService.create({
            name: 'AuthorizationController',
        });
    }
    async createCode(type, body) {
        const user = await this.userDomainFacade.findOneByEmailOrFail(body.email);
        const values = this.getCodeValues(type);
        await this.deprecatePreviousCodes(user, type);
        const code = await this.authorizationDomainFacade.code.createOrFail(Object.assign(Object.assign({}, values), { type }), user);
        return code;
    }
    async verifyCode(body, type) {
        const user = await this.userDomainFacade.findOneByEmailOrFail(body.email);
        const code = await this.authorizationDomainFacade.code
            .findOneActiveOrFail(user, body.keyPrivate, body.keyPublic)
            .catch(error => {
            this.exception.invalidCodeVerification(error);
        });
        await this.authorizationDomainFacade.code.check(code).catch(error => {
            this.exception.expiredCodeVerification(error);
        });
        await this.authorizationDomainFacade.code.setStatusUsed(code);
        await this.onSuccess(type, user);
        return {};
    }
    getCodeValues(type) {
        switch (type) {
            case domain_1.AuthorizationCodeType.USER_VERIFICATION:
                return this.userAuthorizationOrchestrator.getCodeValues();
            default:
                this.exception.typeNotFound(type);
        }
    }
    async onSuccess(type, user) {
        switch (type) {
            case domain_1.AuthorizationCodeType.USER_VERIFICATION:
                await this.userAuthorizationOrchestrator.onSuccess(user);
                break;
            default:
                this.exception.typeNotFound(type);
        }
    }
    async deprecatePreviousCodes(user, type) {
        const codes = await this.authorizationDomainFacade.code.findManyByUserAndType(user, type);
        for (const code of codes) {
            await this.authorizationDomainFacade.code.setStatusExpired(code);
        }
    }
};
exports.AuthorizationController = AuthorizationController;
__decorate([
    (0, common_1.Post)('/:type/code'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, authorization_dto_1.AuthorizationCreateCodeDto]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "createCode", null);
__decorate([
    (0, common_1.Post)('/:type/code-verification'),
    authentication_1.Authentication.Public(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authorization_dto_1.AuthorizationVerifyCodeDto, String]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "verifyCode", null);
exports.AuthorizationController = AuthorizationController = __decorate([
    (0, common_1.Controller)('v1/authorization'),
    __metadata("design:paramtypes", [domain_2.UserDomainFacade,
        authorization_application_exception_1.AuthorizationApplicationException,
        logger_1.LoggerService,
        domain_1.AuthorizationDomainFacade,
        orchestrators_1.UserOrchestrator])
], AuthorizationController);
//# sourceMappingURL=authorization.controller.js.map