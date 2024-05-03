import { Contract } from '../contract'

export class Payment {
  id: string

  amount: number

  paymentDate: string

  status: string

  contractId: string

  contract?: Contract

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
