import { ExceptionService } from '@server/core/exception';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { RequestHelper } from '../../../helpers/request';
export declare class DatabaseHelper {
    private exception;
    constructor(exception: ExceptionService);
    applyQueryOptions<Type>(repository: Repository<Type>, queryOptions?: RequestHelper.QueryOptions<Type>): SelectQueryBuilder<Type>;
    notFoundByQuery(where: Record<string, any>): never;
    invalidQueryWhere(...keys: string[]): never;
    private applyIncludes;
    private applyFilters;
    private applyOrders;
    private buildQueryOptionsFilters;
}
