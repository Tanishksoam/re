"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const CookieParser = require("cookie-parser");
const configuration_1 = require("./core/configuration");
const cors_1 = require("./core/cors");
const logger_1 = require("./libraries/logger");
const app_module_1 = require("./modules/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configurationService = app.get(configuration_1.ConfigurationService);
    const corsService = app.get(cors_1.CorsService);
    const loggerService = app.get(logger_1.LoggerService);
    const logger = loggerService.create({ name: 'App' });
    const port = configurationService.getPort();
    app.enableCors(corsService.getOptions());
    app.use(CookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.setGlobalPrefix('api');
    await app.listen(port);
    logger.success(`Application started on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map