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
exports.AuthorizationRoleFacade = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../../core/database");
const typeorm_2 = require("typeorm");
const authorization_role_model_1 = require("./authorization.role.model");
let AuthorizationRoleFacade = class AuthorizationRoleFacade {
    constructor(repository, databaseHelper) {
        this.repository = repository;
        this.databaseHelper = databaseHelper;
    }
    async findManyByUser(user) {
        const roles = await this.repository
            .createQueryBuilder('role')
            .innerJoin('role.roleUsers', 'roleUser', 'roleUser.userId = :userId', {
            userId: user.id,
        })
            .getMany();
        return roles;
    }
    async findOneByNameOrFail(name) {
        const role = await this.repository
            .createQueryBuilder('role')
            .leftJoinAndSelect('role.roleUsers', 'roleUser')
            .where('role.name = :name', { name })
            .getOne();
        if (!role) {
            this.databaseHelper.notFoundByQuery({ name });
        }
        return role;
    }
};
exports.AuthorizationRoleFacade = AuthorizationRoleFacade;
exports.AuthorizationRoleFacade = AuthorizationRoleFacade = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(authorization_role_model_1.AuthorizationRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        database_1.DatabaseHelper])
], AuthorizationRoleFacade);
//# sourceMappingURL=authorization.role.facade.js.map