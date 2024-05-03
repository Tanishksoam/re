import { Property } from '../../../modules/property/domain';
import { User } from '../../../modules/user/domain';
import { Payment } from '../../../modules/payment/domain';
export declare class Contract {
    id: string;
    startDate: string;
    endDate: string;
    terms: string;
    propertyId: string;
    property?: Property;
    tenantId: string;
    tenant?: User;
    landlordId: string;
    landlord?: User;
    payments?: Payment[];
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
