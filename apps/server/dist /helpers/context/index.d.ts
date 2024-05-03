import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
export declare namespace ContextHelper {
    function toRequest(context: ExecutionContext): Request;
}
