import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Payment, PaymentDomainFacade } from '@server/modules/payment/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { PaymentCreateDto, PaymentUpdateDto } from './payment.dto';
export declare class PaymentController {
    private eventService;
    private paymentDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, paymentDomainFacade: PaymentDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Payment[]>;
    create(body: PaymentCreateDto, request: Request): Promise<Payment>;
    findOne(paymentId: string, request: Request): Promise<Payment>;
    update(paymentId: string, body: PaymentUpdateDto): Promise<Payment>;
    delete(paymentId: string): Promise<Payment>;
}
