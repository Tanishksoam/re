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
exports.NotificationPropertySubscriber = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const socket_1 = require("../../../../libraries/socket");
const application_1 = require("../../../property/application");
const domain_1 = require("../../../authorization/domain");
const domain_2 = require("../../domain");
let NotificationPropertySubscriber = class NotificationPropertySubscriber {
    constructor(notificationDomainFacade, authorizationDomainFacade, socketService) {
        this.notificationDomainFacade = notificationDomainFacade;
        this.authorizationDomainFacade = authorizationDomainFacade;
        this.socketService = socketService;
    }
    async handleCreation(data) {
        const values = {
            title: 'Admin',
            message: 'A new property has been created',
            senderName: 'API',
        };
        const role = await this.authorizationDomainFacade.role.findOneByNameOrFail('admin');
        for (const { userId } of role.roleUsers) {
            const isCreator = userId === data.userId;
            if (isCreator) {
                continue;
            }
            const notification = await this.notificationDomainFacade.create(Object.assign(Object.assign({}, values), { userId }));
            this.socketService.send(userId, 'notification.created', notification);
        }
    }
};
exports.NotificationPropertySubscriber = NotificationPropertySubscriber;
__decorate([
    (0, event_emitter_1.OnEvent)(application_1.PropertyApplicationEvent.PropertyCreated.key),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationPropertySubscriber.prototype, "handleCreation", null);
exports.NotificationPropertySubscriber = NotificationPropertySubscriber = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domain_2.NotificationDomainFacade,
        domain_1.AuthorizationDomainFacade,
        socket_1.SocketService])
], NotificationPropertySubscriber);
//# sourceMappingURL=notification.property.subscriber.js.map