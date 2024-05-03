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
exports.ExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const exception_service_1 = require("./exception.service");
let ExceptionFilter = class ExceptionFilter {
    constructor(exceptionService) {
        this.exceptionService = exceptionService;
    }
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        const status = exception.getStatus();
        if (this.exceptionService.isCustom(exception)) {
            const payload = this.exceptionService.getPayload(exception);
            response.status(status).json({
                code: payload.code,
                message: payload.message,
            });
        }
        else {
            const payload = exception.getResponse();
            const message = exception.message;
            const data = payload === null || payload === void 0 ? void 0 : payload.message;
            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message,
                data,
            });
        }
    }
};
exports.ExceptionFilter = ExceptionFilter;
exports.ExceptionFilter = ExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [exception_service_1.ExceptionService])
], ExceptionFilter);
//# sourceMappingURL=exception.filter.js.map