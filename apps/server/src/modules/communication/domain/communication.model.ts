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

@Entity()
export class Communication {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  message: string

  @Column({})
  timestamp: string

  @Column({})
  senderId: string

  @ManyToOne(() => User, parent => parent.communicationsAsSender)
  @JoinColumn({ name: 'senderId' })
  sender?: User

  @Column({})
  receiverId: string

  @ManyToOne(() => User, parent => parent.communicationsAsReceiver)
  @JoinColumn({ name: 'receiverId' })
  receiver?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
