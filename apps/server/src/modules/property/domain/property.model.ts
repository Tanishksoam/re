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

import { User } from '../../../modules/user/domain'

import { Image } from '../../../modules/image/domain'

import { Contract } from '../../../modules/contract/domain'

import { Feedback } from '../../../modules/feedback/domain'

import { Maintenance } from '../../../modules/maintenance/domain'

@Entity()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  description?: string

  @Column({})
  address: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.propertys)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Image, child => child.property)
  images?: Image[]

  @OneToMany(() => Contract, child => child.property)
  contracts?: Contract[]

  @OneToMany(() => Feedback, child => child.property)
  feedbacks?: Feedback[]

  @OneToMany(() => Maintenance, child => child.property)
  maintenances?: Maintenance[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
