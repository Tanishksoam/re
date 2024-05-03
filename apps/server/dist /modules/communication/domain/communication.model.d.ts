import { User } from '../../../modules/user/domain';
export declare class Communication {
    id: string;
    message: string;
    timestamp: string;
    senderId: string;
    sender?: User;
    receiverId: string;
    receiver?: User;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
