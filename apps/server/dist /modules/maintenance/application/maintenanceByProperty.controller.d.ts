import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { MaintenanceDomainFacade } from '@server/modules/maintenance/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { MaintenanceCreateDto } from './maintenance.dto';
import { PropertyDomainFacade } from '../../property/domain';
export declare class MaintenanceByPropertyController {
    private propertyDomainFacade;
    private maintenanceDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(propertyDomainFacade: PropertyDomainFacade, maintenanceDomainFacade: MaintenanceDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyPropertyId(propertyId: string, request: Request): Promise<import("@server/modules/maintenance/domain").Maintenance[]>;
    createByPropertyId(propertyId: string, body: MaintenanceCreateDto, request: Request): Promise<import("@server/modules/maintenance/domain").Maintenance>;
}
