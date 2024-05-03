import { UploadFileType, UploadService } from '@server/libraries/upload';
export declare class UploadController {
    private uploadService;
    constructor(uploadService: UploadService);
    upload(file: UploadFileType): Promise<{
        url: string;
    }>;
}
