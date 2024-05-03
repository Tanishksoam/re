import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class SocketServer implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private clients;
    constructor();
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    sendToUser(userId: string, key: string, payload: any): void;
    private getClientToken;
    private verifyTokenOrFail;
    private registerClient;
    private getClient;
}
