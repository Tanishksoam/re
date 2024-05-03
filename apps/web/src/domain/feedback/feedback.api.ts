import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Feedback } from './feedback.model'

export class FeedbackApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Feedback>,
  ): Promise<Feedback[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/feedbacks${buildOptions}`)
  }

  static findOne(
    feedbackId: string,
    queryOptions?: ApiHelper.QueryOptions<Feedback>,
  ): Promise<Feedback> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/feedbacks/${feedbackId}${buildOptions}`)
  }

  static createOne(values: Partial<Feedback>): Promise<Feedback> {
    return HttpService.api.post(`/v1/feedbacks`, values)
  }

  static updateOne(
    feedbackId: string,
    values: Partial<Feedback>,
  ): Promise<Feedback> {
    return HttpService.api.patch(`/v1/feedbacks/${feedbackId}`, values)
  }

  static deleteOne(feedbackId: string): Promise<void> {
    return HttpService.api.delete(`/v1/feedbacks/${feedbackId}`)
  }

  static findManyByPropertyId(
    propertyId: string,
    queryOptions?: ApiHelper.QueryOptions<Feedback>,
  ): Promise<Feedback[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/propertys/property/${propertyId}/feedbacks${buildOptions}`,
    )
  }

  static createOneByPropertyId(
    propertyId: string,
    values: Partial<Feedback>,
  ): Promise<Feedback> {
    return HttpService.api.post(
      `/v1/propertys/property/${propertyId}/feedbacks`,
      values,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Feedback>,
  ): Promise<Feedback[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/feedbacks${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Feedback>,
  ): Promise<Feedback> {
    return HttpService.api.post(`/v1/users/user/${userId}/feedbacks`, values)
  }
}
