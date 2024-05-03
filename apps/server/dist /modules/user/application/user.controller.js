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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const authentication_1 = require("../../../core/authentication");
const request_1 = require("../../../helpers/request");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const cookie_1 = require("../../../core/cookie");
const user_dto_1 = require("./user.dto");
let UserController = class UserController {
    constructor(cookieSevice, userDomainFacade, authenticationDomainFacade) {
        this.cookieSevice = cookieSevice;
        this.userDomainFacade = userDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const users = await this.userDomainFacade.findMany(queryOptions);
        return users;
    }
    async me(request) {
        const token = this.authenticationDomainFacade.getAccessToken(request);
        const { userId } = this.authenticationDomainFacade.verifyTokenOrFail(token);
        const user = await this.userDomainFacade.findOneByIdOrFail(userId);
        return user;
    }
    async create(body) {
        const userCreated = await this.userDomainFacade.create(body);
        return userCreated;
    }
    async findOne(userId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const user = await this.userDomainFacade.findOneByIdOrFail(userId, queryOptions);
        return user;
    }
    async update(userId, body) {
        const user = await this.userDomainFacade.findOneByIdOrFail(userId);
        const userUpdated = await this.userDomainFacade.update(user, body);
        return userUpdated;
    }
    async delete(userId) {
        const user = await this.userDomainFacade.findOneByIdOrFail(userId);
        await this.userDomainFacade.delete(user);
        return user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)('/me'),
    authentication_1.Authentication.AllowUserNotVerified(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('v1/users'),
    __metadata("design:paramtypes", [cookie_1.CookieService,
        domain_2.UserDomainFacade,
        domain_1.AuthenticationDomainFacade])
], UserController);
//# sourceMappingURL=user.controller.js.map