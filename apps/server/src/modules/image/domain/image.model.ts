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

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  imageUrl: string

  @Column({})
  propertyId: string

  @ManyToOne(() => Property, parent => parent.images)
  @JoinColumn({ name: 'propertyId' })
  property?: Property

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
