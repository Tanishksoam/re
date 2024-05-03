import { Notification } from '../notification'

import { Property } from '../property'

import { Communication } from '../communication'

import { Contract } from '../contract'

import { Feedback } from '../feedback'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  propertys?: Property[]

  communicationsAsSender?: Communication[]

  communicationsAsReceiver?: Communication[]

  contractsAsTenant?: Contract[]

  contractsAsLandlord?: Contract[]

  feedbacks?: Feedback[]
}
