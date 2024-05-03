import { Property } from '../../../modules/property/domain';
import { User } from '../../../modules/user/domain';
export declare class Feedback {
    id: string;
    rating: number;
    comment?: string;
    propertyId: string;
    property?: Property;
    userId: string;
    user?: User;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
