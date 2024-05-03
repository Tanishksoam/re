import { Request } from 'express';
export declare namespace RequestHelper {
    function getPath(request: Request): string;
    function getMethod(request: Request): string;
    function getBody(request: Request): any;
    type FilterCondition = {
        eq?: number;
        neq?: number;
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
        in?: any[];
        nin?: any[];
        like?: string;
        ilike?: string;
    };
    type QueryOptions<Model = any> = {
        filters?: Partial<Record<keyof Model, any | any[] | FilterCondition>>;
        orders?: Partial<Record<keyof Model, 'ASC' | 'DESC'>>;
        includes?: string[];
    };
    function getQueryOptions(request: Request): QueryOptions;
    function getAuthorization(request: Request): string;
}
