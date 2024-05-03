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

import { Notification } from '../../../modules/notification/domain'

import { Property } from '../../../modules/property/domain'

import { Communication } from '../../../modules/communication/domain'

import { Contract } from '../../../modules/contract/domain'

import { Feedback } from '../../../modules/feedback/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ select: false, nullable: true })
  password: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => Property, child => child.user)
  propertys?: Property[]

  @OneToMany(() => Communication, child => child.sender)
  communicationsAsSender?: Communication[]

  @OneToMany(() => Communication, child => child.receiver)
  communicationsAsReceiver?: Communication[]

  @OneToMany(() => Contract, child => child.tenant)
  contractsAsTenant?: Contract[]

  @OneToMany(() => Contract, child => child.landlord)
  contractsAsLandlord?: Contract[]

  @OneToMany(() => Feedback, child => child.user)
  feedbacks?: Feedback[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
