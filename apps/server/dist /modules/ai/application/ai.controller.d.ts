import { HttpService } from '@server/libraries/http';
import { OpenaiService } from '@server/libraries/openai';
import { UploadService } from '@server/libraries/upload';
import { AIApplicationException } from './ai.application.exception';
import { AiChatBody, AiFromAudioToTextBody, AiFromTextToAudioBody, AiGenerateImageBody } from './ai.dto';
export declare class AiController {
    private openaiService;
    private exception;
    private httpService;
    private uploadService;
    constructor(openaiService: OpenaiService, exception: AIApplicationException, httpService: HttpService, uploadService: UploadService);
    chat(body: AiChatBody): Promise<{
        answer: string;
    }>;
    generateImage(body: AiGenerateImageBody): Promise<{
        answer: string;
    }>;
    fromAudioToText(body: AiFromAudioToTextBody): Promise<{
        answer: string;
    }>;
    fromTextToAudio(body: AiFromTextToAudioBody): Promise<{
        url: string;
    }>;
}
