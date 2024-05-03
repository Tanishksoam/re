import { Property } from '../property'

export class Image {
  id: string

  imageUrl: string

  propertyId: string

  property?: Property

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
