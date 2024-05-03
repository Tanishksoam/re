import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ContractDomainFacade } from '@server/modules/contract/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ContractApplicationEvent } from './contract.application.event'
import { ContractCreateDto } from './contract.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ContractByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private contractDomainFacade: ContractDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/tenant/:tenantId/contracts')
  async findManyTenantId(
    @Param('tenantId') tenantId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(tenantId)

    const items = await this.contractDomainFacade.findManyByTenant(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/tenant/:tenantId/contracts')
  async createByTenantId(
    @Param('tenantId') tenantId: string,
    @Body() body: ContractCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, tenantId }

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

  @Get('/landlord/:landlordId/contracts')
  async findManyLandlordId(
    @Param('landlordId') landlordId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(landlordId)

    const items = await this.contractDomainFacade.findManyByLandlord(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/landlord/:landlordId/contracts')
  async createByLandlordId(
    @Param('landlordId') landlordId: string,
    @Body() body: ContractCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, landlordId }

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
