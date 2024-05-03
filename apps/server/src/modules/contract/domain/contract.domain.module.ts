import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ContractDomainFacade } from './contract.domain.facade'
import { Contract } from './contract.model'

@Module({
  imports: [TypeOrmModule.forFeature([Contract]), DatabaseHelperModule],
  providers: [ContractDomainFacade, ContractDomainFacade],
  exports: [ContractDomainFacade],
})
export class ContractDomainModule {}
