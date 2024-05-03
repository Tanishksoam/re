import { DatabaseHelper } from '@server/core/database';
import { RequestHelper } from '@server/helpers/request';
import { AuthorizationCode } from '@server/modules/authorization/domain';
import { Repository } from 'typeorm';
import { UserException } from './user.exception';
import { User } from './user.model';
export declare class UserDomainFacade {
    private repository;
    private databaseHelper;
    private exception;
    constructor(repository: Repository<User>, databaseHelper: DatabaseHelper, exception: UserException);
    create(values: Partial<User>): Promise<User>;
    update(user: User, values: Partial<User>): Promise<User>;
    findMany(queryOptions?: RequestHelper.QueryOptions<User>): Promise<User[]>;
    findOneByEmailWithPassword(email: string): Promise<User>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<User>): Promise<User>;
    findOneByEmailOrFail(email: string): Promise<User>;
    findOneByAuthorizationCodeOrFail(authorizationCode: AuthorizationCode): Promise<User>;
    delete(user: User): Promise<void>;
    hashPassword(password: string): Promise<string>;
    verifyPassword(user: User, password: string): Promise<void>;
    isVerified(user: User): Promise<boolean>;
    setVerified(user: User): Promise<User>;
}
