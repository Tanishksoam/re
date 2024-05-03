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
exports.AuthenticationDomainFacade = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../../core/configuration");
const cookie_1 = require("../../../core/cookie");
const request_1 = require("../../../helpers/request");
const Jwt = require("jsonwebtoken");
const TIME_24_HOURS = 60 * 60 * 24;
let AuthenticationDomainFacade = class AuthenticationDomainFacade {
    constructor(configurationService, cookieService) {
        this.configurationService = configurationService;
        this.cookieService = cookieService;
    }
    buildToken(userId) {
        const payload = { userId };
        const secret = this.getSecret();
        const token = Jwt.sign(payload, secret, { expiresIn: TIME_24_HOURS });
        return token;
    }
    getAccessToken(request) {
        if (this.configurationService.getAuthenticationTokenMethod() ===
            configuration_1.ConfigurationServiceObject.AuthenticationTokenMethod.COOKIES) {
            return this.cookieService.getAccessToken(request);
        }
        else {
            return request_1.RequestHelper.getAuthorization(request);
        }
    }
    setAccessToken(response, token) {
        if (this.configurationService.getAuthenticationTokenMethod() ===
            configuration_1.ConfigurationServiceObject.AuthenticationTokenMethod.COOKIES) {
            this.cookieService.setAccessToken(response, token);
            return {};
        }
        return { token };
    }
    buildTokenResetPassword(user) {
        const payload = { userId: user.id };
        const secret = this.getSecret();
        const token = Jwt.sign(payload, secret, { expiresIn: TIME_24_HOURS });
        return token;
    }
    verifyTokenOrFail(token) {
        const isError = typeof token !== 'string';
        if (isError) {
            throw new Error('Token must be defined');
        }
        const secret = this.getSecret();
        const payload = Jwt.verify(token, secret);
        return payload;
    }
    async verifyTokenResetPasswordOrFail(token) {
        const isError = typeof token !== 'string';
        if (isError) {
            throw new Error('Token must be defined');
        }
        const secret = this.getSecret();
        const payload = Jwt.verify(token, secret);
        return payload;
    }
    assignRequestPayload(request, payload) {
        var _a, _b;
        const store = Object.assign({}, ((_a = request['store']) !== null && _a !== void 0 ? _a : {}));
        store.authentication = Object.assign(Object.assign({}, ((_b = store.authentication) !== null && _b !== void 0 ? _b : {})), { user: {
                id: payload.user.id,
                name: payload.user.name,
                email: payload.user.email,
            } });
        request['store'] = store;
    }
    getRequestPayload(request) {
        var _a, _b;
        return (_b = (_a = request['store']) === null || _a === void 0 ? void 0 : _a.authentication) !== null && _b !== void 0 ? _b : {};
    }
    getSecret() {
        return this.configurationService.get('SERVER_AUTHENTICATION_SECRET');
    }
};
exports.AuthenticationDomainFacade = AuthenticationDomainFacade;
exports.AuthenticationDomainFacade = AuthenticationDomainFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        cookie_1.CookieService])
], AuthenticationDomainFacade);
//# sourceMappingURL=authentication.domain.facade.js.map