import { AccessControlGuard } from './guards/accessControl.guard';
export declare class AccessControlModule {
    static getGuards(): {
        provide: string;
        useClass: typeof AccessControlGuard;
    }[];
}
