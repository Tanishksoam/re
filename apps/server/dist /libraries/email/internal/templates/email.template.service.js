"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateService = void 0;
const common_1 = require("@nestjs/common");
const file_1 = require("../../../../helpers/file");
const email_type_1 = require("../email.type");
const components_1 = require("./components");
let EmailTemplateService = class EmailTemplateService {
    constructor() {
        this.pathTemplates = `${file_1.FileHelper.getRoot()}/src/libraries/email/internal/templates`;
        this.mapping = {
            [email_type_1.EmailType.AUTHORIZATION_VERIFICATION_CODE]: 'authorization-verification-code',
            [email_type_1.EmailType.AUTHENTICATION_WELCOME]: 'authentication-welcome',
            [email_type_1.EmailType.AUTHENTICATION_FORGOT_PASSWORD]: 'authentication-forgot-password',
            [email_type_1.EmailType.DEFAULT]: 'default',
        };
    }
    get(options) {
        var _a;
        const values = (_a = options.variables) !== null && _a !== void 0 ? _a : { content: options.content };
        const pathBase = this.getPathBase();
        const pathCSS = this.getPathCSS();
        const pathTemplate = this.getPathTemplate(options.type);
        const contentBase = file_1.FileHelper.findFileContent(pathBase);
        const contentCSS = file_1.FileHelper.findFileContent(pathCSS);
        const contentTemplate = file_1.FileHelper.findFileContent(pathTemplate);
        let content = this.buildContent(contentTemplate, values);
        content = this.buildContent(contentBase, { style: contentCSS, content });
        content = this.buildComponents(content);
        return content;
    }
    getPathTemplate(type) {
        var _a;
        const name = (_a = this.mapping[type]) !== null && _a !== void 0 ? _a : this.mapping[email_type_1.EmailType.DEFAULT];
        const path = `${this.pathTemplates}/${name}.template.html`;
        return path;
    }
    getPathBase() {
        const path = `${this.pathTemplates}/base.html`;
        return path;
    }
    getPathCSS() {
        const path = `${this.pathTemplates}/style.css`;
        return path;
    }
    buildContent(content, values) {
        let contentBuilt = content;
        for (const [key, value] of Object.entries(values)) {
            const token = new RegExp(`\{\{ ${key} \}\}`, 'g');
            contentBuilt = contentBuilt.replace(token, value);
        }
        return contentBuilt;
    }
    buildComponents(content) {
        let contentUpdated = content;
        for (const [key, value] of Object.entries(components_1.Components)) {
            const tag = new RegExp(`${key}`, 'g');
            contentUpdated = contentUpdated.replace(tag, value);
        }
        return contentUpdated;
    }
};
exports.EmailTemplateService = EmailTemplateService;
exports.EmailTemplateService = EmailTemplateService = __decorate([
    (0, common_1.Injectable)()
], EmailTemplateService);
//# sourceMappingURL=email.template.service.js.map