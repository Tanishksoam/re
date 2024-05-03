import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { ImageDomainFacade } from '@server/modules/image/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { ImageCreateDto } from './image.dto';
import { PropertyDomainFacade } from '../../property/domain';
export declare class ImageByPropertyController {
    private propertyDomainFacade;
    private imageDomainFacade;
    private eventService;
    private authenticationDomainFacade;
    constructor(propertyDomainFacade: PropertyDomainFacade, imageDomainFacade: ImageDomainFacade, eventService: EventService, authenticationDomainFacade: AuthenticationDomainFacade);
    findManyPropertyId(propertyId: string, request: Request): Promise<import("@server/modules/image/domain").Image[]>;
    createByPropertyId(propertyId: string, body: ImageCreateDto, request: Request): Promise<import("@server/modules/image/domain").Image>;
}
