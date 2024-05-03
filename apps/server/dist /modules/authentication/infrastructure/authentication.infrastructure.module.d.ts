import { AuthenticationGuard } from './guards/authentication.guard';
export declare class AuthenticationInfrastructureModule {
    static getGuards(): {
        provide: string;
        useClass: typeof AuthenticationGuard;
    }[];
}
