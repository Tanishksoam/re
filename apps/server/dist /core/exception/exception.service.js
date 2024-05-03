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
exports.ExceptionService = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../libraries/logger");
const exception_1 = require("./exception");
let ExceptionService = class ExceptionService {
    constructor(loggerService) {
        this.loggerService = loggerService;
        this.logger = this.loggerService.create({ name: 'ExceptionService' });
    }
    throw(payload) {
        var _a;
        const message = (_a = payload.privateMessage) !== null && _a !== void 0 ? _a : payload.publicMessage;
        this.logger.log(`[ErrorCode | ${payload.code}] ${message}`, payload);
        throw new exception_1.Exception({
            code: payload.code,
            message: payload.publicMessage,
            status: payload.status,
        });
    }
    isCustom(exception) {
        try {
            const payload = exception.getResponse();
            return (payload === null || payload === void 0 ? void 0 : payload.type) === 'CORE_EXCEPTION';
        }
        catch (error) {
            return false;
        }
    }
    getPayload(exception) {
        const payload = exception.getResponse();
        return payload;
    }
};
exports.ExceptionService = ExceptionService;
exports.ExceptionService = ExceptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.LoggerService])
], ExceptionService);
//# sourceMappingURL=exception.service.js.map