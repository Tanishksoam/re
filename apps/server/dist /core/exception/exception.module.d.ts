import { ExceptionFilter } from './exception.filter';
export declare class ExceptionModule {
    static getFilters(): {
        provide: string;
        useClass: typeof ExceptionFilter;
    }[];
}
