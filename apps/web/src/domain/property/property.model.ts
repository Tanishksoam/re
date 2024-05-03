import { User } from '../user'

import { Image } from '../image'

import { Contract } from '../contract'

import { Feedback } from '../feedback'

import { Maintenance } from '../maintenance'

export class Property {
  id: string

  title: string

  description?: string

  address: string

  price: number

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  images?: Image[]

  contracts?: Contract[]

  feedbacks?: Feedback[]

  maintenances?: Maintenance[]
}
