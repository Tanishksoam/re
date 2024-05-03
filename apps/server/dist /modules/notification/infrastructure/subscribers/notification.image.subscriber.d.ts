import { SocketService } from '@server/libraries/socket';
import { ImageApplicationEvent } from '@server/modules/image/application';
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { NotificationDomainFacade } from '@server/modules/notification/domain';
export declare class NotificationImageSubscriber {
    private notificationDomainFacade;
    private authorizationDomainFacade;
    private socketService;
    constructor(notificationDomainFacade: NotificationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, socketService: SocketService);
    handleCreation(data: ImageApplicationEvent.ImageCreated.Payload): Promise<void>;
}
