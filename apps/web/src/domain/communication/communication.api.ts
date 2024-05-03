import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Communication } from './communication.model'

export class CommunicationApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Communication>,
  ): Promise<Communication[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/communications${buildOptions}`)
  }

  static findOne(
    communicationId: string,
    queryOptions?: ApiHelper.QueryOptions<Communication>,
  ): Promise<Communication> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/communications/${communicationId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Communication>): Promise<Communication> {
    return HttpService.api.post(`/v1/communications`, values)
  }

  static updateOne(
    communicationId: string,
    values: Partial<Communication>,
  ): Promise<Communication> {
    return HttpService.api.patch(
      `/v1/communications/${communicationId}`,
      values,
    )
  }

  static deleteOne(communicationId: string): Promise<void> {
    return HttpService.api.delete(`/v1/communications/${communicationId}`)
  }

  static findManyBySenderId(
    senderId: string,
    queryOptions?: ApiHelper.QueryOptions<Communication>,
  ): Promise<Communication[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/sender/${senderId}/communications${buildOptions}`,
    )
  }

  static createOneBySenderId(
    senderId: string,
    values: Partial<Communication>,
  ): Promise<Communication> {
    return HttpService.api.post(
      `/v1/users/sender/${senderId}/communications`,
      values,
    )
  }

  static findManyByReceiverId(
    receiverId: string,
    queryOptions?: ApiHelper.QueryOptions<Communication>,
  ): Promise<Communication[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/receiver/${receiverId}/communications${buildOptions}`,
    )
  }

  static createOneByReceiverId(
    receiverId: string,
    values: Partial<Communication>,
  ): Promise<Communication> {
    return HttpService.api.post(
      `/v1/users/receiver/${receiverId}/communications`,
      values,
    )
  }
}
