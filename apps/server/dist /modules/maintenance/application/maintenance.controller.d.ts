import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Maintenance, MaintenanceDomainFacade } from '@server/modules/maintenance/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { MaintenanceCreateDto, MaintenanceUpdateDto } from './maintenance.dto';
export declare class MaintenanceController {
    private eventService;
    private maintenanceDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, maintenanceDomainFacade: MaintenanceDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Maintenance[]>;
    create(body: MaintenanceCreateDto, request: Request): Promise<Maintenance>;
    findOne(maintenanceId: string, request: Request): Promise<Maintenance>;
    update(maintenanceId: string, body: MaintenanceUpdateDto): Promise<Maintenance>;
    delete(maintenanceId: string): Promise<Maintenance>;
}
