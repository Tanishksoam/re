"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationInfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const socket_1 = require("../../../libraries/socket");
const domain_1 = require("../../authorization/domain");
const domain_2 = require("../domain");
const notification_property_subscriber_1 = require("./subscribers/notification.property.subscriber");
const notification_image_subscriber_1 = require("./subscribers/notification.image.subscriber");
const notification_communication_subscriber_1 = require("./subscribers/notification.communication.subscriber");
const notification_contract_subscriber_1 = require("./subscribers/notification.contract.subscriber");
const notification_feedback_subscriber_1 = require("./subscribers/notification.feedback.subscriber");
const notification_payment_subscriber_1 = require("./subscribers/notification.payment.subscriber");
const notification_maintenance_subscriber_1 = require("./subscribers/notification.maintenance.subscriber");
let NotificationInfrastructureModule = class NotificationInfrastructureModule {
};
exports.NotificationInfrastructureModule = NotificationInfrastructureModule;
exports.NotificationInfrastructureModule = NotificationInfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [domain_1.AuthorizationDomainModule, domain_2.NotificationDomainModule, socket_1.SocketModule],
        providers: [
            notification_property_subscriber_1.NotificationPropertySubscriber,
            notification_image_subscriber_1.NotificationImageSubscriber,
            notification_communication_subscriber_1.NotificationCommunicationSubscriber,
            notification_contract_subscriber_1.NotificationContractSubscriber,
            notification_feedback_subscriber_1.NotificationFeedbackSubscriber,
            notification_payment_subscriber_1.NotificationPaymentSubscriber,
            notification_maintenance_subscriber_1.NotificationMaintenanceSubscriber,
        ],
        exports: [],
    })
], NotificationInfrastructureModule);
//# sourceMappingURL=notification.infrastructure.module.js.map