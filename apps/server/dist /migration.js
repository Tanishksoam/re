"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const database_1 = require("./core/database");
const app_migration_module_1 = require("./modules/app.migration.module");
async function findDataSource() {
    const app = await core_1.NestFactory.create(app_migration_module_1.AppMigrationModule);
    const databaseMigrationService = app.get(database_1.DatabaseMigrationService);
    const dataSource = databaseMigrationService.getDataSource();
    dataSource.initialize();
    return dataSource;
}
const dataSource = findDataSource();
module.exports = { dataSource };
//# sourceMappingURL=migration.js.map