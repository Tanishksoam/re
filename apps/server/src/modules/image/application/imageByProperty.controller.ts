import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ImageDomainFacade } from '@server/modules/image/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ImageApplicationEvent } from './image.application.event'
import { ImageCreateDto } from './image.dto'

import { PropertyDomainFacade } from '../../property/domain'

@Controller('/v1/propertys')
export class ImageByPropertyController {
  constructor(
    private propertyDomainFacade: PropertyDomainFacade,

    private imageDomainFacade: ImageDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/property/:propertyId/images')
  async findManyPropertyId(
    @Param('propertyId') propertyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.propertyDomainFacade.findOneByIdOrFail(propertyId)

    const items = await this.imageDomainFacade.findManyByProperty(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/property/:propertyId/images')
  async createByPropertyId(
    @Param('propertyId') propertyId: string,
    @Body() body: ImageCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, propertyId }

    const item = await this.imageDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ImageApplicationEvent.ImageCreated.Payload>(
      ImageApplicationEvent.ImageCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
