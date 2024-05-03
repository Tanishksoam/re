import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Property } from './property.model';
import { User } from '../../user/domain';
export declare class PropertyDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Property>, databaseHelper: DatabaseHelper);
    create(values: Partial<Property>): Promise<Property>;
    update(item: Property, values: Partial<Property>): Promise<Property>;
    delete(item: Property): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Property>): Promise<Property[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Property>): Promise<Property>;
    findManyByUser(item: User, queryOptions?: RequestHelper.QueryOptions<Property>): Promise<Property[]>;
}
