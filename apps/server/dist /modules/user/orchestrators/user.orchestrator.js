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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrchestrator = void 0;
const common_1 = require("@nestjs/common");
const user_orchestrator_event_1 = require("./user.orchestrator.event");
const domain_1 = require("../domain");
const event_1 = require("../../../libraries/event");
let UserOrchestrator = class UserOrchestrator {
    constructor(userDomainFacade, event) {
        this.userDomainFacade = userDomainFacade;
        this.event = event;
    }
    getCodeValues() {
        return {
            durationMinutes: 60,
        };
    }
    async onSuccess(user) {
        await this.userDomainFacade.setVerified(user);
        this.event.emit(user_orchestrator_event_1.UserOrchestratorEvent.Verified.key, { userId: user.id });
    }
};
exports.UserOrchestrator = UserOrchestrator;
exports.UserOrchestrator = UserOrchestrator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [domain_1.UserDomainFacade,
        event_1.EventService])
], UserOrchestrator);
//# sourceMappingURL=user.orchestrator.js.map