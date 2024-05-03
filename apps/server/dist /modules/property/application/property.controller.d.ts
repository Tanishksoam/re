import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Property, PropertyDomainFacade } from '@server/modules/property/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { PropertyCreateDto, PropertyUpdateDto } from './property.dto';
export declare class PropertyController {
    private eventService;
    private propertyDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, propertyDomainFacade: PropertyDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Property[]>;
    create(body: PropertyCreateDto, request: Request): Promise<Property>;
    findOne(propertyId: string, request: Request): Promise<Property>;
    update(propertyId: string, body: PropertyUpdateDto): Promise<Property>;
    delete(propertyId: string): Promise<Property>;
}
