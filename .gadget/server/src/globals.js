"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actionContextLocalStorage: ()=>actionContextLocalStorage,
    Globals: ()=>Globals
});
function _asyncHooks() {
    const data = require("async_hooks");
    _asyncHooks = function() {
        return data;
    };
    return data;
}
const actionContextLocalStorage = new (_asyncHooks()).AsyncLocalStorage();
const Globals = {
    /**
   * Internal variable to store the model validator function, set in `set` by the `AppBridge`.
   * @internal
   */ modelValidator: null,
    /**
   * Internal variable to store the request context module, set in `set` by the `AppBridge`.
   * @internal
   */ requestContext: null,
    /**
   * @internal
   */ logger: null,
    /**
   * This is used internally to set the globals for this instance of the framework package.
   * @internal
   */ set (globals) {
        Object.assign(this, globals);
    }
};
