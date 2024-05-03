"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashHelper = void 0;
const Bcrypt = require("bcryptjs");
const saltRounds = 10;
var HashHelper;
(function (HashHelper) {
    function run(content) {
        const salt = Bcrypt.genSaltSync(saltRounds);
        const hash = Bcrypt.hashSync(content, salt);
        return hash;
    }
    HashHelper.run = run;
    function verify(value, valueHash) {
        return Bcrypt.compareSync(value, valueHash);
    }
    HashHelper.verify = verify;
})(HashHelper || (exports.HashHelper = HashHelper = {}));
//# sourceMappingURL=hash.helper.js.map