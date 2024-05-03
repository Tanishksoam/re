"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Openai = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../../core/configuration");
const logger_1 = require("../../logger");
const openai_1 = require("openai");
var OpenaiModel;
(function (OpenaiModel) {
    OpenaiModel["DEFAULT"] = "gpt-3.5-turbo-16k";
    OpenaiModel["IMAGE"] = "dall-e-3";
    OpenaiModel["AUDIO_TO_TEXT"] = "whisper-1";
    OpenaiModel["TEXT_TO_AUDIO"] = "tts-1";
})(OpenaiModel || (OpenaiModel = {}));
let Openai = class Openai {
    constructor(configurationService, loggerService) {
        this.configurationService = configurationService;
        this.loggerService = loggerService;
        this.logger = this.loggerService.create({ name: 'Openai' });
        this.initialize();
    }
    initialize() {
        try {
            const apiKey = this.configurationService.get('SERVER_OPENAI_API_KEY');
            if (!apiKey) {
                this.logger.warning(`Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI`);
                return;
            }
            this.api = new openai_1.default({ apiKey });
            this.logger.success(`Openai is active`);
        }
        catch (error) {
            this.logger.error(`Openai failed to start`);
        }
    }
    isActive() {
        if (this.api) {
            return true;
        }
        else {
            return false;
        }
    }
    async chat(prompt) {
        const messages = this.buildMessages(prompt);
        const response = await this.api.chat.completions.create({
            model: OpenaiModel.DEFAULT,
            messages,
        });
        const content = this.parseResponseContent(response);
        return content;
    }
    async generateImage(prompt) {
        const response = await this.api.images.generate({
            model: OpenaiModel.IMAGE,
            prompt: prompt,
        });
        const imageUrl = this.parseResponseImage(response);
        return imageUrl;
    }
    async fromAudioToText(readStream) {
        const transcription = await this.api.audio.transcriptions.create({
            file: readStream,
            model: OpenaiModel.AUDIO_TO_TEXT,
        });
        return transcription.text;
    }
    async fromTextToAudio(text) {
        const mp3 = await this.api.audio.speech.create({
            model: OpenaiModel.TEXT_TO_AUDIO,
            voice: 'alloy',
            input: text,
        });
        const buffer = Buffer.from(await mp3.arrayBuffer());
        return buffer;
    }
    buildMessages(content) {
        return [
            {
                role: 'user',
                content,
            },
        ];
    }
    parseResponseContent(response) {
        return response.choices[0].message.content;
    }
    parseResponseImage(response) {
        return response.data[0].url;
    }
};
exports.Openai = Openai;
exports.Openai = Openai = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService,
        logger_1.LoggerService])
], Openai);
//# sourceMappingURL=openai.js.map