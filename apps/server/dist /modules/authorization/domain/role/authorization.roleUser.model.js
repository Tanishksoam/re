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
exports.AuthorizationRoleUser = void 0;
const domain_1 = require("../../../user/domain");
const typeorm_1 = require("typeorm");
const authorization_role_model_1 = require("./authorization.role.model");
let AuthorizationRoleUser = class AuthorizationRoleUser {
};
exports.AuthorizationRoleUser = AuthorizationRoleUser;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], AuthorizationRoleUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", domain_1.User)
], AuthorizationRoleUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], AuthorizationRoleUser.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => authorization_role_model_1.AuthorizationRole),
    (0, typeorm_1.JoinColumn)({ name: 'roleId' }),
    __metadata("design:type", authorization_role_model_1.AuthorizationRole)
], AuthorizationRoleUser.prototype, "role", void 0);
exports.AuthorizationRoleUser = AuthorizationRoleUser = __decorate([
    (0, typeorm_1.Entity)()
], AuthorizationRoleUser);
//# sourceMappingURL=authorization.roleUser.model.js.map