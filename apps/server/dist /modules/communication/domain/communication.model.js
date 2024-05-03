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
exports.Communication = void 0;
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../modules/user/domain");
let Communication = class Communication {
};
exports.Communication = Communication;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Communication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Communication.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Communication.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Communication.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.User, parent => parent.communicationsAsSender),
    (0, typeorm_1.JoinColumn)({ name: 'senderId' }),
    __metadata("design:type", domain_1.User)
], Communication.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Communication.prototype, "receiverId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => domain_1.User, parent => parent.communicationsAsReceiver),
    (0, typeorm_1.JoinColumn)({ name: 'receiverId' }),
    __metadata("design:type", domain_1.User)
], Communication.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Communication.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Communication.prototype, "dateUpdated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", String)
], Communication.prototype, "dateDeleted", void 0);
exports.Communication = Communication = __decorate([
    (0, typeorm_1.Entity)()
], Communication);
//# sourceMappingURL=communication.model.js.map