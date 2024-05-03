import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthenticationGuardService } from './authentication.guard.service';
export declare class AuthenticationGuard implements CanActivate {
    private reflector;
    private service;
    constructor(reflector: Reflector, service: AuthenticationGuardService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
