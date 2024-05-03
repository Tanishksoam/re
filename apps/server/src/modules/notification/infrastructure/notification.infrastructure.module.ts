import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationPropertySubscriber } from './subscribers/notification.property.subscriber'

import { NotificationImageSubscriber } from './subscribers/notification.image.subscriber'

import { NotificationCommunicationSubscriber } from './subscribers/notification.communication.subscriber'

import { NotificationContractSubscriber } from './subscribers/notification.contract.subscriber'

import { NotificationFeedbackSubscriber } from './subscribers/notification.feedback.subscriber'

import { NotificationPaymentSubscriber } from './subscribers/notification.payment.subscriber'

import { NotificationMaintenanceSubscriber } from './subscribers/notification.maintenance.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationPropertySubscriber,

    NotificationImageSubscriber,

    NotificationCommunicationSubscriber,

    NotificationContractSubscriber,

    NotificationFeedbackSubscriber,

    NotificationPaymentSubscriber,

    NotificationMaintenanceSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
