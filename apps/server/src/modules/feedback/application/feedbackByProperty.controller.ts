import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { FeedbackDomainFacade } from '@server/modules/feedback/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { FeedbackApplicationEvent } from './feedback.application.event'
import { FeedbackCreateDto } from './feedback.dto'

import { PropertyDomainFacade } from '../../property/domain'

@Controller('/v1/propertys')
export class FeedbackByPropertyController {
  constructor(
    private propertyDomainFacade: PropertyDomainFacade,

    private feedbackDomainFacade: FeedbackDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/property/:propertyId/feedbacks')
  async findManyPropertyId(
    @Param('propertyId') propertyId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.propertyDomainFacade.findOneByIdOrFail(propertyId)

    const items = await this.feedbackDomainFacade.findManyByProperty(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/property/:propertyId/feedbacks')
  async createByPropertyId(
    @Param('propertyId') propertyId: string,
    @Body() body: FeedbackCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, propertyId }

    const item = await this.feedbackDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FeedbackApplicationEvent.FeedbackCreated.Payload>(
      FeedbackApplicationEvent.FeedbackCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
