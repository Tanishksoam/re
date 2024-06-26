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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationByMeController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const domain_1 = require("../../authentication/domain");
const domain_2 = require("../domain");
let NotificationByMeController = class NotificationByMeController {
    constructor(notificationDomainFacade, authenticationDomainFacade) {
        this.notificationDomainFacade = notificationDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyByMe(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const payload = this.authenticationDomainFacade.getRequestPayload(request);
        const user = payload.user;
        const notifications = await this.notificationDomainFacade.findManyByUser(user, queryOptions);
        return notifications;
    }
    async deleteOne(request, notificationId) {
        const payload = this.authenticationDomainFacade.getRequestPayload(request);
        const user = payload.user;
        const notification = await this.notificationDomainFacade.findOneByIdAndUserOrFail(notificationId, user);
        await this.notificationDomainFacade.delete(notification);
        return {};
    }
    async deleteAll(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const payload = this.authenticationDomainFacade.getRequestPayload(request);
        const user = payload.user;
        const notifications = await this.notificationDomainFacade.findManyByUser(user, queryOptions);
        await this.notificationDomainFacade.deleteMany(notifications);
        return {};
    }
};
exports.NotificationByMeController = NotificationByMeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationByMeController.prototype, "findManyByMe", null);
__decorate([
    (0, common_1.Delete)('/:notificationId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('notificationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotificationByMeController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationByMeController.prototype, "deleteAll", null);
exports.NotificationByMeController = NotificationByMeController = __decorate([
    (0, common_1.Controller)('/v1/users/me/notifications'),
    __metadata("design:paramtypes", [domain_2.NotificationDomainFacade,
        domain_1.AuthenticationDomainFacade])
], NotificationByMeController);
//# sourceMappingURL=notificationByMe.controller.js.map