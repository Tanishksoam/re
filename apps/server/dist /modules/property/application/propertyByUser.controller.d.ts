import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { PropertyDomainFacade } from '@server/modules/property/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { PropertyCreateDto } from './property.dto';
import { UserDomainFacade } from '../../user/domain';
export declare class PropertyByUserController {
    private userDomainFacade;
    private propertyDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(userDomainFacade: UserDomainFacade, propertyDomainFacade: PropertyDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyUserId(userId: string, request: Request): Promise<import("@server/modules/property/domain").Property[]>;
    createByUserId(userId: string, body: PropertyCreateDto, request: Request): Promise<import("@server/modules/property/domain").Property>;
}
