import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Contract } from './contract.model'

import { Property } from '../../property/domain'

import { User } from '../../user/domain'

@Injectable()
export class ContractDomainFacade {
  constructor(
    @InjectRepository(Contract)
    private repository: Repository<Contract>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Contract>): Promise<Contract> {
    return this.repository.save(values)
  }

  async update(item: Contract, values: Partial<Contract>): Promise<Contract> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Contract): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Contract> = {},
  ): Promise<Contract[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Contract> = {},
  ): Promise<Contract> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByProperty(
    item: Property,
    queryOptions: RequestHelper.QueryOptions<Contract> = {},
  ): Promise<Contract[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('property')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        propertyId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByTenant(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Contract> = {},
  ): Promise<Contract[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('tenant')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        tenantId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByLandlord(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Contract> = {},
  ): Promise<Contract[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('landlord')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        landlordId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
