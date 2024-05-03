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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const date_1 = require("../../../helpers/date");
const file_1 = require("../../../helpers/file");
const http_1 = require("../../../libraries/http");
const openai_1 = require("../../../libraries/openai");
const upload_1 = require("../../../libraries/upload");
const ai_application_exception_1 = require("./ai.application.exception");
const ai_dto_1 = require("./ai.dto");
let AiController = class AiController {
    constructor(openaiService, exception, httpService, uploadService) {
        this.openaiService = openaiService;
        this.exception = exception;
        this.httpService = httpService;
        this.uploadService = uploadService;
    }
    async chat(body) {
        const { prompt } = body;
        if (!this.openaiService.isActive()) {
            this.exception.openaiNotActivated();
        }
        try {
            const answer = await this.openaiService.chat(prompt);
            return { answer };
        }
        catch (error) {
            this.exception.openaiError(error);
        }
    }
    async generateImage(body) {
        const { prompt } = body;
        if (!this.openaiService.isActive()) {
            this.exception.openaiNotActivated();
        }
        try {
            const answer = await this.openaiService.generateImage(prompt);
            return { answer };
        }
        catch (error) {
            this.exception.openaiError(error);
        }
    }
    async fromAudioToText(body) {
        const { url } = body;
        if (!this.openaiService.isActive()) {
            this.exception.openaiNotActivated();
        }
        try {
            const arrayBuffer = await this.httpService.download(url);
            const readstream = await file_1.FileHelper.createReadStreamFromArrayBuffer(arrayBuffer, 'audio.wav');
            const answer = await this.openaiService.fromAudioToText(readstream);
            return { answer };
        }
        catch (error) {
            this.exception.openaiError(error);
        }
    }
    async fromTextToAudio(body) {
        const { text } = body;
        if (!this.openaiService.isActive()) {
            this.exception.openaiNotActivated();
        }
        try {
            const buffer = await this.openaiService.fromTextToAudio(text);
            const now = date_1.DateHelper.getNow();
            const filename = `${now.getTime()}.mp3`;
            const file = {
                originalname: filename,
                buffer: buffer,
            };
            const urls = await this.uploadService.uploadPublic(file);
            return { url: urls[0].url };
        }
        catch (error) {
            this.exception.openaiError(error);
        }
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('/chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiChatBody]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "chat", null);
__decorate([
    (0, common_1.Post)('/image'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiGenerateImageBody]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateImage", null);
__decorate([
    (0, common_1.Post)('/audio-to-text'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiFromAudioToTextBody]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "fromAudioToText", null);
__decorate([
    (0, common_1.Post)('/text-to-audio'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ai_dto_1.AiFromTextToAudioBody]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "fromTextToAudio", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('/v1/ai'),
    __metadata("design:paramtypes", [openai_1.OpenaiService,
        ai_application_exception_1.AIApplicationException,
        http_1.HttpService,
        upload_1.UploadService])
], AiController);
//# sourceMappingURL=ai.controller.js.map