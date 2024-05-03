import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Communication, CommunicationDomainFacade } from '@server/modules/communication/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { CommunicationCreateDto, CommunicationUpdateDto } from './communication.dto';
export declare class CommunicationController {
    private eventService;
    private communicationDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, communicationDomainFacade: CommunicationDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Communication[]>;
    create(body: CommunicationCreateDto, request: Request): Promise<Communication>;
    findOne(communicationId: string, request: Request): Promise<Communication>;
    update(communicationId: string, body: CommunicationUpdateDto): Promise<Communication>;
    delete(communicationId: string): Promise<Communication>;
}
