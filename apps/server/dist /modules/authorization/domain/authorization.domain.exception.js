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
exports.AuthorizationDomainException = void 0;
const common_1 = require("@nestjs/common");
const exception_1 = require("../../../core/exception");
let AuthorizationDomainException = class AuthorizationDomainException {
    constructor(service) {
        this.service = service;
    }
    codeNotFoundById(id) {
        return this.service.throw({
            status: common_1.HttpStatus.NOT_FOUND,
            code: 1,
            publicMessage: 'Authorization code was not found',
            privateMessage: `Authorization code id "${id}" was not found.`,
        });
    }
    codeNotFoundByKeys(user, keyPrivate, keyPublic) {
        return this.service.throw({
            status: common_1.HttpStatus.NOT_FOUND,
            code: 1,
            publicMessage: 'Authorization code was not found',
            privateMessage: `Authorization code with private key "${keyPrivate}" and public key "${keyPublic}" was not found for user "${user.id}".`,
        });
    }
};
exports.AuthorizationDomainException = AuthorizationDomainException;
exports.AuthorizationDomainException = AuthorizationDomainException = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exception_1.ExceptionService])
], AuthorizationDomainException);
//# sourceMappingURL=authorization.domain.exception.js.map