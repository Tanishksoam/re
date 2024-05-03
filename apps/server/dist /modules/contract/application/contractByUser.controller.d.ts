import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { ContractDomainFacade } from '@server/modules/contract/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { ContractCreateDto } from './contract.dto';
import { UserDomainFacade } from '../../user/domain';
export declare class ContractByUserController {
    private userDomainFacade;
    private contractDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(userDomainFacade: UserDomainFacade, contractDomainFacade: ContractDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyTenantId(tenantId: string, request: Request): Promise<import("@server/modules/contract/domain").Contract[]>;
    createByTenantId(tenantId: string, body: ContractCreateDto, request: Request): Promise<import("@server/modules/contract/domain").Contract>;
    findManyLandlordId(landlordId: string, request: Request): Promise<import("@server/modules/contract/domain").Contract[]>;
    createByLandlordId(landlordId: string, body: ContractCreateDto, request: Request): Promise<import("@server/modules/contract/domain").Contract>;
}
