import { SocketService } from '@server/libraries/socket';
import { PaymentApplicationEvent } from '@server/modules/payment/application';
import { AuthorizationDomainFacade } from '@server/modules/authorization/domain';
import { NotificationDomainFacade } from '@server/modules/notification/domain';
export declare class NotificationPaymentSubscriber {
    private notificationDomainFacade;
    private authorizationDomainFacade;
    private socketService;
    constructor(notificationDomainFacade: NotificationDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, socketService: SocketService);
    handleCreation(data: PaymentApplicationEvent.PaymentCreated.Payload): Promise<void>;
}
