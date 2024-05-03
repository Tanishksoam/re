import { User } from '@server/modules/user/domain';
export declare enum AuthorizationCodeType {
    USER_VERIFICATION = "user.verification"
}
export declare enum AuthorizationCodeStatus {
    ACTIVE = "ACTIVE",
    USED = "USED",
    EXPIRED = "EXPIRED"
}
export declare class AuthorizationCode {
    id: string;
    keyPublic: string;
    keyPrivate: string;
    durationMinutes: number;
    type: AuthorizationCodeType;
    status: AuthorizationCodeStatus;
    dateCreated: string;
    dateDeleted: string;
    userId: string;
    user?: User;
}
