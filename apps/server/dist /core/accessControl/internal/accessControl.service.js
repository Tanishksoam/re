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
exports.AccessControlService = void 0;
const common_1 = require("@nestjs/common");
const context_1 = require("../../../helpers/context");
const utility_1 = require("../../../helpers/utility");
const accessControl_1 = require("../../../modules/authorization/accessControl");
const accessControl_role_decorator_1 = require("../decorators/accessControl.role.decorator");
const accessControl_validator_1 = require("./accessControl.validator");
let AccessControlService = class AccessControlService {
    constructor(authorizationAccessControlService, validator) {
        this.authorizationAccessControlService = authorizationAccessControlService;
        this.validator = validator;
    }
    async run(reflector, context) {
        const request = context_1.ContextHelper.toRequest(context);
        const constraints = this.getConstraints(reflector, context);
        const canSkip = utility_1.Utility.isEmpty(constraints.roles);
        if (canSkip) {
            return true;
        }
        let userData = await this.authorizationAccessControlService.findUserData(request);
        await this.validator
            .check({
            userData,
            constraints,
        })
            .catch(error => {
            this.authorizationAccessControlService.onError(error);
        });
        return true;
    }
    getConstraints(reflector, context) {
        const roles = accessControl_role_decorator_1.AccessControlRoleDecorator.get(context, reflector);
        return {
            roles,
        };
    }
};
exports.AccessControlService = AccessControlService;
exports.AccessControlService = AccessControlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accessControl_1.AuthorizationAccessControlService,
        accessControl_validator_1.AccessControlValidator])
], AccessControlService);
//# sourceMappingURL=accessControl.service.js.map