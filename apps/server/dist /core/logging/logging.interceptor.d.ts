import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private loggingService;
    constructor(loggingService: LoggingService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
