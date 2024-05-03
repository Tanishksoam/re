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
exports.UserDomainFacade = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const hash_helper_1 = require("../../../helpers/hash/hash.helper");
const utility_1 = require("../../../helpers/utility");
const typeorm_2 = require("typeorm");
const user_exception_1 = require("./user.exception");
const user_model_1 = require("./user.model");
let UserDomainFacade = class UserDomainFacade {
    constructor(repository, databaseHelper, exception) {
        this.repository = repository;
        this.databaseHelper = databaseHelper;
        this.exception = exception;
    }
    create(values) {
        const user = Object.assign({}, values);
        if (user.email) {
            user.email = user.email.trim().toLowerCase();
        }
        return this.repository.save(user);
    }
    update(user, values) {
        const userUpdated = Object.assign(Object.assign({}, user), values);
        if (userUpdated.email) {
            userUpdated.email = userUpdated.email.trim().toLowerCase();
        }
        return this.repository.save(userUpdated);
    }
    async findMany(queryOptions = {}) {
        const query = this.databaseHelper.applyQueryOptions(this.repository, queryOptions);
        return query.getMany();
    }
    async findOneByEmailWithPassword(email) {
        const user = await this.repository.findOne({
            where: { email: email.trim().toLowerCase() },
            select: ['id', 'email', 'password'],
        });
        if (!user) {
            this.exception.notFoundByEmail(email);
        }
        return user;
    }
    async findOneByIdOrFail(id, queryOptions = {}) {
        if (!utility_1.Utility.isDefined(id)) {
            this.databaseHelper.invalidQueryWhere('id');
        }
        const queryOptionsEnsured = {
            includes: queryOptions.includes,
            filters: {
                id: id,
            },
        };
        const query = this.databaseHelper.applyQueryOptions(this.repository, queryOptionsEnsured);
        const user = await query.getOne();
        if (!user) {
            this.exception.notFoundById(id);
        }
        return user;
    }
    async findOneByEmailOrFail(email) {
        if (!utility_1.Utility.isDefined(email)) {
            this.databaseHelper.invalidQueryWhere('email');
        }
        const user = await this.repository.findOne({
            where: { email: email.trim().toLowerCase() },
        });
        if (!user) {
            this.exception.notFoundByEmail(email);
        }
        return user;
    }
    async findOneByAuthorizationCodeOrFail(authorizationCode) {
        const id = authorizationCode.userId;
        if (!utility_1.Utility.isDefined(id)) {
            this.databaseHelper.invalidQueryWhere('id');
        }
        const user = await this.repository.findOne({
            where: { id },
        });
        if (!user) {
            this.exception.notFoundById(id);
        }
        return user;
    }
    async delete(user) {
        await this.repository.softDelete(user.id);
    }
    async hashPassword(password) {
        return hash_helper_1.HashHelper.run(password);
    }
    async verifyPassword(user, password) {
        const isMatch = hash_helper_1.HashHelper.verify(password, user.password);
        if (isMatch) {
            return;
        }
        else {
            throw new Error(`Password is incorrect.`);
        }
    }
    async isVerified(user) {
        return user.status === user_model_1.UserStatus.VERIFIED;
    }
    setVerified(user) {
        return this.update(user, { status: user_model_1.UserStatus.VERIFIED });
    }
};
exports.UserDomainFacade = UserDomainFacade;
exports.UserDomainFacade = UserDomainFacade = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        database_1.DatabaseHelper,
        user_exception_1.UserException])
], UserDomainFacade);
//# sourceMappingURL=user.domain.facade.js.map