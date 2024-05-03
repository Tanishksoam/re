import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { FeedbackDomainFacade } from '@server/modules/feedback/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { FeedbackCreateDto } from './feedback.dto';
import { UserDomainFacade } from '../../user/domain';
export declare class FeedbackByUserController {
    private userDomainFacade;
    private feedbackDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(userDomainFacade: UserDomainFacade, feedbackDomainFacade: FeedbackDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyUserId(userId: string, request: Request): Promise<import("@server/modules/feedback/domain").Feedback[]>;
    createByUserId(userId: string, body: FeedbackCreateDto, request: Request): Promise<import("@server/modules/feedback/domain").Feedback>;
}
