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
exports.Contract = void 0;
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/property/domain");
const domain_2 = require("../../../modules/user/domain");
const domain_3 = require("../../../modules/payment/domain");
let Contract = class Contract {
};
exports.Contract = Contract;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Contract.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "propertyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.Property, parent => parent.contracts),
    (0, typeorm_1.JoinColumn)({ name: 'propertyId' }),
    __metadata("design:type", domain_1.Property)
], Contract.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "tenantId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_2.User, parent => parent.contractsAsTenant),
    (0, typeorm_1.JoinColumn)({ name: 'tenantId' }),
    __metadata("design:type", domain_2.User)
], Contract.prototype, "tenant", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Contract.prototype, "landlordId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_2.User, parent => parent.contractsAsLandlord),
    (0, typeorm_1.JoinColumn)({ name: 'landlordId' }),
    __metadata("design:type", domain_2.User)
], Contract.prototype, "landlord", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_3.Payment, child => child.contract),
    __metadata("design:type", Array)
], Contract.prototype, "payments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Contract.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Contract.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], Contract.prototype, "dateDeleted", void 0);
exports.Contract = Contract = __decorate([
    (0, typeorm_1.Entity)()
], Contract);
//# sourceMappingURL=contract.model.js.map