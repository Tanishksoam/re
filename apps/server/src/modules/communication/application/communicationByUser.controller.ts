import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CommunicationDomainFacade } from '@server/modules/communication/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CommunicationApplicationEvent } from './communication.application.event'
import { CommunicationCreateDto } from './communication.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class CommunicationByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private communicationDomainFacade: CommunicationDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/sender/:senderId/communications')
  async findManySenderId(
    @Param('senderId') senderId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(senderId)

    const items = await this.communicationDomainFacade.findManyBySender(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/sender/:senderId/communications')
  async createBySenderId(
    @Param('senderId') senderId: string,
    @Body() body: CommunicationCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, senderId }

    const item = await this.communicationDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CommunicationApplicationEvent.CommunicationCreated.Payload>(
      CommunicationApplicationEvent.CommunicationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/receiver/:receiverId/communications')
  async findManyReceiverId(
    @Param('receiverId') receiverId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(receiverId)

    const items = await this.communicationDomainFacade.findManyByReceiver(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/receiver/:receiverId/communications')
  async createByReceiverId(
    @Param('receiverId') receiverId: string,
    @Body() body: CommunicationCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, receiverId }

    const item = await this.communicationDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CommunicationApplicationEvent.CommunicationCreated.Payload>(
      CommunicationApplicationEvent.CommunicationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
