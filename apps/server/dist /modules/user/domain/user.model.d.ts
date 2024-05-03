import { Notification } from '../../../modules/notification/domain';
import { Property } from '../../../modules/property/domain';
import { Communication } from '../../../modules/communication/domain';
import { Contract } from '../../../modules/contract/domain';
import { Feedback } from '../../../modules/feedback/domain';
export declare enum UserStatus {
    VERIFIED = "VERIFIED",
    CREATED = "CREATED"
}
export declare class User {
    id: string;
    email: string;
    name: string;
    pictureUrl?: string;
    password: string;
    status: UserStatus;
    propertys?: Property[];
    communicationsAsSender?: Communication[];
    communicationsAsReceiver?: Communication[];
    contractsAsTenant?: Contract[];
    contractsAsLandlord?: Contract[];
    feedbacks?: Feedback[];
    notifications?: Notification[];
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
