import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Payment } from './payment.model';
import { Contract } from '../../contract/domain';
export declare class PaymentDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Payment>, databaseHelper: DatabaseHelper);
    create(values: Partial<Payment>): Promise<Payment>;
    update(item: Payment, values: Partial<Payment>): Promise<Payment>;
    delete(item: Payment): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Payment>): Promise<Payment[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Payment>): Promise<Payment>;
    findManyByContract(item: Contract, queryOptions?: RequestHelper.QueryOptions<Payment>): Promise<Payment[]>;
}
