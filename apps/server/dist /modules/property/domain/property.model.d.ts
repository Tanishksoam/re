import { User } from '../../../modules/user/domain';
import { Image } from '../../../modules/image/domain';
import { Contract } from '../../../modules/contract/domain';
import { Feedback } from '../../../modules/feedback/domain';
import { Maintenance } from '../../../modules/maintenance/domain';
export declare class Property {
    id: string;
    title: string;
    description?: string;
    address: string;
    price: number;
    userId: string;
    user?: User;
    images?: Image[];
    contracts?: Contract[];
    feedbacks?: Feedback[];
    maintenances?: Maintenance[];
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
