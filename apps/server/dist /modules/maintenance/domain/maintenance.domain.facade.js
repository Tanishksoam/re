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
exports.MaintenanceDomainFacade = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const database_1 = require("../../../core/database");
const maintenance_model_1 = require("./maintenance.model");
let MaintenanceDomainFacade = class MaintenanceDomainFacade {
    constructor(repository, databaseHelper) {
        this.repository = repository;
        this.databaseHelper = databaseHelper;
    }
    async create(values) {
        return this.repository.save(values);
    }
    async update(item, values) {
        const itemUpdated = Object.assign(Object.assign({}, item), values);
        return this.repository.save(itemUpdated);
    }
    async delete(item) {
        await this.repository.softDelete(item.id);
    }
    async findMany(queryOptions = {}) {
        const query = this.databaseHelper.applyQueryOptions(this.repository, queryOptions);
        return query.getMany();
    }
    async findOneByIdOrFail(id, queryOptions = {}) {
        if (!id) {
            this.databaseHelper.invalidQueryWhere('id');
        }
        const queryOptionsEnsured = {
            includes: queryOptions === null || queryOptions === void 0 ? void 0 : queryOptions.includes,
            filters: {
                id: id,
            },
        };
        const query = this.databaseHelper.applyQueryOptions(this.repository, queryOptionsEnsured);
        const item = await query.getOne();
        if (!item) {
            this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters);
        }
        return item;
    }
    async findManyByProperty(item, queryOptions = {}) {
        if (!item) {
            this.databaseHelper.invalidQueryWhere('property');
        }
        const queryOptionsEnsured = {
            includes: queryOptions.includes,
            orders: queryOptions.orders,
            filters: Object.assign(Object.assign({}, queryOptions.filters), { propertyId: item.id }),
        };
        const query = this.databaseHelper.applyQueryOptions(this.repository, queryOptionsEnsured);
        return query.getMany();
    }
};
exports.MaintenanceDomainFacade = MaintenanceDomainFacade;
exports.MaintenanceDomainFacade = MaintenanceDomainFacade = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(maintenance_model_1.Maintenance)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        database_1.DatabaseHelper])
], MaintenanceDomainFacade);
//# sourceMappingURL=maintenance.domain.facade.js.map