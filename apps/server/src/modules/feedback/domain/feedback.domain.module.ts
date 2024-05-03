import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FeedbackDomainFacade } from './feedback.domain.facade'
import { Feedback } from './feedback.model'

@Module({
  imports: [TypeOrmModule.forFeature([Feedback]), DatabaseHelperModule],
  providers: [FeedbackDomainFacade, FeedbackDomainFacade],
  exports: [FeedbackDomainFacade],
})
export class FeedbackDomainModule {}
