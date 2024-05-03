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
import { Feedback, FeedbackDomainFacade } from '@server/modules/feedback/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FeedbackApplicationEvent } from './feedback.application.event'
import { FeedbackCreateDto, FeedbackUpdateDto } from './feedback.dto'

@Controller('/v1/feedbacks')
export class FeedbackController {
  constructor(
    private eventService: EventService,
    private feedbackDomainFacade: FeedbackDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.feedbackDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FeedbackCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.feedbackDomainFacade.create(body)

    await this.eventService.emit<FeedbackApplicationEvent.FeedbackCreated.Payload>(
      FeedbackApplicationEvent.FeedbackCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:feedbackId')
  async findOne(
    @Param('feedbackId') feedbackId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.feedbackDomainFacade.findOneByIdOrFail(
      feedbackId,
      queryOptions,
    )

    return item
  }

  @Patch('/:feedbackId')
  async update(
    @Param('feedbackId') feedbackId: string,
    @Body() body: FeedbackUpdateDto,
  ) {
    const item = await this.feedbackDomainFacade.findOneByIdOrFail(feedbackId)

    const itemUpdated = await this.feedbackDomainFacade.update(
      item,
      body as Partial<Feedback>,
    )
    return itemUpdated
  }

  @Delete('/:feedbackId')
  async delete(@Param('feedbackId') feedbackId: string) {
    const item = await this.feedbackDomainFacade.findOneByIdOrFail(feedbackId)

    await this.feedbackDomainFacade.delete(item)

    return item
  }
}
