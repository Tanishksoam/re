import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PaymentDomainFacade } from '@server/modules/payment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PaymentApplicationEvent } from './payment.application.event'
import { PaymentCreateDto } from './payment.dto'

import { ContractDomainFacade } from '../../contract/domain'

@Controller('/v1/contracts')
export class PaymentByContractController {
  constructor(
    private contractDomainFacade: ContractDomainFacade,

    private paymentDomainFacade: PaymentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/contract/:contractId/payments')
  async findManyContractId(
    @Param('contractId') contractId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.contractDomainFacade.findOneByIdOrFail(contractId)

    const items = await this.paymentDomainFacade.findManyByContract(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/contract/:contractId/payments')
  async createByContractId(
    @Param('contractId') contractId: string,
    @Body() body: PaymentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, contractId }

    const item = await this.paymentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PaymentApplicationEvent.PaymentCreated.Payload>(
      PaymentApplicationEvent.PaymentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
