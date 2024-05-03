import { WinstonLogger } from './internal/winston.service';
type ConstructorOptions = {
    instance: WinstonLogger;
    name?: string;
};
export declare class Logger {
    private instance;
    private name;
    constructor(options: ConstructorOptions);
    log(message: string, data?: Record<string, any>): void;
    warning(message: string): void;
    success(message: string): void;
    error(error: Error | string): void;
    private buildMessage;
}
export {};
