import { SendOptions } from '../providers/provider';
export declare class EmailTemplateService {
    private pathTemplates;
    private mapping;
    get(options: SendOptions): string;
    private getPathTemplate;
    private getPathBase;
    private getPathCSS;
    private buildContent;
    private buildComponents;
}
