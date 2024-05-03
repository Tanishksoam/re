import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import 'reflect-metadata';
export declare namespace Authentication {
    const AllowUserNotVerified: () => import("@nestjs/common").CustomDecorator<string>;
    function isUserNotVerifiedAllowed(context: ExecutionContext, reflector: Reflector): boolean;
    const Public: () => import("@nestjs/common").CustomDecorator<string>;
    function isPublic(context: ExecutionContext, reflector: Reflector): boolean;
}
