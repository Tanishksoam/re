"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
const regex_1 = require("../regex");
var StringHelper;
(function (StringHelper) {
    function toSnakeCase(content) {
        return content.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }
    StringHelper.toSnakeCase = toSnakeCase;
    function toCamelCase(content) {
        var _a, _b;
        const REGEX_PREFIX = /^(_{0,2})/g;
        const REGEX_SUFFIX = /(_{0,2})$/g;
        const prefix = (_a = regex_1.Regex.findMatches(content, /^(_{0,2})/g)[0]) !== null && _a !== void 0 ? _a : '';
        const suffix = (_b = regex_1.Regex.findMatches(content, /(_{0,2})$/g)[0]) !== null && _b !== void 0 ? _b : '';
        const contentClean = content
            .replace(REGEX_PREFIX, '')
            .replace(REGEX_SUFFIX, '');
        const contentCamelCase = contentClean.replace(/_([a-zA-Z0-9])/g, (_, match) => match.toUpperCase());
        return `${prefix}${contentCamelCase}${suffix}`;
    }
    StringHelper.toCamelCase = toCamelCase;
})(StringHelper || (exports.StringHelper = StringHelper = {}));
//# sourceMappingURL=string.helper.js.map