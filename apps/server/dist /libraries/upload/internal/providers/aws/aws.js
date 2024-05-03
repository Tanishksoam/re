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
exports.UploadAWS = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../../../../core/configuration");
const logger_1 = require("../../../../logger");
let UploadAWS = class UploadAWS {
    constructor(loggerService, configurationService) {
        this.loggerService = loggerService;
        this.configurationService = configurationService;
        this.logger = this.loggerService.create({ name: 'AWS' });
        this.initialise();
    }
    async initialise() {
        var _a;
        try {
            const accessKey = this.configurationService.get(`SERVER_AWS_ACCESS_KEY`);
            const secretKey = this.configurationService.get(`SERVER_AWS_SECRET_KEY`);
            if (!accessKey) {
                throw new Error('Access key is required');
            }
            if (!secretKey) {
                throw new Error('Secret key is required');
            }
            const region = (_a = this.configurationService.get(`SERVER_AWS_REGION`)) !== null && _a !== void 0 ? _a : 'us-west-1';
            this.bucketPublicName = this.getBucketName();
            this.client = new client_s3_1.S3Client({
                region,
                credentials: {
                    accessKeyId: accessKey,
                    secretAccessKey: secretKey,
                },
            });
            await this.check();
            this.logger.success(`AWS library active`);
        }
        catch (error) {
            this.logger.error(`AWS library failed to start`);
            this.logger.error(error);
        }
    }
    async check() {
        const buckets = await this.listBuckets();
        const bucket = buckets.find(bucket => bucket.name === this.bucketPublicName);
        if (!bucket) {
            throw new Error(`Bucket "${this.bucketPublicName}" was not found`);
        }
    }
    getBucketName() {
        const bucketName = this.configurationService.get(`SERVER_AWS_BUCKET_PUBLIC_NAME`);
        return bucketName !== null && bucketName !== void 0 ? bucketName : null;
    }
    async listBuckets() {
        const result = await this.client.send(new client_s3_1.ListBucketsCommand({}));
        const buckets = result.Buckets.map(item => ({
            name: item.Name,
            dateCreation: item.CreationDate,
        }));
        return buckets;
    }
    async uploadPublic(options) {
        var _a;
        const file = options.file;
        if (!file) {
            return null;
        }
        const key = this.ensureKey(file.originalname);
        const command = new client_s3_1.PutObjectCommand({
            Bucket: `${this.bucketPublicName}`,
            Key: key,
            Body: file.buffer,
            ContentType: (_a = file.mimetype) !== null && _a !== void 0 ? _a : 'image/png',
        });
        try {
            await this.client.send(command);
            this.logger.success(`File ${file.originalname} saved (public)`);
            const url = `https://${this.bucketPublicName}-public.s3.us-west-1.amazonaws.com/${file.originalname}`;
            return { url };
        }
        catch (error) {
            this.logger.error(`${error}`);
        }
    }
    async uploadPrivate(options) {
        var _a;
        const file = options.file;
        if (!file) {
            return null;
        }
        const key = this.ensureKey(file.originalname);
        const command = new client_s3_1.PutObjectCommand({
            Bucket: `${this.bucketPublicName}`,
            Key: key,
            Body: file.buffer,
            ContentType: (_a = file.mimetype) !== null && _a !== void 0 ? _a : 'image/png',
        });
        try {
            await this.client.send(command);
            this.logger.success(`File ${file.originalname} saved (public)`);
            const url = `https://${this.bucketPublicName}-public.s3.us-west-1.amazonaws.com/${file.originalname}`;
            return { url };
        }
        catch (error) {
            this.logger.error(`${error}`);
        }
    }
    ensureKey(key) {
        const isPrefixed = key.startsWith('/');
        if (isPrefixed) {
            return key.slice(1);
        }
        return key;
    }
};
exports.UploadAWS = UploadAWS;
exports.UploadAWS = UploadAWS = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.LoggerService,
        configuration_1.ConfigurationService])
], UploadAWS);
//# sourceMappingURL=aws.js.map