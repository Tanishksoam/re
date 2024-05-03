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

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  rating: number

  @Column({ nullable: true })
  comment?: string

  @Column({})
  propertyId: string

  @ManyToOne(() => Property, parent => parent.feedbacks)
  @JoinColumn({ name: 'propertyId' })
  property?: Property

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.feedbacks)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
