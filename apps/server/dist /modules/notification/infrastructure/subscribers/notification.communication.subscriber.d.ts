import { SocketService } from '@server/libraries/socket';
import { CommunicationApplicationEvent } from '@server/modules/communication/application';
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { NotificationDomainFacade } from '@server/modules/notification/domain';
export declare class NotificationCommunicationSubscriber {
    private notificationDomainFacade;
    private authorizationDomainFacade;
    private socketService;
    constructor(notificationDomainFacade: NotificationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, socketService: SocketService);
    handleCreation(data: CommunicationApplicationEvent.CommunicationCreated.Payload): Promise<void>;
}
