import { ConfigurationService } from '@server/core/configuration';
import { LoggerService } from '../logger';
import { UploadFileType } from './upload.type';
export declare class UploadService {
    private configurationService;
    private loggerService;
    private instance;
    constructor(configurationService: ConfigurationService, loggerService: LoggerService);
    private isMocked;
    private createInstance;
    uploadPublic(...files: UploadFileType[]): Promise<{
        url: string;
    }[]>;
    uploadPrivate(...files: UploadFileType[]): Promise<{
        url: string;
    }[]>;
}
