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
exports.ContractController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const contract_application_event_1 = require("./contract.application.event");
const contract_dto_1 = require("./contract.dto");
let ContractController = class ContractController {
    constructor(eventService, contractDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.contractDomainFacade = contractDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.contractDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.contractDomainFacade.create(body);
        await this.eventService.emit(contract_application_event_1.ContractApplicationEvent.ContractCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(contractId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.contractDomainFacade.findOneByIdOrFail(contractId, queryOptions);
        return item;
    }
    async update(contractId, body) {
        const item = await this.contractDomainFacade.findOneByIdOrFail(contractId);
        const itemUpdated = await this.contractDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(contractId) {
        const item = await this.contractDomainFacade.findOneByIdOrFail(contractId);
        await this.contractDomainFacade.delete(item);
        return item;
    }
};
exports.ContractController = ContractController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contract_dto_1.ContractCreateDto, Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:contractId'),
    __param(0, (0, common_1.Param)('contractId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:contractId'),
    __param(0, (0, common_1.Param)('contractId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contract_dto_1.ContractUpdateDto]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:contractId'),
    __param(0, (0, common_1.Param)('contractId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "delete", null);
exports.ContractController = ContractController = __decorate([
    (0, common_1.Controller)('/v1/contracts'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.ContractDomainFacade,
        domain_2.AuthenticationDomainFacade])
], ContractController);
//# sourceMappingURL=contract.controller.js.map