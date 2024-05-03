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
exports.ContractByPropertyController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const contract_application_event_1 = require("./contract.application.event");
const contract_dto_1 = require("./contract.dto");
const domain_3 = require("../../property/domain");
let ContractByPropertyController = class ContractByPropertyController {
    constructor(propertyDomainFacade, contractDomainFacade, eventService, authenticationDomainFacade) {
        this.propertyDomainFacade = propertyDomainFacade;
        this.contractDomainFacade = contractDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyPropertyId(propertyId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.propertyDomainFacade.findOneByIdOrFail(propertyId);
        const items = await this.contractDomainFacade.findManyByProperty(parent, queryOptions);
        return items;
    }
    async createByPropertyId(propertyId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { propertyId });
        const item = await this.contractDomainFacade.create(valuesUpdated);
        await this.eventService.emit(contract_application_event_1.ContractApplicationEvent.ContractCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.ContractByPropertyController = ContractByPropertyController;
__decorate([
    (0, common_1.Get)('/property/:propertyId/contracts'),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContractByPropertyController.prototype, "findManyPropertyId", null);
__decorate([
    (0, common_1.Post)('/property/:propertyId/contracts'),
    __param(0, (0, common_1.Param)('propertyId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contract_dto_1.ContractCreateDto, Object]),
    __metadata("design:returntype", Promise)
], ContractByPropertyController.prototype, "createByPropertyId", null);
exports.ContractByPropertyController = ContractByPropertyController = __decorate([
    (0, common_1.Controller)('/v1/propertys'),
    __metadata("design:paramtypes", [domain_3.PropertyDomainFacade,
        domain_1.ContractDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], ContractByPropertyController);
//# sourceMappingURL=contractByProperty.controller.js.map