import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { PropertyApi } from './property/property.api'

import { ImageApi } from './image/image.api'

import { CommunicationApi } from './communication/communication.api'

import { ContractApi } from './contract/contract.api'

import { FeedbackApi } from './feedback/feedback.api'

import { PaymentApi } from './payment/payment.api'

import { MaintenanceApi } from './maintenance/maintenance.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Property extends PropertyApi {}

  export class Image extends ImageApi {}

  export class Communication extends CommunicationApi {}

  export class Contract extends ContractApi {}

  export class Feedback extends FeedbackApi {}

  export class Payment extends PaymentApi {}

  export class Maintenance extends MaintenanceApi {}
}
