import { HttpException, HttpStatus } from '@nestjs/common';
export interface IException {
    status: HttpStatus;
    code: number;
    message?: string;
}
export declare class Exception extends HttpException {
    constructor(options: IException);
}
