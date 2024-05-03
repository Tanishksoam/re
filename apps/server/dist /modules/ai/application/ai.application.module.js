"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../../../libraries/http");
const openai_module_1 = require("../../../libraries/openai/openai.module");
const upload_1 = require("../../../libraries/upload");
const ai_application_exception_1 = require("./ai.application.exception");
const ai_controller_1 = require("./ai.controller");
let AiApplicationModule = class AiApplicationModule {
};
exports.AiApplicationModule = AiApplicationModule;
exports.AiApplicationModule = AiApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [openai_module_1.OpenaiModule, http_1.HttpModule, upload_1.UploadModule],
        controllers: [ai_controller_1.AiController],
        providers: [ai_application_exception_1.AIApplicationException],
    })
], AiApplicationModule);
//# sourceMappingURL=ai.application.module.js.map