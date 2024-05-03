import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ContractDomainModule } from '../domain'
import { ContractController } from './contract.controller'

import { PropertyDomainModule } from '../../../modules/property/domain'

import { ContractByPropertyController } from './contractByProperty.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ContractByUserController } from './contractByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ContractDomainModule,

    PropertyDomainModule,

    UserDomainModule,
  ],
  controllers: [
    ContractController,

    ContractByPropertyController,

    ContractByUserController,
  ],
  providers: [],
})
export class ContractApplicationModule {}
