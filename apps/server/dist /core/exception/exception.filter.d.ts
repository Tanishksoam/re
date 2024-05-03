import { ArgumentsHost, HttpException, ExceptionFilter as NestExceptionFilter } from '@nestjs/common';
import { ExceptionService } from './exception.service';
export declare class ExceptionFilter implements NestExceptionFilter {
    private exceptionService;
    constructor(exceptionService: ExceptionService);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
