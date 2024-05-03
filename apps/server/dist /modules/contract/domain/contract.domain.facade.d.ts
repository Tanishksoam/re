import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Contract } from './contract.model';
import { Property } from '../../property/domain';
import { User } from '../../user/domain';
export declare class ContractDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Contract>, databaseHelper: DatabaseHelper);
    create(values: Partial<Contract>): Promise<Contract>;
    update(item: Contract, values: Partial<Contract>): Promise<Contract>;
    delete(item: Contract): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Contract>): Promise<Contract[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Contract>): Promise<Contract>;
    findManyByProperty(item: Property, queryOptions?: RequestHelper.QueryOptions<Contract>): Promise<Contract[]>;
    findManyByTenant(item: User, queryOptions?: RequestHelper.QueryOptions<Contract>): Promise<Contract[]>;
    findManyByLandlord(item: User, queryOptions?: RequestHelper.QueryOptions<Contract>): Promise<Contract[]>;
}
