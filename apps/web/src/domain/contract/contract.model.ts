import { Property } from '../property'

import { User } from '../user'

import { Payment } from '../payment'

export class Contract {
  id: string

  startDate: string

  endDate: string

  terms: string

  propertyId: string

  property?: Property

  tenantId: string

  tenant?: User

  landlordId: string

  landlord?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  payments?: Payment[]
}
