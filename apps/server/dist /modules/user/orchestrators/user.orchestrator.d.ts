import { User, UserDomainFacade } from '../domain';
import { EventService } from '@server/libraries/event';
export declare class UserOrchestrator {
    private userDomainFacade;
    private event;
    constructor(userDomainFacade: UserDomainFacade, event: EventService);
    getCodeValues(): {
        durationMinutes: number;
    };
    onSuccess(user: User): Promise<void>;
}
