import { Request } from 'express';
import { EventService } from '@server/libraries/event';
import { Image, ImageDomainFacade } from '@server/modules/image/domain';
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain';
import { ImageCreateDto, ImageUpdateDto } from './image.dto';
export declare class ImageController {
    private eventService;
    private imageDomainFacade;
    private authenticationDomainFacade;
    constructor(eventService: EventService, imageDomainFacade: ImageDomainFacade, authenticationDomainFacade: AuthenticationDomainFacade);
    findMany(request: Request): Promise<Image[]>;
    create(body: ImageCreateDto, request: Request): Promise<Image>;
    findOne(imageId: string, request: Request): Promise<Image>;
    update(imageId: string, body: ImageUpdateDto): Promise<Image>;
    delete(imageId: string): Promise<Image>;
}
