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
exports.CommunicationByUserController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const communication_application_event_1 = require("./communication.application.event");
const communication_dto_1 = require("./communication.dto");
const domain_3 = require("../../user/domain");
let CommunicationByUserController = class CommunicationByUserController {
    constructor(userDomainFacade, communicationDomainFacade, eventService, authenticationDomainFacade) {
        this.userDomainFacade = userDomainFacade;
        this.communicationDomainFacade = communicationDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManySenderId(senderId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(senderId);
        const items = await this.communicationDomainFacade.findManyBySender(parent, queryOptions);
        return items;
    }
    async createBySenderId(senderId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { senderId });
        const item = await this.communicationDomainFacade.create(valuesUpdated);
        await this.eventService.emit(communication_application_event_1.CommunicationApplicationEvent.CommunicationCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
    async findManyReceiverId(receiverId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(receiverId);
        const items = await this.communicationDomainFacade.findManyByReceiver(parent, queryOptions);
        return items;
    }
    async createByReceiverId(receiverId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { receiverId });
        const item = await this.communicationDomainFacade.create(valuesUpdated);
        await this.eventService.emit(communication_application_event_1.CommunicationApplicationEvent.CommunicationCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.CommunicationByUserController = CommunicationByUserController;
__decorate([
    (0, common_1.Get)('/sender/:senderId/communications'),
    __param(0, (0, common_1.Param)('senderId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommunicationByUserController.prototype, "findManySenderId", null);
__decorate([
    (0, common_1.Post)('/sender/:senderId/communications'),
    __param(0, (0, common_1.Param)('senderId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, communication_dto_1.CommunicationCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CommunicationByUserController.prototype, "createBySenderId", null);
__decorate([
    (0, common_1.Get)('/receiver/:receiverId/communications'),
    __param(0, (0, common_1.Param)('receiverId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommunicationByUserController.prototype, "findManyReceiverId", null);
__decorate([
    (0, common_1.Post)('/receiver/:receiverId/communications'),
    __param(0, (0, common_1.Param)('receiverId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, communication_dto_1.CommunicationCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CommunicationByUserController.prototype, "createByReceiverId", null);
exports.CommunicationByUserController = CommunicationByUserController = __decorate([
    (0, common_1.Controller)('/v1/users'),
    __metadata("design:paramtypes", [domain_3.UserDomainFacade,
        domain_1.CommunicationDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], CommunicationByUserController);
//# sourceMappingURL=communicationByUser.controller.js.map