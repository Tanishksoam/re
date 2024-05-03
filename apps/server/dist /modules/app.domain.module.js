"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDomainModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("./authentication/domain");
const domain_2 = require("./authorization/domain");
const domain_3 = require("./user/domain");
const domain_4 = require("./notification/domain");
const domain_5 = require("./property/domain");
const domain_6 = require("./image/domain");
const domain_7 = require("./communication/domain");
const domain_8 = require("./contract/domain");
const domain_9 = require("./feedback/domain");
const domain_10 = require("./payment/domain");
const domain_11 = require("./maintenance/domain");
let AppDomainModule = class AppDomainModule {
};
exports.AppDomainModule = AppDomainModule;
exports.AppDomainModule = AppDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_1.AuthenticationDomainModule,
            domain_2.AuthorizationDomainModule,
            domain_3.UserDomainModule,
            domain_4.NotificationDomainModule,
            domain_5.PropertyDomainModule,
            domain_6.ImageDomainModule,
            domain_7.CommunicationDomainModule,
            domain_8.ContractDomainModule,
            domain_9.FeedbackDomainModule,
            domain_10.PaymentDomainModule,
            domain_11.MaintenanceDomainModule,
        ],
        controllers: [],
        providers: [],
    })
], AppDomainModule);
//# sourceMappingURL=app.domain.module.js.map