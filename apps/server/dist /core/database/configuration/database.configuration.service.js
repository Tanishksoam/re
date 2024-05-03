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
exports.DatabaseConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../../configuration");
let DatabaseConfigurationService = class DatabaseConfigurationService {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    getOptions() {
        const isProduction = this.configurationService.isEnvironmentProduction();
        if (isProduction) {
            return Object.assign(Object.assign(Object.assign({}, this.getOptionsBase()), this.getOptionsCommon()), this.getOptionsProduction());
        }
        else {
            return Object.assign(Object.assign(Object.assign({}, this.getOptionsBase()), this.getOptionsCommon()), this.getOptionsDevelopment());
        }
    }
    getOptionsMigration() {
        const isProduction = this.configurationService.isEnvironmentProduction();
        const options = Object.assign(Object.assign({}, this.getOptionsBase()), { migrationsTableName: 'typeorm_migrations', migrations: ['src/core/database/migrations/scripts/*.ts'], entities: ['src/modules/**/*.model.ts'] });
        if (isProduction) {
            return Object.assign(Object.assign({}, options), { ssl: {
                    rejectUnauthorized: false,
                } });
        }
        else {
            return Object.assign({}, options);
        }
    }
    getOptionsBase() {
        var _a;
        const url = (_a = this.configurationService.get('DATABASE_URL')) !== null && _a !== void 0 ? _a : this.configurationService.get('SERVER_DATABASE_URL');
        const username = url.split('//')[1].split(':')[0];
        const password = url.split(':')[2].split('@')[0];
        const host = url.split('@')[1].split(':')[0];
        const port = Number(url.split(':')[3].split('/')[0]);
        const database = url.split('/').slice(-1)[0];
        const isAmazon = host.includes('amazonaws.com');
        const options = {
            type: 'postgres',
            host,
            username,
            password,
            port,
            database,
        };
        if (isAmazon) {
            options['ssl'] = {
                rejectUnauthorized: false,
            };
        }
        return options;
    }
    isMigrationActive() {
        return this.configurationService.getBoolean('DATABASE_MIGRATION_ACTIVE');
    }
    getOptionsCommon() {
        return {
            autoLoadEntities: true,
        };
    }
    getOptionsDevelopment() {
        return {
            synchronize: !this.isMigrationActive(),
        };
    }
    getOptionsProduction() {
        return {
            synchronize: true,
            ssl: {
                rejectUnauthorized: false,
            },
        };
    }
};
exports.DatabaseConfigurationService = DatabaseConfigurationService;
exports.DatabaseConfigurationService = DatabaseConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_1.ConfigurationService])
], DatabaseConfigurationService);
//# sourceMappingURL=database.configuration.service.js.map