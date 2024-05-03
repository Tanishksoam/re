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
import {
  Communication,
  CommunicationDomainFacade,
} from '@server/modules/communication/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { CommunicationApplicationEvent } from './communication.application.event'
import {
  CommunicationCreateDto,
  CommunicationUpdateDto,
} from './communication.dto'

@Controller('/v1/communications')
export class CommunicationController {
  constructor(
    private eventService: EventService,
    private communicationDomainFacade: CommunicationDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.communicationDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: CommunicationCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.communicationDomainFacade.create(body)

    await this.eventService.emit<CommunicationApplicationEvent.CommunicationCreated.Payload>(
      CommunicationApplicationEvent.CommunicationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:communicationId')
  async findOne(
    @Param('communicationId') communicationId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.communicationDomainFacade.findOneByIdOrFail(
      communicationId,
      queryOptions,
    )

    return item
  }

  @Patch('/:communicationId')
  async update(
    @Param('communicationId') communicationId: string,
    @Body() body: CommunicationUpdateDto,
  ) {
    const item =
      await this.communicationDomainFacade.findOneByIdOrFail(communicationId)

    const itemUpdated = await this.communicationDomainFacade.update(
      item,
      body as Partial<Communication>,
    )
    return itemUpdated
  }

  @Delete('/:communicationId')
  async delete(@Param('communicationId') communicationId: string) {
    const item =
      await this.communicationDomainFacade.findOneByIdOrFail(communicationId)

    await this.communicationDomainFacade.delete(item)

    return item
  }
}
