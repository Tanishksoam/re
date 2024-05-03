"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const feedback_controller_1 = require("./feedback.controller");
const domain_3 = require("../../../modules/property/domain");
const feedbackByProperty_controller_1 = require("./feedbackByProperty.controller");
const domain_4 = require("../../../modules/user/domain");
const feedbackByUser_controller_1 = require("./feedbackByUser.controller");
let FeedbackApplicationModule = class FeedbackApplicationModule {
};
exports.FeedbackApplicationModule = FeedbackApplicationModule;
exports.FeedbackApplicationModule = FeedbackApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_1.AuthenticationDomainModule,
            domain_2.FeedbackDomainModule,
            domain_3.PropertyDomainModule,
            domain_4.UserDomainModule,
        ],
        controllers: [
            feedback_controller_1.FeedbackController,
            feedbackByProperty_controller_1.FeedbackByPropertyController,
            feedbackByUser_controller_1.FeedbackByUserController,
        ],
        providers: [],
    })
], FeedbackApplicationModule);
//# sourceMappingURL=feedback.application.module.js.map