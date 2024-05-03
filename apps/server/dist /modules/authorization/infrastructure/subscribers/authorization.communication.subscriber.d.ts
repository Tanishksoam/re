import { AuthorizationDomainEvent } from '@server/modules/authorization/domain/authorization.domain.event';
import { EmailService } from '../../../../libraries/email';
import { UserDomainFacade } from '../../../user/domain';
import { AuthorizationDomainFacade } from '../../domain';
export declare class AuthorizationCommunicationSubscriber {
    private userDomainFacade;
    private authorizationDomainFacade;
    private emailService;
    constructor(userDomainFacade: UserDomainFacade, authorizationDomainFacade: AuthorizationDomainFacade, emailService: EmailService);
    handleCodeCreated(data: AuthorizationDomainEvent.CodeCreated.Payload): Promise<void>;
    private getExpiration;
}
