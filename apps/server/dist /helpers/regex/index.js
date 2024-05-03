"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
var Regex;
(function (Regex) {
    function findMatches(content, regexExp) {
        var _a;
        const matches = (_a = content.match(regexExp)) !== null && _a !== void 0 ? _a : [];
        return matches;
    }
    Regex.findMatches = findMatches;
    function findCaptures(content, regexExp) {
        const captures = [];
        const matches = findMatches(content, regexExp);
        for (const match of matches) {
            const regexExpCopy = new RegExp(regexExp);
            const groups = regexExpCopy.exec(match).slice(1);
            captures.push(groups);
        }
        return captures;
    }
    Regex.findCaptures = findCaptures;
})(Regex || (exports.Regex = Regex = {}));
//# sourceMappingURL=index.js.map