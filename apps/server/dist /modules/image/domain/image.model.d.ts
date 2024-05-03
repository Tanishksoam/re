import { Property } from '../../../modules/property/domain';
export declare class Image {
    id: string;
    imageUrl: string;
    propertyId: string;
    property?: Property;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
