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
exports.SocketServer = void 0;
const websockets_1 = require("@nestjs/websockets");
const utility_1 = require("../../helpers/utility");
const socket_io_1 = require("socket.io");
let SocketServer = class SocketServer {
    constructor() {
        this.clients = {};
    }
    handleConnection(client, ...args) {
        const token = this.getClientToken(client);
        try {
            const { userId } = this.verifyTokenOrFail(token);
            this.registerClient(userId, client);
        }
        catch (_) {
        }
    }
    handleDisconnect(client) {
        for (const [key, value] of Object.entries(this.clients)) {
            if (value.id === client.id) {
                delete this.clients[key];
                break;
            }
        }
    }
    sendToUser(userId, key, payload) {
        const client = this.getClient(userId);
        if (client) {
            client.emit(key, payload);
        }
    }
    getClientToken(client) {
        return client.handshake.query.token;
    }
    verifyTokenOrFail(token) {
        const isUndefined = token === 'undefined' || !utility_1.Utility.isDefined(token);
        if (isUndefined) {
            throw new Error(`Token is undefined`);
        }
        return { userId: token };
    }
    registerClient(userId, client) {
        if (!this.clients[userId]) {
            this.clients[userId] = client;
        }
    }
    getClient(userId) {
        return this.clients[userId];
    }
};
exports.SocketServer = SocketServer;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketServer.prototype, "server", void 0);
exports.SocketServer = SocketServer = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [])
], SocketServer);
//# sourceMappingURL=socket.server.js.map