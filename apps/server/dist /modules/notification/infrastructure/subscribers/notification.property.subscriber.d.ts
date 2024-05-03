import { SocketService } from '@server/libraries/socket';
import { PropertyApplicationEvent } from '@server/modules/property/application';
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { NotificationDomainFacade } from '@server/modules/notification/domain';
export declare class NotificationPropertySubscriber {
    private notificationDomainFacade;
    private authorizationDomainFacade;
    private socketService;
    constructor(notificationDomainFacade: NotificationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, socketService: SocketService);
    handleCreation(data: PropertyApplicationEvent.PropertyCreated.Payload): Promise<void>;
}
