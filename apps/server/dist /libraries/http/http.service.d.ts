import { HttpService as HttpServiceAxios } from '@nestjs/axios';
export declare class HttpService {
    private readonly httpService;
    private options;
    constructor(httpService: HttpServiceAxios);
    post<ReturnType>(url: string, body: Record<string, string>): Promise<ReturnType>;
    download(url: string): Promise<ArrayBuffer>;
}
