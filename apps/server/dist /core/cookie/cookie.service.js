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
exports.CookieService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../configuration");
var Key;
(function (Key) {
    Key["ACCESS_TOKEN"] = "APP_ACCESS_TOKEN";
})(Key || (Key = {}));
const TIME_24_HOURS = 60 * 60 * 24 * 1000;
let CookieService = class CookieService {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    getAccessToken(request) {
        return request.cookies[Key.ACCESS_TOKEN];
    }
    setAccessToken(response, token) {
        const options = this.getOptions();
        response.cookie(Key.ACCESS_TOKEN, token, options);
    }
    deleteAccessToken(response) {
        response.clearCookie(Key.ACCESS_TOKEN);
    }
    getOptions() {
        const options = {
            [configuration_1.ConfigurationServiceObject.Environment.DEVELOPMENT]: {
                maxAge: TIME_24_HOURS,
                secure: true,
                httpOnly: false,
                sameSite: 'lax',
            },
            [configuration_1.ConfigurationServiceObject.Environment.PRODUCTION]: {
                maxAge: TIME_24_HOURS,
                secure: true,
                httpOnly: true,
                sameSite: 'none',
            },
        };
        const environment = this.configurationService.getEnvironment();
        const valueDefault = options[configuration_1.ConfigurationServiceObject.Environment.DEVELOPMENT];
        const value = options[environment];
        return value !== null && value !== void 0 ? value : valueDefault;
    }
};
exports.CookieService = CookieService;
exports.CookieService = CookieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService])
], CookieService);
//# sourceMappingURL=cookie.service.js.map