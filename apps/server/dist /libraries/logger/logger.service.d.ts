import { WinstonService } from './internal/winston.service';
import { Logger } from './logger';
type CreateOptions = {
    name?: string;
};
export declare class LoggerService {
    private winstonService;
    private instance;
    constructor(winstonService: WinstonService);
    create(options?: CreateOptions): Logger;
    log(message: string, data?: Record<string, any>): void;
    success(message: string): void;
    error(error: Error | string): void;
}
export {};
