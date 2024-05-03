import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { UserDomainFacade } from '@server/modules/user/domain';
import { Request } from 'express';
import { CookieService } from '../../../core/cookie';
import { UserCreateDto, UserUpdateDto } from './user.dto';
export declare class UserController {
    private cookieSevice;
    private userDomainFacade;
    private authenticationDomainFacade;
    constructor(cookieSevice: CookieService, userDomainFacade: UserDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<import("@server/modules/user/domain").User[]>;
    me(request: Request): Promise<import("@server/modules/user/domain").User>;
    create(body: UserCreateDto): Promise<import("@server/modules/user/domain").User>;
    findOne(userId: string, request: Request): Promise<import("@server/modules/user/domain").User>;
    update(userId: string, body: UserUpdateDto): Promise<import("@server/modules/user/domain").User>;
    delete(userId: string): Promise<import("@server/modules/user/domain").User>;
}
