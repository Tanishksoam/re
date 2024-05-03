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
exports.PaymentByContractController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const payment_application_event_1 = require("./payment.application.event");
const payment_dto_1 = require("./payment.dto");
const domain_3 = require("../../contract/domain");
let PaymentByContractController = class PaymentByContractController {
    constructor(contractDomainFacade, paymentDomainFacade, eventService, authenticationDomainFacade) {
        this.contractDomainFacade = contractDomainFacade;
        this.paymentDomainFacade = paymentDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyContractId(contractId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.contractDomainFacade.findOneByIdOrFail(contractId);
        const items = await this.paymentDomainFacade.findManyByContract(parent, queryOptions);
        return items;
    }
    async createByContractId(contractId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { contractId });
        const item = await this.paymentDomainFacade.create(valuesUpdated);
        await this.eventService.emit(payment_application_event_1.PaymentApplicationEvent.PaymentCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.PaymentByContractController = PaymentByContractController;
__decorate([
    (0, common_1.Get)('/contract/:contractId/payments'),
    __param(0, (0, common_1.Param)('contractId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentByContractController.prototype, "findManyContractId", null);
__decorate([
    (0, common_1.Post)('/contract/:contractId/payments'),
    __param(0, (0, common_1.Param)('contractId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.PaymentCreateDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentByContractController.prototype, "createByContractId", null);
exports.PaymentByContractController = PaymentByContractController = __decorate([
    (0, common_1.Controller)('/v1/contracts'),
    __metadata("design:paramtypes", [domain_3.ContractDomainFacade,
        domain_1.PaymentDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], PaymentByContractController);
//# sourceMappingURL=paymentByContract.controller.js.map