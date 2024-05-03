export declare class PaymentCreateDto {
    amount: number;
    paymentDate: string;
    status: string;
    contractId?: string;
    dateCreated?: string;
    dateDeleted?: string;
    dateUpdated?: string;
}
export declare class PaymentUpdateDto {
    amount?: number;
    paymentDate?: string;
    status?: string;
    contractId?: string;
    dateCreated?: string;
    dateDeleted?: string;
    dateUpdated?: string;
}
