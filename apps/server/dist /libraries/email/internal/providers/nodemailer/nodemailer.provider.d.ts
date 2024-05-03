import { ConfigurationService } from '../../../../../core/configuration';
import { LoggerService } from '../../../../logger';
import { EmailTemplateService } from '../../templates/email.template.service';
import { Provider, SendOptions } from '../provider';
export declare class NodemailerProvider implements Provider {
    private loggerService;
    private configurationService;
    private templateService;
    private logger;
    private client;
    constructor(loggerService: LoggerService, configurationService: ConfigurationService, templateService: EmailTemplateService);
    private initialise;
    send(options: SendOptions): Promise<void>;
}
