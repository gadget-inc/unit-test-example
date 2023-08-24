/**
* This is the Gadget server side types library for:
*
*   _   _       _ _     _____         _     ____                        _
*  | | | |_ __ (_) |_  |_   _|__  ___| |_  / ___|  __ _ _ __ ___  _ __ | | ___
*  | | | | '_ \| | __|   | |/ _ \/ __| __| \___ \ / _` | '_ ` _ \| '_ \| |/ _ \
*  | |_| | | | | | |_    | |  __/\__ \ |_   ___) | (_| | | | | | | |_) | |  __/
*   \___/|_| |_|_|\__|   |_|\___||___/\__| |____/ \__,_|_| |_| |_| .__/|_|\___|
*                                                                |_|
*
* Built for environment `"Development"` at version "847"
* Edit this app here: https://"unit-test-sample".gadget.dev/edit
*/
import { FastifyLoggerInstance } from "fastify";
import type { Client } from "@gadget-client/unit-test-sample";
export * from "./routes";
export * from "./types";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./global-actions";
export * from "./AmbientContext";
export { InvalidStateTransitionError } from "./errors";
export * from "./models/User";
export * from "./models/Session";
export * from "./models/Post";
export * from "./effects";
/**
 * An instance of the Gadget logger
 */
declare let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { logger, api };
