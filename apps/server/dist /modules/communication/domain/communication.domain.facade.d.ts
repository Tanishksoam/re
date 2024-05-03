import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Communication } from './communication.model';
import { User } from '../../user/domain';
export declare class CommunicationDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Communication>, databaseHelper: DatabaseHelper);
    create(values: Partial<Communication>): Promise<Communication>;
    update(item: Communication, values: Partial<Communication>): Promise<Communication>;
    delete(item: Communication): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Communication>): Promise<Communication[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Communication>): Promise<Communication>;
    findManyBySender(item: User, queryOptions?: RequestHelper.QueryOptions<Communication>): Promise<Communication[]>;
    findManyByReceiver(item: User, queryOptions?: RequestHelper.QueryOptions<Communication>): Promise<Communication[]>;
}
