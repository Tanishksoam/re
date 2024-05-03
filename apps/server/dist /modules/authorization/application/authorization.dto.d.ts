export declare class AuthorizationCreateCodeDto {
    email: string;
}
export declare class AuthorizationVerifyCodeDto {
    email: string;
    keyPrivate: string;
    keyPublic: string;
}
