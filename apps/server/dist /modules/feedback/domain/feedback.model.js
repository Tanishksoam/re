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
exports.Feedback = void 0;
const database_1 = require("../../../core/database");
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/property/domain");
const domain_2 = require("../../../modules/user/domain");
let Feedback = class Feedback {
};
exports.Feedback = Feedback;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Feedback.prototype, "id", void 0);
__decorate([
    (0, database_1.ColumnNumeric)({ type: 'numeric' }),
    __metadata("design:type", Number)
], Feedback.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Feedback.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Feedback.prototype, "propertyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.Property, parent => parent.feedbacks),
    (0, typeorm_1.JoinColumn)({ name: 'propertyId' }),
    __metadata("design:type", domain_1.Property)
], Feedback.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Feedback.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_2.User, parent => parent.feedbacks),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", domain_2.User)
], Feedback.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Feedback.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Feedback.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], Feedback.prototype, "dateDeleted", void 0);
exports.Feedback = Feedback = __decorate([
    (0, typeorm_1.Entity)()
], Feedback);
//# sourceMappingURL=feedback.model.js.map