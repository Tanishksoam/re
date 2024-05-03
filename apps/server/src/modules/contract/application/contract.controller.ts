import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Contract, ContractDomainFacade } from '@server/modules/contract/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ContractApplicationEvent } from './contract.application.event'
import { ContractCreateDto, ContractUpdateDto } from './contract.dto'

@Controller('/v1/contracts')
export class ContractController {
  constructor(
    private eventService: EventService,
    private contractDomainFacade: ContractDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.contractDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ContractCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.contractDomainFacade.create(body)

    await this.eventService.emit<ContractApplicationEvent.ContractCreated.Payload>(
      ContractApplicationEvent.ContractCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:contractId')
  async findOne(
    @Param('contractId') contractId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.contractDomainFacade.findOneByIdOrFail(
      contractId,
      queryOptions,
    )

    return item
  }

  @Patch('/:contractId')
  async update(
    @Param('contractId') contractId: string,
    @Body() body: ContractUpdateDto,
  ) {
    const item = await this.contractDomainFacade.findOneByIdOrFail(contractId)

    const itemUpdated = await this.contractDomainFacade.update(
      item,
      body as Partial<Contract>,
    )
    return itemUpdated
  }

  @Delete('/:contractId')
  async delete(@Param('contractId') contractId: string) {
    const item = await this.contractDomainFacade.findOneByIdOrFail(contractId)

    await this.contractDomainFacade.delete(item)

    return item
  }
}
