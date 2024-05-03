export declare namespace AuthenticationApplicationEvent {
    namespace UserPasswordResetRequested {
        const key = "authentication.application.user-password-reset-requested";
        type Payload = {
            userId: string;
        };
    }
    namespace UserRegistered {
        const key = "authentication.application.user-registered";
        type Payload = {
            userId: string;
        };
    }
}
