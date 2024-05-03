import { SocketService } from '@server/libraries/socket';
import { FeedbackApplicationEvent } from '@server/modules/feedback/application';
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { NotificationDomainFacade } from '@server/modules/notification/domain';
export declare class NotificationFeedbackSubscriber {
    private notificationDomainFacade;
    private authorizationDomainFacade;
    private socketService;
    constructor(notificationDomainFacade: NotificationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, socketService: SocketService);
    handleCreation(data: FeedbackApplicationEvent.FeedbackCreated.Payload): Promise<void>;
}
