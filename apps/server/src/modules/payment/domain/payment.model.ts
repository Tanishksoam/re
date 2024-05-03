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

import { Contract } from '../../../modules/contract/domain'

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  amount: number

  @Column({})
  paymentDate: string

  @Column({})
  status: string

  @Column({})
  contractId: string

  @ManyToOne(() => Contract, parent => parent.payments)
  @JoinColumn({ name: 'contractId' })
  contract?: Contract

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
