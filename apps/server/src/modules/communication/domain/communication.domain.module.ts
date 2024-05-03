import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { CommunicationDomainFacade } from './communication.domain.facade'
import { Communication } from './communication.model'

@Module({
  imports: [TypeOrmModule.forFeature([Communication]), DatabaseHelperModule],
  providers: [CommunicationDomainFacade, CommunicationDomainFacade],
  exports: [CommunicationDomainFacade],
})
export class CommunicationDomainModule {}
