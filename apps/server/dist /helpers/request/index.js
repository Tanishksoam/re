"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHelper = void 0;
var RequestHelper;
(function (RequestHelper) {
    function getPath(request) {
        return request === null || request === void 0 ? void 0 : request.path;
    }
    RequestHelper.getPath = getPath;
    function getMethod(request) {
        return request === null || request === void 0 ? void 0 : request.method;
    }
    RequestHelper.getMethod = getMethod;
    function getBody(request) {
        return request === null || request === void 0 ? void 0 : request.body;
    }
    RequestHelper.getBody = getBody;
    function getQueryOptions(request) {
        const queryOptions = request.query.queryOptions;
        if (queryOptions) {
            try {
                return JSON.parse(queryOptions);
            }
            catch (error) {
                throw new Error(error);
            }
        }
        return {};
    }
    RequestHelper.getQueryOptions = getQueryOptions;
    function getAuthorization(request) {
        var _a, _b;
        const token = (_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a['authorization'];
        return (_b = token === null || token === void 0 ? void 0 : token.replace('Bearer ', '')) === null || _b === void 0 ? void 0 : _b.trim();
    }
    RequestHelper.getAuthorization = getAuthorization;
})(RequestHelper || (exports.RequestHelper = RequestHelper = {}));
//# sourceMappingURL=index.js.map