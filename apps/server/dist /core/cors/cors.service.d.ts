import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigurationService } from '../configuration';
export declare class CorsService {
    private configurationService;
    constructor(configurationService: ConfigurationService);
    getOptions(): CorsOptions;
}
