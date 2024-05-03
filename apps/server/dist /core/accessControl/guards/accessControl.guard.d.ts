import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessControlService } from '../internal/accessControl.service';
export declare class AccessControlGuard implements CanActivate {
    private reflector;
    private service;
    constructor(reflector: Reflector, service: AccessControlService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
