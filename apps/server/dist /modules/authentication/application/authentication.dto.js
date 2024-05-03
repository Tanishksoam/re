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
exports.GoogleByAuthenticationCallbackDto = exports.AuthenticationSendEmailResetPasswordDto = exports.AuthenticationResetPasswordDto = exports.AuthenticationRegisterDto = exports.AuthenticationLoginDto = void 0;
const class_validator_1 = require("class-validator");
class AuthenticationLoginDto {
}
exports.AuthenticationLoginDto = AuthenticationLoginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationLoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationLoginDto.prototype, "password", void 0);
class AuthenticationRegisterDto {
}
exports.AuthenticationRegisterDto = AuthenticationRegisterDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationRegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationRegisterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(32),
    (0, class_validator_1.Matches)(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/, {
        message: 'Password must contain at least one letter, one number, and one special character.',
    }),
    __metadata("design:type", String)
], AuthenticationRegisterDto.prototype, "password", void 0);
class AuthenticationResetPasswordDto {
}
exports.AuthenticationResetPasswordDto = AuthenticationResetPasswordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationResetPasswordDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/, {
        message: 'Password must contain at least one letter, one number, and one special character.',
    }),
    __metadata("design:type", String)
], AuthenticationResetPasswordDto.prototype, "password", void 0);
class AuthenticationSendEmailResetPasswordDto {
}
exports.AuthenticationSendEmailResetPasswordDto = AuthenticationSendEmailResetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthenticationSendEmailResetPasswordDto.prototype, "email", void 0);
class GoogleByAuthenticationCallbackDto {
}
exports.GoogleByAuthenticationCallbackDto = GoogleByAuthenticationCallbackDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GoogleByAuthenticationCallbackDto.prototype, "token", void 0);
//# sourceMappingURL=authentication.dto.js.map