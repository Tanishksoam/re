import { SocketServer } from './socket.server';
export declare class SocketService {
    private socketServer;
    constructor(socketServer: SocketServer);
    send(userId: string, key: string, payload: any): void;
}
