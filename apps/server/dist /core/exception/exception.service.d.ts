import { HttpStatus } from '@nestjs/common';
import { LoggerService } from '@server/libraries/logger';
import { Exception } from './exception';
export interface IException {
    status: HttpStatus;
    code: number;
    publicMessage: string;
    privateMessage?: string;
    cause?: any;
}
export declare class ExceptionService {
    private loggerService;
    private logger;
    constructor(loggerService: LoggerService);
    throw(payload: IException): never;
    isCustom(exception: Exception): boolean;
    getPayload(exception: Exception): {
        code: number;
        message: string;
    };
}
