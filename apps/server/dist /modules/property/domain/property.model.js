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
exports.Property = void 0;
const database_1 = require("../../../core/database");
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/user/domain");
const domain_2 = require("../../../modules/image/domain");
const domain_3 = require("../../../modules/contract/domain");
const domain_4 = require("../../../modules/feedback/domain");
const domain_5 = require("../../../modules/maintenance/domain");
let Property = class Property {
};
exports.Property = Property;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Property.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Property.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Property.prototype, "address", void 0);
__decorate([
    (0, database_1.ColumnNumeric)({ type: 'numeric' }),
    __metadata("design:type", Number)
], Property.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Property.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.User, parent => parent.propertys),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", domain_1.User)
], Property.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_2.Image, child => child.property),
    __metadata("design:type", Array)
], Property.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_3.Contract, child => child.property),
    __metadata("design:type", Array)
], Property.prototype, "contracts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_4.Feedback, child => child.property),
    __metadata("design:type", Array)
], Property.prototype, "feedbacks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_5.Maintenance, child => child.property),
    __metadata("design:type", Array)
], Property.prototype, "maintenances", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Property.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Property.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], Property.prototype, "dateDeleted", void 0);
exports.Property = Property = __decorate([
    (0, typeorm_1.Entity)()
], Property);
//# sourceMappingURL=property.model.js.map