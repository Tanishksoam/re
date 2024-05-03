import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Communication } from './communication.model'

import { User } from '../../user/domain'

@Injectable()
export class CommunicationDomainFacade {
  constructor(
    @InjectRepository(Communication)
    private repository: Repository<Communication>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Communication>): Promise<Communication> {
    return this.repository.save(values)
  }

  async update(
    item: Communication,
    values: Partial<Communication>,
  ): Promise<Communication> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Communication): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Communication> = {},
  ): Promise<Communication[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Communication> = {},
  ): Promise<Communication> {
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

  async findManyBySender(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Communication> = {},
  ): Promise<Communication[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('sender')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        senderId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByReceiver(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Communication> = {},
  ): Promise<Communication[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('receiver')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        receiverId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
