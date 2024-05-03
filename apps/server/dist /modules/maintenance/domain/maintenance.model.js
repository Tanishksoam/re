"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maintenance = void 0;
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/property/domain");
let Maintenance = class Maintenance {
};
exports.Maintenance = Maintenance;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Maintenance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Maintenance.prototype, "issueDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Maintenance.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Maintenance.prototype, "propertyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.Property, parent => parent.maintenances),
    (0, typeorm_1.JoinColumn)({ name: 'propertyId' }),
    __metadata("design:type", domain_1.Property)
], Maintenance.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Maintenance.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Maintenance.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], Maintenance.prototype, "dateDeleted", void 0);
exports.Maintenance = Maintenance = __decorate([
    (0, typeorm_1.Entity)()
], Maintenance);
//# sourceMappingURL=maintenance.model.js.map