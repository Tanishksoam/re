"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const application_1 = require("./authentication/application");
const application_2 = require("./authorization/application");
const application_3 = require("./user/application");
const application_4 = require("./property/application");
const application_5 = require("./image/application");
const application_6 = require("./communication/application");
const application_7 = require("./contract/application");
const application_8 = require("./feedback/application");
const application_9 = require("./payment/application");
const application_10 = require("./maintenance/application");
const ai_application_module_1 = require("./ai/application/ai.application.module");
const notification_application_module_1 = require("./notification/application/notification.application.module");
const upload_application_module_1 = require("./upload/application/upload.application.module");
let AppApplicationModule = class AppApplicationModule {
};
exports.AppApplicationModule = AppApplicationModule;
exports.AppApplicationModule = AppApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            application_1.AuthenticationApplicationModule,
            application_3.UserApplicationModule,
            application_2.AuthorizationApplicationModule,
            notification_application_module_1.NotificationApplicationModule,
            ai_application_module_1.AiApplicationModule,
            upload_application_module_1.UploadApplicationModule,
            application_4.PropertyApplicationModule,
            application_5.ImageApplicationModule,
            application_6.CommunicationApplicationModule,
            application_7.ContractApplicationModule,
            application_8.FeedbackApplicationModule,
            application_9.PaymentApplicationModule,
            application_10.MaintenanceApplicationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppApplicationModule);
//# sourceMappingURL=app.application.module.js.map