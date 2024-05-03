"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const maintenance_controller_1 = require("./maintenance.controller");
const domain_3 = require("../../../modules/property/domain");
const maintenanceByProperty_controller_1 = require("./maintenanceByProperty.controller");
let MaintenanceApplicationModule = class MaintenanceApplicationModule {
};
exports.MaintenanceApplicationModule = MaintenanceApplicationModule;
exports.MaintenanceApplicationModule = MaintenanceApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_1.AuthenticationDomainModule,
            domain_2.MaintenanceDomainModule,
            domain_3.PropertyDomainModule,
        ],
        controllers: [maintenance_controller_1.MaintenanceController, maintenanceByProperty_controller_1.MaintenanceByPropertyController],
        providers: [],
    })
], MaintenanceApplicationModule);
//# sourceMappingURL=maintenance.application.module.js.map