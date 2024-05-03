import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { PropertyApplicationModule } from './property/application'

import { ImageApplicationModule } from './image/application'

import { CommunicationApplicationModule } from './communication/application'

import { ContractApplicationModule } from './contract/application'

import { FeedbackApplicationModule } from './feedback/application'

import { PaymentApplicationModule } from './payment/application'

import { MaintenanceApplicationModule } from './maintenance/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    PropertyApplicationModule,

    ImageApplicationModule,

    CommunicationApplicationModule,

    ContractApplicationModule,

    FeedbackApplicationModule,

    PaymentApplicationModule,

    MaintenanceApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
