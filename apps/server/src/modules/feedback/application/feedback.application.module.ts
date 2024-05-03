import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FeedbackDomainModule } from '../domain'
import { FeedbackController } from './feedback.controller'

import { PropertyDomainModule } from '../../../modules/property/domain'

import { FeedbackByPropertyController } from './feedbackByProperty.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FeedbackByUserController } from './feedbackByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FeedbackDomainModule,

    PropertyDomainModule,

    UserDomainModule,
  ],
  controllers: [
    FeedbackController,

    FeedbackByPropertyController,

    FeedbackByUserController,
  ],
  providers: [],
})
export class FeedbackApplicationModule {}
