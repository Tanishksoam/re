import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { ContractDomainFacade } from '@server/modules/contract/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { ContractCreateDto } from './contract.dto';
import { PropertyDomainFacade } from '../../property/domain';
export declare class ContractByPropertyController {
    private propertyDomainFacade;
    private contractDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(propertyDomainFacade: PropertyDomainFacade, contractDomainFacade: ContractDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyPropertyId(propertyId: string, request: Request): Promise<import("@server/modules/contract/domain").Contract[]>;
    createByPropertyId(propertyId: string, body: ContractCreateDto, request: Request): Promise<import("@server/modules/contract/domain").Contract>;
}
