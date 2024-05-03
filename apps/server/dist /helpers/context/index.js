"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextHelper = void 0;
var ContextHelper;
(function (ContextHelper) {
    function toRequest(context) {
        return context.switchToHttp().getRequest();
    }
    ContextHelper.toRequest = toRequest;
})(ContextHelper || (exports.ContextHelper = ContextHelper = {}));
//# sourceMappingURL=index.js.map