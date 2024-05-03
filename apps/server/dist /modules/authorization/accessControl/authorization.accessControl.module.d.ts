export declare class AuthorizationAccessControlModule {
    static getGuards(): {
        provide: string;
        useClass: typeof import("../../../core/accessControl/guards/accessControl.guard").AccessControlGuard;
    }[];
}
