"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const image_application_event_1 = require("./image.application.event");
const image_dto_1 = require("./image.dto");
let ImageController = class ImageController {
    constructor(eventService, imageDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.imageDomainFacade = imageDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.imageDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.imageDomainFacade.create(body);
        await this.eventService.emit(image_application_event_1.ImageApplicationEvent.ImageCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(imageId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.imageDomainFacade.findOneByIdOrFail(imageId, queryOptions);
        return item;
    }
    async update(imageId, body) {
        const item = await this.imageDomainFacade.findOneByIdOrFail(imageId);
        const itemUpdated = await this.imageDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(imageId) {
        const item = await this.imageDomainFacade.findOneByIdOrFail(imageId);
        await this.imageDomainFacade.delete(item);
        return item;
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_dto_1.ImageCreateDto, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, image_dto_1.ImageUpdateDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "delete", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.Controller)('/v1/images'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.ImageDomainFacade,
        domain_2.AuthenticationDomainFacade])
], ImageController);
//# sourceMappingURL=image.controller.js.map