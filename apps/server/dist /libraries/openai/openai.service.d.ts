/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'fs';
import { Openai } from './internal/openai';
export declare class OpenaiService {
    private openai;
    constructor(openai: Openai);
    chat(prompt: string): Promise<string>;
    generateImage(prompt: string): Promise<string>;
    fromAudioToText(readStream: ReadStream): Promise<string>;
    fromTextToAudio(text: string): Promise<Buffer>;
    isActive(): boolean;
}
