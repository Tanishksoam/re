import { ExceptionService } from '@server/core/exception';
export declare class UserException {
    private service;
    constructor(service: ExceptionService);
    notFoundById(id: string): never;
    notFoundByEmail(email: string): never;
}
