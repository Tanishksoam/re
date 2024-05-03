import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthorizationAccessControlService } from '@server/modules/authorization/accessControl';
import { AccessControlValidator } from './accessControl.validator';
export declare class AccessControlService {
    private authorizationAccessControlService;
    private validator;
    constructor(authorizationAccessControlService: AuthorizationAccessControlService, validator: AccessControlValidator);
    run(reflector: Reflector, context: ExecutionContext): Promise<boolean>;
    private getConstraints;
}
