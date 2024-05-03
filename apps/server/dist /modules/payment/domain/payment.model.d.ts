import { Contract } from '../../../modules/contract/domain';
export declare class Payment {
    id: string;
    amount: number;
    paymentDate: string;
    status: string;
    contractId: string;
    contract?: Contract;
    dateCreated: string;
    dateUpdated: string;
    dateDeleted: string;
}
