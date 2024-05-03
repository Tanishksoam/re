"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const maintenance_domain_facade_1 = require("./maintenance.domain.facade");
const maintenance_model_1 = require("./maintenance.model");
let MaintenanceDomainModule = class MaintenanceDomainModule {
};
exports.MaintenanceDomainModule = MaintenanceDomainModule;
exports.MaintenanceDomainModule = MaintenanceDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([maintenance_model_1.Maintenance]), database_1.DatabaseHelperModule],
        providers: [maintenance_domain_facade_1.MaintenanceDomainFacade, maintenance_domain_facade_1.MaintenanceDomainFacade],
        exports: [maintenance_domain_facade_1.MaintenanceDomainFacade],
    })
], MaintenanceDomainModule);
//# sourceMappingURL=maintenance.domain.module.js.map