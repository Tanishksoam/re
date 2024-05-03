import { Request } from 'express';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { NotificationDomainFacade } from '../domain';
export declare class NotificationByMeController {
    private notificationDomainFacade;
    private authenticationDomainFacade;
    constructor(notificationDomainFacade: NotificationDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyByMe(request: Request): Promise<import("../domain").Notification[]>;
    deleteOne(request: Request, notificationId: string): Promise<{}>;
    deleteAll(request: Request): Promise<{}>;
}
