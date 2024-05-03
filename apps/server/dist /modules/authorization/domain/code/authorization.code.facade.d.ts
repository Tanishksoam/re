import { DatabaseHelper } from '@server/core/database';
import { EventService } from '@server/libraries/event';
import { User } from '@server/modules/user/domain';
import { Repository } from 'typeorm';
import { AuthorizationDomainException } from '../authorization.domain.exception';
import { AuthorizationCode, AuthorizationCodeType } from './authorization.code.model';
export declare class AuthorizationCodeFacade {
    private repository;
    private databaseHelper;
    private exception;
    private eventService;
    constructor(repository: Repository<AuthorizationCode>, databaseHelper: DatabaseHelper, exception: AuthorizationDomainException, eventService: EventService);
    createOrFail(values: Partial<AuthorizationCode>, user: User): Promise<AuthorizationCode>;
    check(code: AuthorizationCode): Promise<void>;
    setStatusExpired(code: AuthorizationCode): Promise<AuthorizationCode>;
    setStatusUsed(code: AuthorizationCode): Promise<AuthorizationCode>;
    create(code: Partial<AuthorizationCode>): Promise<AuthorizationCode>;
    update(code: AuthorizationCode, values: Partial<AuthorizationCode>): Promise<AuthorizationCode>;
    findOneByIdOrFail(codeId: string): Promise<AuthorizationCode>;
    findOneActiveOrFail(user: User, keyPrivate: string, keyPublic: string): Promise<AuthorizationCode>;
    findManyByUserAndType(user: User, type: AuthorizationCodeType): Promise<AuthorizationCode[]>;
    delete(code: AuthorizationCode): Promise<void>;
    getKeyPrivate(authorizationCode: AuthorizationCode): string;
    private buildKey;
}
