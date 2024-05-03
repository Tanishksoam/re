import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ContractDomainFacade } from '@server/modules/contract/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ContractApplicationEvent } from './contract.application.event'
import { ContractCreateDto } from './contract.dto'

import { PropertyDomainFacade } from '../../property/domain'

@Controller('/v1/propertys')
export class ContractByPropertyController {
  constructor(
    private propertyDomainFacade: PropertyDomainFacade,

    private contractDomainFacade: ContractDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/property/:propertyId/contracts')
  async findManyPropertyId(
    @Param('propertyId') propertyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.propertyDomainFacade.findOneByIdOrFail(propertyId)

    const items = await this.contractDomainFacade.findManyByProperty(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/property/:propertyId/contracts')
  async createByPropertyId(
    @Param('propertyId') propertyId: string,
    @Body() body: ContractCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, propertyId }

    const item = await this.contractDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ContractApplicationEvent.ContractCreated.Payload>(
      ContractApplicationEvent.ContractCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
