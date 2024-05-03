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
exports.AuthorizationAccessControlService = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const authorization_accessControl_exception_1 = require("./authorization.accessControl.exception");
let AuthorizationAccessControlService = class AuthorizationAccessControlService {
    constructor(authenticationDomainFacade, authorizationDomainFacade, exception) {
        this.authenticationDomainFacade = authenticationDomainFacade;
        this.authorizationDomainFacade = authorizationDomainFacade;
        this.exception = exception;
    }
    async findUserData(request) {
        const user = await this.getUser(request);
        const authorizationRoles = await this.findManyAuthorizationRoles(user);
        return {
            user,
            roles: authorizationRoles.map(role => role.name),
        };
    }
    onError(error) {
        return this.exception.invalidPermission(error);
    }
    async getUser(request) {
        const payload = this.authenticationDomainFacade.getRequestPayload(request);
        const user = payload.user;
        return user;
    }
    async findManyAuthorizationRoles(user) {
        const roles = await this.authorizationDomainFacade.role
            .findManyByUser(user)
            .catch(() => []);
        return roles;
    }
};
exports.AuthorizationAccessControlService = AuthorizationAccessControlService;
exports.AuthorizationAccessControlService = AuthorizationAccessControlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domain_1.AuthenticationDomainFacade,
        domain_2.AuthorizationDomainFacade,
        authorization_accessControl_exception_1.AuthorizationAccessControlException])
], AuthorizationAccessControlService);
//# sourceMappingURL=authorization.accessControl.service.js.map