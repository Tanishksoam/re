import { DatabaseHelper } from '@server/core/database';
import { User } from '@server/modules/user/domain';
import { Repository } from 'typeorm';
import { AuthorizationRole } from './authorization.role.model';
export declare class AuthorizationRoleFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<AuthorizationRole>, databaseHelper: DatabaseHelper);
    findManyByUser(user: User): Promise<AuthorizationRole[]>;
    findOneByNameOrFail(name: string): Promise<AuthorizationRole>;
}
