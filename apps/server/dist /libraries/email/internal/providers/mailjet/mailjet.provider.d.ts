import { ConfigurationService } from '@server/core/configuration';
import { LoggerService } from '@server/libraries/logger';
import { EmailTemplateService } from '../../templates/email.template.service';
import { Provider, SendOptions } from '../provider';
export declare class MailjetProvider implements Provider {
    private configurationService;
    private loggerService;
    private templateService;
    private logger;
    private client;
    private templateIds;
    constructor(configurationService: ConfigurationService, loggerService: LoggerService, templateService: EmailTemplateService);
    private initialise;
    send(options: SendOptions): Promise<void>;
    private buildMessage;
}
