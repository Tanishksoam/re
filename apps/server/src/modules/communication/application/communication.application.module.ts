import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CommunicationDomainModule } from '../domain'
import { CommunicationController } from './communication.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { CommunicationByUserController } from './communicationByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CommunicationDomainModule,

    UserDomainModule,
  ],
  controllers: [CommunicationController, CommunicationByUserController],
  providers: [],
})
export class CommunicationApplicationModule {}
