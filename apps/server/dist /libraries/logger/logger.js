"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(options) {
        this.instance = options.instance;
        this.name = options.name;
    }
    log(message, data) {
        this.instance.info(this.buildMessage(message), { data });
    }
    warning(message) {
        this.instance.warn(this.buildMessage(`[warning] ${message}`));
    }
    success(message) {
        this.instance.info(this.buildMessage(`[SUCCESS] ${message}`));
    }
    error(error) {
        const isString = typeof error === 'string';
        const message = isString ? error : error.message;
        this.instance.error(this.buildMessage(message));
    }
    buildMessage(message) {
        if (this.name) {
            return `${message} (${this.name})`;
        }
        return message;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map