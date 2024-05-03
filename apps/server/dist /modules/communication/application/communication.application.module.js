"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const communication_controller_1 = require("./communication.controller");
const domain_3 = require("../../../modules/user/domain");
const communicationByUser_controller_1 = require("./communicationByUser.controller");
let CommunicationApplicationModule = class CommunicationApplicationModule {
};
exports.CommunicationApplicationModule = CommunicationApplicationModule;
exports.CommunicationApplicationModule = CommunicationApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_1.AuthenticationDomainModule,
            domain_2.CommunicationDomainModule,
            domain_3.UserDomainModule,
        ],
        controllers: [communication_controller_1.CommunicationController, communicationByUser_controller_1.CommunicationByUserController],
        providers: [],
    })
], CommunicationApplicationModule);
//# sourceMappingURL=communication.application.module.js.map