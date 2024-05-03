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
exports.AuthenticationGuardService = void 0;
const common_1 = require("@nestjs/common");
const authentication_1 = require("../../../../core/authentication");
const context_1 = require("../../../../helpers/context");
const cookie_1 = require("../../../../core/cookie");
const domain_1 = require("../../../user/domain");
const domain_2 = require("../../domain");
const authentication_infrastructure_exception_1 = require("../authentication.infrastructure.exception");
let AuthenticationGuardService = class AuthenticationGuardService {
    constructor(cookieService, authenticationDomainFacade, userDomainFacade, exception) {
        this.cookieService = cookieService;
        this.authenticationDomainFacade = authenticationDomainFacade;
        this.userDomainFacade = userDomainFacade;
        this.exception = exception;
    }
    async validateRequest(reflector, context) {
        const isPublic = authentication_1.Authentication.isPublic(context, reflector);
        if (isPublic) {
            return true;
        }
        const request = context_1.ContextHelper.toRequest(context);
        const token = this.authenticationDomainFacade.getAccessToken(request);
        let userId;
        try {
            const payload = this.authenticationDomainFacade.verifyTokenOrFail(token);
            userId = payload.userId;
        }
        catch (error) {
            this.exception.invalidAccessToken();
        }
        const user = await this.userDomainFacade.findOneByIdOrFail(userId);
        await this.checkUserNotVerified(reflector, context, user);
        this.authenticationDomainFacade.assignRequestPayload(request, { user });
        return true;
    }
    async checkUserNotVerified(reflector, context, user) {
        const isUserNotVerifiedAllowed = authentication_1.Authentication.isUserNotVerifiedAllowed(context, reflector);
        if (isUserNotVerifiedAllowed) {
            return;
        }
        const isVerified = await this.userDomainFacade.isVerified(user);
        if (isVerified) {
            return;
        }
        this.exception.userNotVerified(user);
    }
};
exports.AuthenticationGuardService = AuthenticationGuardService;
exports.AuthenticationGuardService = AuthenticationGuardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cookie_1.CookieService,
        domain_2.AuthenticationDomainFacade,
        domain_1.UserDomainFacade,
        authentication_infrastructure_exception_1.AuthenticationInfrastructureException])
], AuthenticationGuardService);
//# sourceMappingURL=authentication.guard.service.js.map