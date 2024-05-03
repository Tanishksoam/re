import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare namespace AccessControlRoleDecorator {
    const set: (...names: string[]) => import("@nestjs/common").CustomDecorator<string>;
    function get(context: ExecutionContext, reflector: Reflector): string[];
}
