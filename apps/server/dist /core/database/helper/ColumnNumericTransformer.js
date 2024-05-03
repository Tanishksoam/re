"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumeric = exports.ColumnNumericTransformer = void 0;
const typeorm_1 = require("typeorm");
class ColumnNumericTransformer {
    to(data) {
        return data;
    }
    from(data) {
        return parseFloat(data);
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
function ColumnNumeric(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, options), { type: 'numeric', transformer: new ColumnNumericTransformer() }))(target, propertyKey);
    };
}
exports.ColumnNumeric = ColumnNumeric;
//# sourceMappingURL=ColumnNumericTransformer.js.map