import { ConfigurationService } from '@server/core/configuration';
import { LoggerService } from '../logger';
import { EmailType } from './internal/email.type';
import { MailjetProvider } from './internal/providers/mailjet/mailjet.provider';
import { NodemailerProvider } from './internal/providers/nodemailer/nodemailer.provider';
type SendOptions = {
    name: string;
    email: string;
    subject: string;
    type: EmailType;
    content?: string;
    variables: Record<string, string>;
};
export declare class EmailService {
    private loggerService;
    private configurationService;
    private nodemailerProvider;
    private mailjetProvider;
    private logger;
    private provider;
    Type: typeof EmailType;
    constructor(loggerService: LoggerService, configurationService: ConfigurationService, nodemailerProvider: NodemailerProvider, mailjetProvider: MailjetProvider);
    send(options: SendOptions): Promise<void>;
}
export {};
