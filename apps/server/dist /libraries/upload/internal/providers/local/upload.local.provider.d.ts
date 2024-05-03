import { ConfigurationService } from '@server/core/configuration';
import { UploadPrivateOptions, UploadPrivateReturn, UploadProvider, UploadPublicOptions, UploadPublicReturn } from '@server/libraries/upload/upload.provider';
import { LoggerService } from '../../../../logger';
export declare class UploadLocalProvider implements UploadProvider {
    private loggerService;
    private configurationService;
    static path: string;
    private logger;
    private staticServerUrl;
    private PATH_LOCAL_PUBLIC;
    private PATH_LOCAL_PRIVATE;
    constructor(loggerService: LoggerService, configurationService: ConfigurationService);
    private initialise;
    uploadPublic({ file, }: UploadPublicOptions): Promise<UploadPublicReturn>;
    uploadPrivate({ file, }: UploadPrivateOptions): Promise<UploadPrivateReturn>;
}
