import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Feedback } from './feedback.model';
import { Property } from '../../property/domain';
import { User } from '../../user/domain';
export declare class FeedbackDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Feedback>, databaseHelper: DatabaseHelper);
    create(values: Partial<Feedback>): Promise<Feedback>;
    update(item: Feedback, values: Partial<Feedback>): Promise<Feedback>;
    delete(item: Feedback): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Feedback>): Promise<Feedback[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Feedback>): Promise<Feedback>;
    findManyByProperty(item: Property, queryOptions?: RequestHelper.QueryOptions<Feedback>): Promise<Feedback[]>;
    findManyByUser(item: User, queryOptions?: RequestHelper.QueryOptions<Feedback>): Promise<Feedback[]>;
}
