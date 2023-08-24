import type { RequestContext } from "@fastify/request-context";
import type { FastifyLoggerInstance } from "fastify";
export declare const actionContextLocalStorage: any;
export declare const Globals: {
    /**
     * Internal variable to store the model validator function, set in `set` by the `AppBridge`.
     * @internal
     */
    modelValidator: (modelKey: string) => Promise<any>;
    /**
     * Internal variable to store the request context module, set in `set` by the `AppBridge`.
     * @internal
     */
    requestContext: RequestContext;
    /**
     * @internal
     */
    logger: FastifyLoggerInstance;
    /**
     * This is used internally to set the globals for this instance of the framework package.
     * @internal
     */
    set(globals: {
        logger: FastifyLoggerInstance;
        modelValidator: (modelKey: string) => Promise<any>;
        requestContext: RequestContext;
    }): void;
};
