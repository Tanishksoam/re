import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Property as PropertyModel } from './property/property.model'

import { Image as ImageModel } from './image/image.model'

import { Communication as CommunicationModel } from './communication/communication.model'

import { Contract as ContractModel } from './contract/contract.model'

import { Feedback as FeedbackModel } from './feedback/feedback.model'

import { Payment as PaymentModel } from './payment/payment.model'

import { Maintenance as MaintenanceModel } from './maintenance/maintenance.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Property extends PropertyModel {}

  export class Image extends ImageModel {}

  export class Communication extends CommunicationModel {}

  export class Contract extends ContractModel {}

  export class Feedback extends FeedbackModel {}

  export class Payment extends PaymentModel {}

  export class Maintenance extends MaintenanceModel {}
}
