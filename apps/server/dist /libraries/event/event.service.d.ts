import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class EventService {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    emit<PayloadType>(key: string, payload: PayloadType): Promise<void>;
}
