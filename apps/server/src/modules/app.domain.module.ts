import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { PropertyDomainModule } from './property/domain'

import { ImageDomainModule } from './image/domain'

import { CommunicationDomainModule } from './communication/domain'

import { ContractDomainModule } from './contract/domain'

import { FeedbackDomainModule } from './feedback/domain'

import { PaymentDomainModule } from './payment/domain'

import { MaintenanceDomainModule } from './maintenance/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    PropertyDomainModule,

    ImageDomainModule,

    CommunicationDomainModule,

    ContractDomainModule,

    FeedbackDomainModule,

    PaymentDomainModule,

    MaintenanceDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
