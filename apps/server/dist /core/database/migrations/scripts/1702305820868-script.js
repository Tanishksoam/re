"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script1702305820868 = void 0;
class Script1702305820868 {
    constructor() {
        this.name = 'Script1702305820868';
    }
    async up(queryRunner) {
        await queryRunner.query(`
      INSERT INTO "user" (
        "id",
        "email", 
        "name", 
        "pictureUrl", 

"password",
        "status"
      ) VALUES (
        '21a857f1-ba5f-4435-bcf6-f910ec07c0dc',
        'test@test.com',
        'John Doe',
        'https://i.imgur.com/sbRCzP7.png',

'$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC',
        'VERIFIED'
      );

      INSERT INTO "authorization_role" (
        "id",
        "name"
      ) VALUES (
        'a7548b29-a984-40b5-a5ea-286b9ebeae18',
        'admin'
      );

      INSERT INTO "authorization_role_user" (
        "userId",
        "roleId"
      ) VALUES (
        '21a857f1-ba5f-4435-bcf6-f910ec07c0dc',
        'a7548b29-a984-40b5-a5ea-286b9ebeae18'
      );
        `);
    }
    async down(queryRunner) { }
}
exports.Script1702305820868 = Script1702305820868;
//# sourceMappingURL=1702305820868-script.js.map