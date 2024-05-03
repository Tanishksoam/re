"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const notification_domain_facade_1 = require("./notification.domain.facade");
const notification_model_1 = require("./notification.model");
let NotificationDomainModule = class NotificationDomainModule {
};
exports.NotificationDomainModule = NotificationDomainModule;
exports.NotificationDomainModule = NotificationDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_model_1.Notification]), database_1.DatabaseHelperModule],
        providers: [notification_domain_facade_1.NotificationDomainFacade, notification_domain_facade_1.NotificationDomainFacade],
        exports: [notification_domain_facade_1.NotificationDomainFacade],
    })
], NotificationDomainModule);
//# sourceMappingURL=notification.domain.module.js.map