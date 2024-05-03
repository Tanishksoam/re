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
exports.FeedbackController = void 0;
const common_1 = require("@nestjs/common");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const request_1 = require("../../../helpers/request");
const feedback_application_event_1 = require("./feedback.application.event");
const feedback_dto_1 = require("./feedback.dto");
let FeedbackController = class FeedbackController {
    constructor(eventService, feedbackDomainFacade, authenticationDomainFacade) {
        this.eventService = eventService;
        this.feedbackDomainFacade = feedbackDomainFacade;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findMany(request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const items = await this.feedbackDomainFacade.findMany(queryOptions);
        return items;
    }
    async create(body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const item = await this.feedbackDomainFacade.create(body);
        await this.eventService.emit(feedback_application_event_1.FeedbackApplicationEvent.FeedbackCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findOne(feedbackId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const item = await this.feedbackDomainFacade.findOneByIdOrFail(feedbackId, queryOptions);
        return item;
    }
    async update(feedbackId, body) {
        const item = await this.feedbackDomainFacade.findOneByIdOrFail(feedbackId);
        const itemUpdated = await this.feedbackDomainFacade.update(item, body);
        return itemUpdated;
    }
    async delete(feedbackId) {
        const item = await this.feedbackDomainFacade.findOneByIdOrFail(feedbackId);
        await this.feedbackDomainFacade.delete(item);
        return item;
    }
};
exports.FeedbackController = FeedbackController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [feedback_dto_1.FeedbackCreateDto, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:feedbackId'),
    __param(0, (0, common_1.Param)('feedbackId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:feedbackId'),
    __param(0, (0, common_1.Param)('feedbackId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, feedback_dto_1.FeedbackUpdateDto]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:feedbackId'),
    __param(0, (0, common_1.Param)('feedbackId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "delete", null);
exports.FeedbackController = FeedbackController = __decorate([
    (0, common_1.Controller)('/v1/feedbacks'),
    __metadata("design:paramtypes", [event_1.EventService,
        domain_1.FeedbackDomainFacade,
        domain_2.AuthenticationDomainFacade])
], FeedbackController);
//# sourceMappingURL=feedback.controller.js.map