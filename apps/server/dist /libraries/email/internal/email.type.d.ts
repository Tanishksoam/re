export declare enum EmailType {
    DEFAULT = "default",
    AUTHENTICATION_WELCOME = "authentication.welcome.password",
    AUTHENTICATION_FORGOT_PASSWORD = "authentication.forgot.password",
    AUTHORIZATION_VERIFICATION_CODE = "authorization.verification.code"
}
export declare const EmailSender: {
    default: {
        email: string;
        name: string;
    };
};
