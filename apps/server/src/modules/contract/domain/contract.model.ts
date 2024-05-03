import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Property } from '../../../modules/property/domain'

import { User } from '../../../modules/user/domain'

import { Payment } from '../../../modules/payment/domain'

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  startDate: string

  @Column({})
  endDate: string

  @Column({})
  terms: string

  @Column({})
  propertyId: string

  @ManyToOne(() => Property, parent => parent.contracts)
  @JoinColumn({ name: 'propertyId' })
  property?: Property

  @Column({})
  tenantId: string

  @ManyToOne(() => User, parent => parent.contractsAsTenant)
  @JoinColumn({ name: 'tenantId' })
  tenant?: User

  @Column({})
  landlordId: string

  @ManyToOne(() => User, parent => parent.contractsAsLandlord)
  @JoinColumn({ name: 'landlordId' })
  landlord?: User

  @OneToMany(() => Payment, child => child.contract)
  payments?: Payment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
