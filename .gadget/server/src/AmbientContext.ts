import { Client } from "@gadget-client/unit-test-sample";
import { AppConfiguration } from "./AppConfiguration";
import { AppConnections } from "./AppConnections";
import { FastifyLoggerInstance } from "fastify";
import { Session, RequestData } from "./types";

/** Represents the data that's in always context */
export interface AmbientContext {
  /** The current request's session, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. */
  session?: Session;
  /** The current request's session ID, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. */
  sessionID?: string;
  /** All Unit Test Sample configuration values */
  config: AppConfiguration;
  /** A map of connection name to instantiated connection objects for Unit Test Sample */
  connections: AppConnections;
  /** A high performance structured logger which writes logs to the Logs Viewer in the Gadget Editor. */
  logger: FastifyLoggerInstance;
  /**
   * An instance of the API client for Unit Test Sample.
   *
   * __Note__: This client is authorized using a superuser internal api token and has permission to invoke any action in the system using normal API mutations or the Internal API.
   **/
  api: Client;
  /**
   * The details of the request that is invoking this unit of work, if it was invoked by a request.
   *
   * __Note__: Request details are not always present, like during a background connection sync, a background job, or an action retry.
   **/
  request?: RequestData;
  /** App URL for the current environment e.g. https://example.gadget.app */
  currentAppUrl: string;
}
