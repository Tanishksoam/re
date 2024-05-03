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
exports.MaintenanceController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const maintenance_application_event_1 = require("./maintenance.application.event");
const maintenance_dto_1 = require("./maintenance.dto");
let MaintenanceController = class MaintenanceController {
    constructor(eventService, maintenanceDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.maintenanceDomainFacade = maintenanceDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.maintenanceDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.maintenanceDomainFacade.create(body);
        await this.eventService.emit(maintenance_application_event_1.MaintenanceApplicationEvent.MaintenanceCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(maintenanceId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.maintenanceDomainFacade.findOneByIdOrFail(maintenanceId, queryOptions);
        return item;
    }
    async update(maintenanceId, body) {
        const item = await this.maintenanceDomainFacade.findOneByIdOrFail(maintenanceId);
        const itemUpdated = await this.maintenanceDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(maintenanceId) {
        const item = await this.maintenanceDomainFacade.findOneByIdOrFail(maintenanceId);
        await this.maintenanceDomainFacade.delete(item);
        return item;
    }
};
exports.MaintenanceController = MaintenanceController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maintenance_dto_1.MaintenanceCreateDto, Object]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:maintenanceId'),
    __param(0, (0, common_1.Param)('maintenanceId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:maintenanceId'),
    __param(0, (0, common_1.Param)('maintenanceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, maintenance_dto_1.MaintenanceUpdateDto]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:maintenanceId'),
    __param(0, (0, common_1.Param)('maintenanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaintenanceController.prototype, "delete", null);
exports.MaintenanceController = MaintenanceController = __decorate([
    (0, common_1.Controller)('/v1/maintenances'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.MaintenanceDomainFacade,
        domain_2.AuthenticationDomainFacade])
], MaintenanceController);
//# sourceMappingURL=maintenance.controller.js.map