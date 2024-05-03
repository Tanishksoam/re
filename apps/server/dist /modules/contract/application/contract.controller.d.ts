import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Contract, ContractDomainFacade } from '@server/modules/contract/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { ContractCreateDto, ContractUpdateDto } from './contract.dto';
export declare class ContractController {
    private eventService;
    private contractDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, contractDomainFacade: ContractDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Contract[]>;
    create(body: ContractCreateDto, request: Request): Promise<Contract>;
    findOne(contractId: string, request: Request): Promise<Contract>;
    update(contractId: string, body: ContractUpdateDto): Promise<Contract>;
    delete(contractId: string): Promise<Contract>;
}
