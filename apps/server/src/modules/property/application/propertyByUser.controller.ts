import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PropertyDomainFacade } from '@server/modules/property/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PropertyApplicationEvent } from './property.application.event'
import { PropertyCreateDto } from './property.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PropertyByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private propertyDomainFacade: PropertyDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/propertys')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.propertyDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/propertys')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PropertyCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.propertyDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PropertyApplicationEvent.PropertyCreated.Payload>(
      PropertyApplicationEvent.PropertyCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
