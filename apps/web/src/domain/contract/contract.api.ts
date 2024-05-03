import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Contract } from './contract.model'

export class ContractApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Contract>,
  ): Promise<Contract[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/contracts${buildOptions}`)
  }

  static findOne(
    contractId: string,
    queryOptions?: ApiHelper.QueryOptions<Contract>,
  ): Promise<Contract> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/contracts/${contractId}${buildOptions}`)
  }

  static createOne(values: Partial<Contract>): Promise<Contract> {
    return HttpService.api.post(`/v1/contracts`, values)
  }

  static updateOne(
    contractId: string,
    values: Partial<Contract>,
  ): Promise<Contract> {
    return HttpService.api.patch(`/v1/contracts/${contractId}`, values)
  }

  static deleteOne(contractId: string): Promise<void> {
    return HttpService.api.delete(`/v1/contracts/${contractId}`)
  }

  static findManyByPropertyId(
    propertyId: string,
    queryOptions?: ApiHelper.QueryOptions<Contract>,
  ): Promise<Contract[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/propertys/property/${propertyId}/contracts${buildOptions}`,
    )
  }

  static createOneByPropertyId(
    propertyId: string,
    values: Partial<Contract>,
  ): Promise<Contract> {
    return HttpService.api.post(
      `/v1/propertys/property/${propertyId}/contracts`,
      values,
    )
  }

  static findManyByTenantId(
    tenantId: string,
    queryOptions?: ApiHelper.QueryOptions<Contract>,
  ): Promise<Contract[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/tenant/${tenantId}/contracts${buildOptions}`,
    )
  }

  static createOneByTenantId(
    tenantId: string,
    values: Partial<Contract>,
  ): Promise<Contract> {
    return HttpService.api.post(
      `/v1/users/tenant/${tenantId}/contracts`,
      values,
    )
  }

  static findManyByLandlordId(
    landlordId: string,
    queryOptions?: ApiHelper.QueryOptions<Contract>,
  ): Promise<Contract[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/landlord/${landlordId}/contracts${buildOptions}`,
    )
  }

  static createOneByLandlordId(
    landlordId: string,
    values: Partial<Contract>,
  ): Promise<Contract> {
    return HttpService.api.post(
      `/v1/users/landlord/${landlordId}/contracts`,
      values,
    )
  }
}
