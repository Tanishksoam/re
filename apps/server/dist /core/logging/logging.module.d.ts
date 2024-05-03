import { LoggingInterceptor } from './logging.interceptor';
export declare class LoggingModule {
    static getInterceptors(): {
        provide: string;
        useClass: typeof LoggingInterceptor;
    }[];
}
