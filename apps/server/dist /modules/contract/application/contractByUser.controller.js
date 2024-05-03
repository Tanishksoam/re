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
exports.ContractByUserController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const contract_application_event_1 = require("./contract.application.event");
const contract_dto_1 = require("./contract.dto");
const domain_3 = require("../../user/domain");
let ContractByUserController = class ContractByUserController {
    constructor(userDomainFacade, contractDomainFacade, eventService, authenticationDomainFacade) {
        this.userDomainFacade = userDomainFacade;
        this.contractDomainFacade = contractDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyTenantId(tenantId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(tenantId);
        const items = await this.contractDomainFacade.findManyByTenant(parent, queryOptions);
        return items;
    }
    async createByTenantId(tenantId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { tenantId });
        const item = await this.contractDomainFacade.create(valuesUpdated);
        await this.eventService.emit(contract_application_event_1.ContractApplicationEvent.ContractCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findManyLandlordId(landlordId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(landlordId);
        const items = await this.contractDomainFacade.findManyByLandlord(parent, queryOptions);
        return items;
    }
    async createByLandlordId(landlordId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { landlordId });
        const item = await this.contractDomainFacade.create(valuesUpdated);
        await this.eventService.emit(contract_application_event_1.ContractApplicationEvent.ContractCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.ContractByUserController = ContractByUserController;
__decorate([
    (0, common_1.Get)('/tenant/:tenantId/contracts'),
    __param(0, (0, common_1.Param)('tenantId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContractByUserController.prototype, "findManyTenantId", null);
__decorate([
    (0, common_1.Post)('/tenant/:tenantId/contracts'),
    __param(0, (0, common_1.Param)('tenantId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contract_dto_1.ContractCreateDto, Object]),
    __metadata("design:returntype", Promise)
], ContractByUserController.prototype, "createByTenantId", null);
__decorate([
    (0, common_1.Get)('/landlord/:landlordId/contracts'),
    __param(0, (0, common_1.Param)('landlordId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContractByUserController.prototype, "findManyLandlordId", null);
__decorate([
    (0, common_1.Post)('/landlord/:landlordId/contracts'),
    __param(0, (0, common_1.Param)('landlordId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contract_dto_1.ContractCreateDto, Object]),
    __metadata("design:returntype", Promise)
], ContractByUserController.prototype, "createByLandlordId", null);
exports.ContractByUserController = ContractByUserController = __decorate([
    (0, common_1.Controller)('/v1/users'),
    __metadata("design:paramtypes", [domain_3.UserDomainFacade,
        domain_1.ContractDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], ContractByUserController);
//# sourceMappingURL=contractByUser.controller.js.map