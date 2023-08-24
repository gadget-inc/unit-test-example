"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionContextLocalStorage = exports.Globals = exports.api = exports.logger = exports.setApiClient = exports.setLogger = exports.InvalidStateTransitionError = void 0;
__exportStar(require("./routes"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./AppConfiguration"), exports);
__exportStar(require("./AppConnections"), exports);
__exportStar(require("./global-actions"), exports);
__exportStar(require("./AmbientContext"), exports);
var errors_1 = require("./errors");
Object.defineProperty(exports, "InvalidStateTransitionError", { enumerable: true, get: function () { return errors_1.InvalidStateTransitionError; } });
/**
 * @internal
 */
const globals_1 = require("./globals");
Object.defineProperty(exports, "Globals", { enumerable: true, get: function () { return globals_1.Globals; } });
Object.defineProperty(exports, "actionContextLocalStorage", { enumerable: true, get: function () { return globals_1.actionContextLocalStorage; } });
__exportStar(require("./models/User"), exports);
__exportStar(require("./models/Session"), exports);
__exportStar(require("./models/Post"), exports);
__exportStar(require("./effects"), exports);
/**
 * An instance of the Gadget logger
 */
let logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api;
/**
 * This is used internally to set the rootLogger.
 * @internal
 */
const setLogger = (rootLogger) => {
    globals_1.Globals.logger = rootLogger;
    exports.logger = logger = rootLogger;
};
exports.setLogger = setLogger;
/**
 * This is used internally to set the client Instance
 * @internal
 */
const setApiClient = (client) => {
    exports.api = api = client;
};
exports.setApiClient = setApiClient;
//# sourceMappingURL=index.js.map