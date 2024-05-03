"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const property_domain_facade_1 = require("./property.domain.facade");
const property_model_1 = require("./property.model");
let PropertyDomainModule = class PropertyDomainModule {
};
exports.PropertyDomainModule = PropertyDomainModule;
exports.PropertyDomainModule = PropertyDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([property_model_1.Property]), database_1.DatabaseHelperModule],
        providers: [property_domain_facade_1.PropertyDomainFacade, property_domain_facade_1.PropertyDomainFacade],
        exports: [property_domain_facade_1.PropertyDomainFacade],
    })
], PropertyDomainModule);
//# sourceMappingURL=property.domain.module.js.map