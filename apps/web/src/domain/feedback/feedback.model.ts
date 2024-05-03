import { Property } from '../property'

import { User } from '../user'

export class Feedback {
  id: string

  rating: number

  comment?: string

  propertyId: string

  property?: Property

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
