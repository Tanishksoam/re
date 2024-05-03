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
exports.FeedbackByUserController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const feedback_application_event_1 = require("./feedback.application.event");
const feedback_dto_1 = require("./feedback.dto");
const domain_3 = require("../../user/domain");
let FeedbackByUserController = class FeedbackByUserController {
    constructor(userDomainFacade, feedbackDomainFacade, eventService, authenticationDomainFacade) {
        this.userDomainFacade = userDomainFacade;
        this.feedbackDomainFacade = feedbackDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyUserId(userId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(userId);
        const items = await this.feedbackDomainFacade.findManyByUser(parent, queryOptions);
        return items;
    }
    async createByUserId(userId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { userId });
        const item = await this.feedbackDomainFacade.create(valuesUpdated);
        await this.eventService.emit(feedback_application_event_1.FeedbackApplicationEvent.FeedbackCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.FeedbackByUserController = FeedbackByUserController;
__decorate([
    (0, common_1.Get)('/user/:userId/feedbacks'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FeedbackByUserController.prototype, "findManyUserId", null);
__decorate([
    (0, common_1.Post)('/user/:userId/feedbacks'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, feedback_dto_1.FeedbackCreateDto, Object]),
    __metadata("design:returntype", Promise)
], FeedbackByUserController.prototype, "createByUserId", null);
exports.FeedbackByUserController = FeedbackByUserController = __decorate([
    (0, common_1.Controller)('/v1/users'),
    __metadata("design:paramtypes", [domain_3.UserDomainFacade,
        domain_1.FeedbackDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], FeedbackByUserController);
//# sourceMappingURL=feedbackByUser.controller.js.map