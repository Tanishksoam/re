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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const property_application_event_1 = require("./property.application.event");
const property_dto_1 = require("./property.dto");
let PropertyController = class PropertyController {
    constructor(eventService, propertyDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.propertyDomainFacade = propertyDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.propertyDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.propertyDomainFacade.create(body);
        await this.eventService.emit(property_application_event_1.PropertyApplicationEvent.PropertyCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(propertyId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.propertyDomainFacade.findOneByIdOrFail(propertyId, queryOptions);
        return item;
    }
    async update(propertyId, body) {
        const item = await this.propertyDomainFacade.findOneByIdOrFail(propertyId);
        const itemUpdated = await this.propertyDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(propertyId) {
        const item = await this.propertyDomainFacade.findOneByIdOrFail(propertyId);
        await this.propertyDomainFacade.delete(item);
        return item;
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [property_dto_1.PropertyCreateDto, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:propertyId'),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:propertyId'),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, property_dto_1.PropertyUpdateDto]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:propertyId'),
    __param(0, (0, common_1.Param)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "delete", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('/v1/propertys'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.PropertyDomainFacade,
        domain_2.AuthenticationDomainFacade])
], PropertyController);
//# sourceMappingURL=property.controller.js.map