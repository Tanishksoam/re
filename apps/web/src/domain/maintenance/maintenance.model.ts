import { Property } from '../property'

export class Maintenance {
  id: string

  issueDescription: string

  status: string

  propertyId: string

  property?: Property

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
