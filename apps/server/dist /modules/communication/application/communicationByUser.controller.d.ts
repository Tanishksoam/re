import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { CommunicationDomainFacade } from '@server/modules/communication/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { CommunicationCreateDto } from './communication.dto';
import { UserDomainFacade } from '../../user/domain';
export declare class CommunicationByUserController {
    private userDomainFacade;
    private communicationDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(userDomainFacade: UserDomainFacade, communicationDomainFacade: CommunicationDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManySenderId(senderId: string, request: Request): Promise<import("@server/modules/communication/domain").Communication[]>;
    createBySenderId(senderId: string, body: CommunicationCreateDto, request: Request): Promise<import("@server/modules/communication/domain").Communication>;
    findManyReceiverId(receiverId: string, request: Request): Promise<import("@server/modules/communication/domain").Communication[]>;
    createByReceiverId(receiverId: string, body: CommunicationCreateDto, request: Request): Promise<import("@server/modules/communication/domain").Communication>;
}
