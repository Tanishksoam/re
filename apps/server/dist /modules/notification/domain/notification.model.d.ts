import { User } from '@server/modules/user/domain';
export declare class Notification {
    id: string;
    title: string;
    message: string;
    senderName?: string;
    senderEmail?: string;
    senderPictureUrl?: string;
    redirectUrl?: string;
    userId: string;
    user?: User;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
