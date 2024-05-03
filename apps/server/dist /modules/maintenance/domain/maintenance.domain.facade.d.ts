import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Maintenance } from './maintenance.model';
import { Property } from '../../property/domain';
export declare class MaintenanceDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Maintenance>, databaseHelper: DatabaseHelper);
    create(values: Partial<Maintenance>): Promise<Maintenance>;
    update(item: Maintenance, values: Partial<Maintenance>): Promise<Maintenance>;
    delete(item: Maintenance): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Maintenance>): Promise<Maintenance[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Maintenance>): Promise<Maintenance>;
    findManyByProperty(item: Property, queryOptions?: RequestHelper.QueryOptions<Maintenance>): Promise<Maintenance[]>;
}
