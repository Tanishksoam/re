"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSender = exports.EmailType = void 0;
var EmailType;
(function (EmailType) {
    EmailType["DEFAULT"] = "default";
    EmailType["AUTHENTICATION_WELCOME"] = "authentication.welcome.password";
    EmailType["AUTHENTICATION_FORGOT_PASSWORD"] = "authentication.forgot.password";
    EmailType["AUTHORIZATION_VERIFICATION_CODE"] = "authorization.verification.code";
})(EmailType || (exports.EmailType = EmailType = {}));
exports.EmailSender = {
    default: {
        email: 'no-reply@marblism.com',
        name: 'Marblism',
    },
};
//# sourceMappingURL=email.type.js.map