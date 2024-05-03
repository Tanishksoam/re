import { Property } from '../../../modules/property/domain';
export declare class Maintenance {
    id: string;
    issueDescription: string;
    status: string;
    propertyId: string;
    property?: Property;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
