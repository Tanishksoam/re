"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
const common_1 = require("@nestjs/common");
class Exception extends common_1.HttpException {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { type: 'CORE_EXCEPTION' }), options.status);
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map