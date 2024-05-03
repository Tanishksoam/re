"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
const property_controller_1 = require("./property.controller");
const domain_3 = require("../../../modules/user/domain");
const propertyByUser_controller_1 = require("./propertyByUser.controller");
let PropertyApplicationModule = class PropertyApplicationModule {
};
exports.PropertyApplicationModule = PropertyApplicationModule;
exports.PropertyApplicationModule = PropertyApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_1.AuthenticationDomainModule, domain_2.PropertyDomainModule, domain_3.UserDomainModule],
        controllers: [property_controller_1.PropertyController, propertyByUser_controller_1.PropertyByUserController],
        providers: [],
    })
], PropertyApplicationModule);
//# sourceMappingURL=property.application.module.js.map