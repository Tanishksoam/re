import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Feedback, FeedbackDomainFacade } from '@server/modules/feedback/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { FeedbackCreateDto, FeedbackUpdateDto } from './feedback.dto';
export declare class FeedbackController {
    private eventService;
    private feedbackDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, feedbackDomainFacade: FeedbackDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Feedback[]>;
    create(body: FeedbackCreateDto, request: Request): Promise<Feedback>;
    findOne(feedbackId: string, request: Request): Promise<Feedback>;
    update(feedbackId: string, body: FeedbackUpdateDto): Promise<Feedback>;
    delete(feedbackId: string): Promise<Feedback>;
}
