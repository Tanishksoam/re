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
exports.CommunicationController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const communication_application_event_1 = require("./communication.application.event");
const communication_dto_1 = require("./communication.dto");
let CommunicationController = class CommunicationController {
    constructor(eventService, communicationDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.communicationDomainFacade = communicationDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.communicationDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.communicationDomainFacade.create(body);
        await this.eventService.emit(communication_application_event_1.CommunicationApplicationEvent.CommunicationCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(communicationId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.communicationDomainFacade.findOneByIdOrFail(communicationId, queryOptions);
        return item;
    }
    async update(communicationId, body) {
        const item = await this.communicationDomainFacade.findOneByIdOrFail(communicationId);
        const itemUpdated = await this.communicationDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(communicationId) {
        const item = await this.communicationDomainFacade.findOneByIdOrFail(communicationId);
        await this.communicationDomainFacade.delete(item);
        return item;
    }
};
exports.CommunicationController = CommunicationController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommunicationController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [communication_dto_1.CommunicationCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CommunicationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:communicationId'),
    __param(0, (0, common_1.Param)('communicationId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommunicationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:communicationId'),
    __param(0, (0, common_1.Param)('communicationId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, communication_dto_1.CommunicationUpdateDto]),
    __metadata("design:returntype", Promise)
], CommunicationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:communicationId'),
    __param(0, (0, common_1.Param)('communicationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommunicationController.prototype, "delete", null);
exports.CommunicationController = CommunicationController = __decorate([
    (0, common_1.Controller)('/v1/communications'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.CommunicationDomainFacade,
        domain_2.AuthenticationDomainFacade])
], CommunicationController);
//# sourceMappingURL=communication.controller.js.map