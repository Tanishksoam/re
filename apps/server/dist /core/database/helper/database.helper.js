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
exports.DatabaseHelper = void 0;
const common_1 = require("@nestjs/common");
const exception_1 = require("../../exception");
const utility_1 = require("../../../helpers/utility");
let DatabaseHelper = class DatabaseHelper {
    constructor(exception) {
        this.exception = exception;
    }
    applyQueryOptions(repository, queryOptions = {}) {
        const query = repository.createQueryBuilder('entity');
        this.applyIncludes(query, queryOptions);
        this.applyFilters(query, queryOptions);
        this.applyOrders(query, queryOptions);
        return query;
    }
    notFoundByQuery(where) {
        const keyValues = Object.entries(where)
            .map(([key, value]) => `"${key}"="${value}"`)
            .join(', ');
        return this.exception.throw({
            status: common_1.HttpStatus.NOT_FOUND,
            code: 101,
            publicMessage: 'Resource was not found',
            privateMessage: `Resource with ${keyValues} was not found.`,
        });
    }
    invalidQueryWhere(...keys) {
        const keysString = keys.map(key => `"${key}"`).join(', ');
        return this.exception.throw({
            status: common_1.HttpStatus.BAD_REQUEST,
            code: 100,
            publicMessage: 'Resource was not found',
            privateMessage: `Resource where conditions for keys ${keysString} are invalid.`,
        });
    }
    applyIncludes(query, queryOptions) {
        var _a;
        const includes = ((_a = queryOptions.includes) !== null && _a !== void 0 ? _a : []);
        includes.forEach((relation, relationIndex) => {
            const keys = relation.split('.');
            keys.forEach((key, keyIndex) => {
                const suffix = `${relationIndex}_${keyIndex}`;
                const keyUnique = `${key}_${suffix}`;
                const isRoot = keyIndex === 0;
                if (isRoot) {
                    query.leftJoinAndSelect(`entity.${key}`, `${keyUnique}`);
                }
                else {
                    const suffixParent = `${relationIndex}_${keyIndex - 1}`;
                    const keyUniqueParent = `${keys[keyIndex - 1]}_${suffixParent}`;
                    query.leftJoinAndSelect(`${keyUniqueParent}.${key}`, `${keyUnique}`);
                }
            });
        });
    }
    applyFilters(query, queryOptions) {
        var _a;
        const filters = (_a = queryOptions.filters) !== null && _a !== void 0 ? _a : {};
        const conditions = [];
        const values = {};
        for (const [key, value] of Object.entries(filters)) {
            const isArray = Array.isArray(value);
            if (isArray) {
                conditions.push(`entity.${key} IN (:...${key})`);
                values[key] = value;
            }
            else if (typeof value === 'object') {
                const filters = this.buildQueryOptionsFilters(key, value);
                for (const filter of filters) {
                    conditions.push(filter.condition);
                    values[filter.key] = filter.value;
                }
            }
            else {
                conditions.push(`entity.${key} = :${key}`);
                values[key] = value;
            }
        }
        query.where(conditions.join(' AND '), values);
    }
    applyOrders(query, queryOptions) {
        var _a;
        const orders = (_a = queryOptions.orders) !== null && _a !== void 0 ? _a : {};
        let isFirst = true;
        for (const [key, value] of Object.entries(orders)) {
            if (!isFirst) {
                query.orderBy(`entity.${key}`, value);
                isFirst = false;
            }
            query.addOrderBy(`entity.${key}`, value);
        }
    }
    buildQueryOptionsFilters(key, filter) {
        const conditions = [];
        if (utility_1.Utility.isDefined(filter.eq)) {
            conditions.push({
                condition: `entity.${key} = :${key}EQ`,
                key: `${key}EQ`,
                value: filter.eq,
            });
        }
        if (utility_1.Utility.isDefined(filter.neq)) {
            conditions.push({
                condition: `entity.${key} != :${key}NEQ`,
                key: `${key}NEQ`,
                value: filter.neq,
            });
        }
        if (utility_1.Utility.isDefined(filter.gt)) {
            conditions.push({
                condition: `entity.${key} > :${key}GT`,
                key: `${key}GT`,
                value: filter.gt,
            });
        }
        if (utility_1.Utility.isDefined(filter.gte)) {
            conditions.push({
                condition: `entity.${key} >= :${key}GTE`,
                key: `${key}GTE`,
                value: filter.gte,
            });
        }
        if (utility_1.Utility.isDefined(filter.lt)) {
            conditions.push({
                condition: `entity.${key} < :${key}LT`,
                key: `${key}LT`,
                value: filter.lt,
            });
        }
        if (utility_1.Utility.isDefined(filter.lte)) {
            conditions.push({
                condition: `entity.${key} <= :${key}LTE`,
                key: `${key}LTE`,
                value: filter.lte,
            });
        }
        if (utility_1.Utility.isDefined(filter.in)) {
            conditions.push({
                condition: `entity.${key} IN (:...${key}IN)`,
                key: `${key}IN`,
                value: filter.in,
            });
        }
        if (utility_1.Utility.isDefined(filter.nin)) {
            conditions.push({
                condition: `entity.${key} NOT IN (:...${key}NIN)`,
                key: `${key}NIN`,
                value: filter.nin,
            });
        }
        if (utility_1.Utility.isDefined(filter.like)) {
            conditions.push({
                condition: `entity.${key} LIKE :${key}LIKE`,
                key: `${key}LIKE`,
                value: filter.like,
            });
        }
        if (utility_1.Utility.isDefined(filter.ilike)) {
            conditions.push({
                condition: `entity.${key} ILIKE :${key}ILIKE`,
                key: `${key}ILIKE`,
                value: filter.ilike,
            });
        }
        return conditions;
    }
};
exports.DatabaseHelper = DatabaseHelper;
exports.DatabaseHelper = DatabaseHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [exception_1.ExceptionService])
], DatabaseHelper);
//# sourceMappingURL=database.helper.js.map