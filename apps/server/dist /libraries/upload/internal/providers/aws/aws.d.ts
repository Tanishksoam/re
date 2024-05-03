import { ConfigurationService } from '@server/core/configuration';
import { UploadProvider, UploadPublicOptions, UploadPublicReturn } from '@server/libraries/upload/upload.provider';
import { LoggerService } from '../../../../logger';
export declare class UploadAWS implements UploadProvider {
    private loggerService;
    private configurationService;
    private logger;
    private client;
    private bucketPublicName;
    constructor(loggerService: LoggerService, configurationService: ConfigurationService);
    private initialise;
    private check;
    private getBucketName;
    private listBuckets;
    uploadPublic(options: UploadPublicOptions): Promise<UploadPublicReturn>;
    uploadPrivate(options: UploadPublicOptions): Promise<UploadPublicReturn>;
    private ensureKey;
}
