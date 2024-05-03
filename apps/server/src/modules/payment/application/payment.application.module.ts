import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PaymentDomainModule } from '../domain'
import { PaymentController } from './payment.controller'

import { ContractDomainModule } from '../../../modules/contract/domain'

import { PaymentByContractController } from './paymentByContract.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PaymentDomainModule,

    ContractDomainModule,
  ],
  controllers: [PaymentController, PaymentByContractController],
  providers: [],
})
export class PaymentApplicationModule {}
