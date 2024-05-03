import { ConfigurationService } from '../../../../core/configuration';
import { EmailService } from '../../../../libraries/email';
import { UserDomainFacade } from '../../../user/domain';
import { AuthenticationDomainFacade } from '../../domain';
export declare class AuthenticationCommunicationSubscriber {
    private configurationService;
    private userDomainFacade;
    private authenticationDomainFacade;
    private emailService;
    constructor(configurationService: ConfigurationService, userDomainFacade: UserDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade, emailService: EmailService);
    handleUserRegistered(data: {
        userId: string;
    }): Promise<void>;
    handleResetPassword(data: {
        userId: string;
    }): Promise<void>;
}
