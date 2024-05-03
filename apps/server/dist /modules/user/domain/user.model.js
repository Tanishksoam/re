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
exports.User = exports.UserStatus = void 0;
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/notification/domain");
const domain_2 = require("../../../modules/property/domain");
const domain_3 = require("../../../modules/communication/domain");
const domain_4 = require("../../../modules/contract/domain");
const domain_5 = require("../../../modules/feedback/domain");
var UserStatus;
(function (UserStatus) {
    UserStatus["VERIFIED"] = "VERIFIED";
    UserStatus["CREATED"] = "CREATED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "pictureUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: UserStatus, default: UserStatus.VERIFIED }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_2.Property, child => child.user),
    __metadata("design:type", Array)
], User.prototype, "propertys", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_3.Communication, child => child.sender),
    __metadata("design:type", Array)
], User.prototype, "communicationsAsSender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_3.Communication, child => child.receiver),
    __metadata("design:type", Array)
], User.prototype, "communicationsAsReceiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_4.Contract, child => child.tenant),
    __metadata("design:type", Array)
], User.prototype, "contractsAsTenant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_4.Contract, child => child.landlord),
    __metadata("design:type", Array)
], User.prototype, "contractsAsLandlord", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_5.Feedback, child => child.user),
    __metadata("design:type", Array)
], User.prototype, "feedbacks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => domain_1.Notification, notification => notification.user),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], User.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], User.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], User.prototype, "dateDeleted", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.model.js.map