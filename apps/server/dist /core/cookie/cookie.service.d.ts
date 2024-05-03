import { Request, Response } from 'express';
import { ConfigurationService } from '../configuration';
export declare class CookieService {
    private configurationService;
    constructor(configurationService: ConfigurationService);
    getAccessToken(request: Request): string;
    setAccessToken(response: Response, token: string): void;
    deleteAccessToken(response: Response): void;
    private getOptions;
}
