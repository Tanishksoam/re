import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { PaymentDomainFacade } from '@server/modules/payment/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { PaymentCreateDto } from './payment.dto';
import { ContractDomainFacade } from '../../contract/domain';
export declare class PaymentByContractController {
    private contractDomainFacade;
    private paymentDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(contractDomainFacade: ContractDomainFacade, paymentDomainFacade: PaymentDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyContractId(contractId: string, request: Request): Promise<import("@server/modules/payment/domain").Payment[]>;
    createByContractId(contractId: string, body: PaymentCreateDto, request: Request): Promise<import("@server/modules/payment/domain").Payment>;
}
