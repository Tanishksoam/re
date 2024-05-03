/// <reference types="node" />
/// <reference types="node" />
import { ConfigurationService } from '@server/core/configuration';
import { LoggerService } from '@server/libraries/logger';
import { ReadStream } from 'fs';
export declare class Openai {
    private configurationService;
    private loggerService;
    private api;
    private logger;
    constructor(configurationService: ConfigurationService, loggerService: LoggerService);
    private initialize;
    isActive(): boolean;
    chat(prompt: string): Promise<string>;
    generateImage(prompt: string): Promise<string>;
    fromAudioToText(readStream: ReadStream): Promise<string>;
    fromTextToAudio(text: string): Promise<Buffer>;
    private buildMessages;
    private parseResponseContent;
    private parseResponseImage;
}
