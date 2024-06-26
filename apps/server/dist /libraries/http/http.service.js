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
exports.HttpService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let HttpService = class HttpService {
    constructor(httpService) {
        this.httpService = httpService;
        this.options = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
    }
    async post(url, body) {
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, body, this.options).pipe((0, rxjs_1.catchError)((error) => {
            throw error;
        })));
        return response.data;
    }
    async download(url) {
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService
            .get(url, { responseType: 'arraybuffer' })
            .pipe((0, rxjs_1.catchError)((error) => {
            throw error;
        })));
        return response.data;
    }
};
exports.HttpService = HttpService;
exports.HttpService = HttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HttpService);
//# sourceMappingURL=http.service.js.map