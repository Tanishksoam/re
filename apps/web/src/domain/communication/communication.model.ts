import { User } from '../user'

export class Communication {
  id: string

  message: string

  timestamp: string

  senderId: string

  sender?: User

  receiverId: string

  receiver?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
