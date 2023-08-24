import type { RequestContext } from "@fastify/request-context";
import { AsyncLocalStorage } from "async_hooks";
import type { FastifyLoggerInstance } from "fastify";
import type { AnyActionContext, AnyEffectContext, AnyGlobalActionContext } from "./types";

export const actionContextLocalStorage = new AsyncLocalStorage<AnyActionContext | AnyGlobalActionContext | AnyEffectContext>();

export const Globals = {
  /**
   * Internal variable to store the model validator function, set in `set` by the `AppBridge`.
   * @internal
   */
  modelValidator: null as any as (modelKey: string) => Promise<any>,

  /**
   * Internal variable to store the request context module, set in `set` by the `AppBridge`.
   * @internal
   */
  requestContext: null as any as RequestContext,

  /**
   * @internal
   */
  logger: null as any as FastifyLoggerInstance,

  /**
   * This is used internally to set the globals for this instance of the framework package.
   * @internal
   */
  set(globals: { logger: FastifyLoggerInstance; modelValidator: (modelKey: string) => Promise<any>; requestContext: RequestContext }) {
    Object.assign(this, globals);
  },
};
