export declare namespace AuthorizationDomainEvent {
    namespace CodeCreated {
        const key = "authorization-code.domain.created";
        type Payload = {
            authorizationCodeId: string;
        };
    }
}
