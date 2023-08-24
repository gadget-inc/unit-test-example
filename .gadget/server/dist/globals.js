"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globals = exports.actionContextLocalStorage = void 0;
const async_hooks_1 = require("async_hooks");
exports.actionContextLocalStorage = new async_hooks_1.AsyncLocalStorage();
exports.Globals = {
    /**
     * Internal variable to store the model validator function, set in `set` by the `AppBridge`.
     * @internal
     */
    modelValidator: null,
    /**
     * Internal variable to store the request context module, set in `set` by the `AppBridge`.
     * @internal
     */
    requestContext: null,
    /**
     * @internal
     */
    logger: null,
    /**
     * This is used internally to set the globals for this instance of the framework package.
     * @internal
     */
    set(globals) {
        Object.assign(this, globals);
    },
};
//# sourceMappingURL=globals.js.map