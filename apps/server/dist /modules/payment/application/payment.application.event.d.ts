export declare namespace PaymentApplicationEvent {
    namespace PaymentCreated {
        const key = "payment.application.payment.created";
        type Payload = {
            id: string;
            userId: string;
        };
    }
}
