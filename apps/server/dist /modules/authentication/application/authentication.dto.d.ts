export declare class AuthenticationLoginDto {
    email: string;
    password: string;
}
export declare class AuthenticationRegisterDto {
    email: string;
    name: string;
    password: string;
}
export declare class AuthenticationResetPasswordDto {
    token: string;
    password: string;
}
export declare class AuthenticationSendEmailResetPasswordDto {
    email: string;
}
export declare class GoogleByAuthenticationCallbackDto {
    token: string;
}
