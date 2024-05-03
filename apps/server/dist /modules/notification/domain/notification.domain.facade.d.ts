import { User } from '@server/modules/user/domain';
import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Notification } from './notification.model';
export declare class NotificationDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Notification>, databaseHelper: DatabaseHelper);
    create(values: Partial<Notification>): Promise<Notification>;
    update(notification: Notification, values: Partial<Notification>): Promise<Notification>;
    delete(notification: Notification): Promise<void>;
    deleteMany(notifications: Notification[]): Promise<void>;
    findManyByUser(user: User, queryOptions?: RequestHelper.QueryOptions<Notification>): Promise<Notification[]>;
    findOneByIdAndUserOrFail(notificationId: string, user: User): Promise<Notification>;
}
