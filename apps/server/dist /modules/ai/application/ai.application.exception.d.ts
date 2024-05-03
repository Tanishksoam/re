import { ExceptionService } from '@server/core/exception';
export declare class AIApplicationException {
    private service;
    constructor(service: ExceptionService);
    openaiNotActivated(): never;
    openaiError(error: Error): never;
}
