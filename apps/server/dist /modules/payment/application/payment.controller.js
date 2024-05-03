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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const payment_application_event_1 = require("./payment.application.event");
const payment_dto_1 = require("./payment.dto");
let PaymentController = class PaymentController {
    constructor(eventService, paymentDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.paymentDomainFacade = paymentDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.paymentDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.paymentDomainFacade.create(body);
        await this.eventService.emit(payment_application_event_1.PaymentApplicationEvent.PaymentCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(paymentId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.paymentDomainFacade.findOneByIdOrFail(paymentId, queryOptions);
        return item;
    }
    async update(paymentId, body) {
        const item = await this.paymentDomainFacade.findOneByIdOrFail(paymentId);
        const itemUpdated = await this.paymentDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(paymentId) {
        const item = await this.paymentDomainFacade.findOneByIdOrFail(paymentId);
        await this.paymentDomainFacade.delete(item);
        return item;
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.PaymentCreateDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.PaymentUpdateDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "delete", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('/v1/payments'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.PaymentDomainFacade,
        domain_2.AuthenticationDomainFacade])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map