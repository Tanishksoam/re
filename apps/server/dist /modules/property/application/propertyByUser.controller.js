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
exports.PropertyByUserController = void 0;
const common_1 = require("@nestjs/common");
const request_1 = require("../../../helpers/request");
const event_1 = require("../../../libraries/event");
const domain_1 = require("../domain");
const domain_2 = require("../../authentication/domain");
const property_application_event_1 = require("./property.application.event");
const property_dto_1 = require("./property.dto");
const domain_3 = require("../../user/domain");
let PropertyByUserController = class PropertyByUserController {
    constructor(userDomainFacade, propertyDomainFacade, eventService, authenticationDomainFacade) {
        this.userDomainFacade = userDomainFacade;
        this.propertyDomainFacade = propertyDomainFacade;
        this.eventService = eventService;
        this.authenticationDomainFacade = authenticationDomainFacade;
    }
    async findManyUserId(userId, request) {
        const queryOptions = request_1.RequestHelper.getQueryOptions(request);
        const parent = await this.userDomainFacade.findOneByIdOrFail(userId);
        const items = await this.propertyDomainFacade.findManyByUser(parent, queryOptions);
        return items;
    }
    async createByUserId(userId, body, request) {
        const { user } = this.authenticationDomainFacade.getRequestPayload(request);
        const valuesUpdated = Object.assign(Object.assign({}, body), { userId });
        const item = await this.propertyDomainFacade.create(valuesUpdated);
        await this.eventService.emit(property_application_event_1.PropertyApplicationEvent.PropertyCreated.key, {
            id: item.id,
            userId: user.id,
        });
        return item;
    }
};
exports.PropertyByUserController = PropertyByUserController;
__decorate([
    (0, common_1.Get)('/user/:userId/propertys'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PropertyByUserController.prototype, "findManyUserId", null);
__decorate([
    (0, common_1.Post)('/user/:userId/propertys'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, property_dto_1.PropertyCreateDto, Object]),
    __metadata("design:returntype", Promise)
], PropertyByUserController.prototype, "createByUserId", null);
exports.PropertyByUserController = PropertyByUserController = __decorate([
    (0, common_1.Controller)('/v1/users'),
    __metadata("design:paramtypes", [domain_3.UserDomainFacade,
        domain_1.PropertyDomainFacade,
        event_1.EventService,
        domain_2.AuthenticationDomainFacade])
], PropertyByUserController);
//# sourceMappingURL=propertyByUser.controller.js.map