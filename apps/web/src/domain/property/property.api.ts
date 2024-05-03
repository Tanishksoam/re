import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Property } from './property.model'

export class PropertyApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Property>,
  ): Promise<Property[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/propertys${buildOptions}`)
  }

  static findOne(
    propertyId: string,
    queryOptions?: ApiHelper.QueryOptions<Property>,
  ): Promise<Property> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/propertys/${propertyId}${buildOptions}`)
  }

  static createOne(values: Partial<Property>): Promise<Property> {
    return HttpService.api.post(`/v1/propertys`, values)
  }

  static updateOne(
    propertyId: string,
    values: Partial<Property>,
  ): Promise<Property> {
    return HttpService.api.patch(`/v1/propertys/${propertyId}`, values)
  }

  static deleteOne(propertyId: string): Promise<void> {
    return HttpService.api.delete(`/v1/propertys/${propertyId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Property>,
  ): Promise<Property[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/propertys${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Property>,
  ): Promise<Property> {
    return HttpService.api.post(`/v1/users/user/${userId}/propertys`, values)
  }
}
