import { ConfigService } from '@nestjs/config';
import { ConfigurationServiceObject } from './configuration.service.object';
export declare class ConfigurationService {
    private manager;
    constructor(manager: ConfigService);
    get(key: string, valueDefault?: string): string;
    getPort(): number;
    getNumber(key: string, valueDefault?: number): number;
    getBoolean(key: string, valueDefault?: boolean): boolean;
    getEnvironment(): ConfigurationServiceObject.Environment;
    getAuthenticationTokenMethod(): ConfigurationServiceObject.AuthenticationTokenMethod;
    getClientBaseUrl(): string;
    getBaseUrl(): string;
    isEnvironmentDevelopment(): boolean;
    isEnvironmentProduction(): boolean;
}
