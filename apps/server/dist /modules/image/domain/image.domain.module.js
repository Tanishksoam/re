"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDomainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../../core/database");
const image_domain_facade_1 = require("./image.domain.facade");
const image_model_1 = require("./image.model");
let ImageDomainModule = class ImageDomainModule {
};
exports.ImageDomainModule = ImageDomainModule;
exports.ImageDomainModule = ImageDomainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([image_model_1.Image]), database_1.DatabaseHelperModule],
        providers: [image_domain_facade_1.ImageDomainFacade, image_domain_facade_1.ImageDomainFacade],
        exports: [image_domain_facade_1.ImageDomainFacade],
    })
], ImageDomainModule);
//# sourceMappingURL=image.domain.module.js.map