"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidStateTransitionError = exports.InvalidActionInputError = exports.InternalError = exports.MisconfiguredActionError = exports.PermissionDeniedError = void 0;
const utils_1 = require("./utils");
/**
 * Parent class for all the enhanced errors in any gadget-owned package
 */
class GadgetError extends Error {
    constructor() {
        super(...arguments);
        /** Was this error caused by the Gadget application's code */
        this.causedByUserland = false;
        /** Was this error caused by the API client calling the Gadget application */
        this.causedByClient = false;
        /** What HTTP status code should be sent when responding with this error */
        this.statusCode = 500;
        /** Was this error already logged? */
        this.logged = false;
    }
}
const errorClass = (code, defaultMessage, options = {}) => {
    var _a;
    const opts = (0, utils_1.defaults)(options, {
        statusCode: 500,
        causedByClient: false,
        causedByUserland: false,
        logged: false,
    });
    return _a = class extends GadgetError {
            constructor(message = defaultMessage, details) {
                super(`${code}: ${message}`);
                this.details = details;
                this.code = code;
                this.statusCode = opts.statusCode;
                this.causedByClient = opts.causedByClient;
                this.causedByUserland = opts.causedByUserland;
                this.logged = opts.logged;
                this.exposeToClient = opts.exposeToClient ?? (opts.causedByClient || (opts.statusCode >= 400 && opts.statusCode < 500));
                this.exposeToSandbox = opts.exposeToSandbox ?? opts.causedByUserland;
                this.details = details;
                if (details?.cause) {
                    this.cause = details.cause;
                    delete details.cause;
                }
                this.name = this.constructor.name;
            }
        },
        _a.code = code,
        _a;
};
/** Thrown when an API client tries to access data that it's roles don't grant it access to. */
class PermissionDeniedError extends errorClass("GGT_PERMISSION_DENIED", "Permission denied to access this resource.", {
    statusCode: 403,
    causedByClient: true,
    causedByUserland: false,
}) {
    constructor(message, details = {}) {
        super(message, details);
        this.details = details;
        this.actor = details.actor;
        this.actorRoleKeys = details.actorRoleKeys;
        this.resource = details.resource;
    }
}
exports.PermissionDeniedError = PermissionDeniedError;
/** Thrown when an action is trying to execute but can't because it's missing key configuration or some configuration value is itself invalid. This is the app developer's fault -- the action needs to be corrected in order to work. */
class MisconfiguredActionError extends errorClass("GGT_MISCONFIGURED_ACTION", "Invalid action configuration, request cannot be processed until this is corrected.", {
    statusCode: 500,
    causedByClient: false,
    causedByUserland: true,
}) {
}
exports.MisconfiguredActionError = MisconfiguredActionError;
/**
 * Catch all error thrown when something unexpected happens within the Gadget platform that isn't directly the app developer's fault.
 * Indicates that the error is the fault of the platform, and hides the details of why in case it might leak sensitive information.
 * Try not to use this as it isn't actionable by app developers, but if something really is our fault and out of their control, it's cool.
 */
class InternalError extends errorClass("GGT_INTERNAL_ERROR", "An internal error occurred.", {
    statusCode: 500,
    causedByClient: false,
    causedByUserland: false,
}) {
}
exports.InternalError = InternalError;
class InvalidActionInputError extends errorClass("GGT_INVALID_ACTION_INPUT", "Input was invalid for an action", {
    statusCode: 422,
    causedByClient: true,
    causedByUserland: false,
}) {
}
exports.InvalidActionInputError = InvalidActionInputError;
class InvalidStateTransitionError extends errorClass("GGT_INVALID_STATE_TRANSITION", "Invalid state transition", {
    statusCode: 422,
    causedByClient: false,
    causedByUserland: true,
}) {
}
exports.InvalidStateTransitionError = InvalidStateTransitionError;
//# sourceMappingURL=errors.js.map