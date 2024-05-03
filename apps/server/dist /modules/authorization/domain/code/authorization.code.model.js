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
exports.AuthorizationCode = exports.AuthorizationCodeStatus = exports.AuthorizationCodeType = void 0;
const class_validator_1 = require("class-validator");
const domain_1 = require("../../../user/domain");
const typeorm_1 = require("typeorm");
var AuthorizationCodeType;
(function (AuthorizationCodeType) {
    AuthorizationCodeType["USER_VERIFICATION"] = "user.verification";
})(AuthorizationCodeType || (exports.AuthorizationCodeType = AuthorizationCodeType = {}));
var AuthorizationCodeStatus;
(function (AuthorizationCodeStatus) {
    AuthorizationCodeStatus["ACTIVE"] = "ACTIVE";
    AuthorizationCodeStatus["USED"] = "USED";
    AuthorizationCodeStatus["EXPIRED"] = "EXPIRED";
})(AuthorizationCodeStatus || (exports.AuthorizationCodeStatus = AuthorizationCodeStatus = {}));
let AuthorizationCode = class AuthorizationCode {
};
exports.AuthorizationCode = AuthorizationCode;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "keyPublic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "keyPrivate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 60 }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AuthorizationCode.prototype, "durationMinutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: AuthorizationCodeType }),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: AuthorizationCodeStatus,
        default: AuthorizationCodeStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "dateDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorizationCode.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", domain_1.User)
], AuthorizationCode.prototype, "user", void 0);
exports.AuthorizationCode = AuthorizationCode = __decorate([
    (0, typeorm_1.Entity)()
], AuthorizationCode);
//# sourceMappingURL=authorization.code.model.js.map