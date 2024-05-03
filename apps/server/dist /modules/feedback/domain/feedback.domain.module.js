"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const feedback_domain_facade_1 = require("./feedback.domain.facade");
const feedback_model_1 = require("./feedback.model");
let FeedbackDomainModule = class FeedbackDomainModule {
};
exports.FeedbackDomainModule = FeedbackDomainModule;
exports.FeedbackDomainModule = FeedbackDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([feedback_model_1.Feedback]), database_1.DatabaseHelperModule],
        providers: [feedback_domain_facade_1.FeedbackDomainFacade, feedback_domain_facade_1.FeedbackDomainFacade],
        exports: [feedback_domain_facade_1.FeedbackDomainFacade],
    })
], FeedbackDomainModule);
//# sourceMappingURL=feedback.domain.module.js.map