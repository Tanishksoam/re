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
exports.UserException = void 0;
const common_1 = require("@nestjs/common");
const exception_1 = require("../../../core/exception");
let UserException = class UserException {
    constructor(service) {
        this.service = service;
    }
    notFoundById(id) {
        return this.service.throw({
            status: common_1.HttpStatus.NOT_FOUND,
            code: 1,
            publicMessage: 'User was not found',
            privateMessage: `User with id "${id}" was not found.`,
        });
    }
    notFoundByEmail(email) {
        return this.service.throw({
            status: common_1.HttpStatus.NOT_FOUND,
            code: 2,
            publicMessage: 'User was not found',
            privateMessage: `User with email "${email}" was not found.`,
        });
    }
};
exports.UserException = UserException;
exports.UserException = UserException = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exception_1.ExceptionService])
], UserException);
//# sourceMappingURL=user.exception.js.map