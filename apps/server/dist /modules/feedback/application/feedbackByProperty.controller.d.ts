import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { FeedbackDomainFacade } from '@server/modules/feedback/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { FeedbackCreateDto } from './feedback.dto';
import { PropertyDomainFacade } from '../../property/domain';
export declare class FeedbackByPropertyController {
    private propertyDomainFacade;
    private feedbackDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(propertyDomainFacade: PropertyDomainFacade, feedbackDomainFacade: FeedbackDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyPropertyId(propertyId: string, request: Request): Promise<import("@server/modules/feedback/domain").Feedback[]>;
    createByPropertyId(propertyId: string, body: FeedbackCreateDto, request: Request): Promise<import("@server/modules/feedback/domain").Feedback>;
}
