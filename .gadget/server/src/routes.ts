import { Client } from "@gadget-client/unit-test-sample";
import { AppConfiguration } from "./AppConfiguration";
import { AppConnections } from "./AppConnections";
import {
  FastifyInstance,
  FastifyLoggerInstance,
  FastifyReply,
  FastifyRequest,
  RequestGenericInterface
} from "fastify";
import { Session } from "./types";

/** A server instance, for hooking into various events, decorating requests, and so on.  */
export interface Server extends FastifyInstance {}

/** A typed description of an incoming HTTP request */
export interface RequestDescription {
  Body?: any;
  Querystring?: any;
  Params?: any;
  Headers?: any;
}

/** A request instance, to query data on an incoming HTTP request. */
export interface RouteContext<Description extends RequestDescription = RequestDescription> extends FastifyRequest<Description> {
  /** The current request's session, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. */
  session?: Session;

  /** The current request's session ID, if it has one. Requests made by browsers are given sessions, but requests made using Gadget API Keys are not. */
  sessionID?: string;

  /** @deprecated Use session instead */
  applicationSession?: Session;

  /** @deprecated Use sessionID instead */
  applicationSessionID?: string;

  /** All Unit Test Sample configuration values */
  config: AppConfiguration;

  /** A map of connection name to instantiated connection objects for Unit Test Sample */
  connections: AppConnections;

  /** A high performance structured logger which writes logs to the Logs Viewer in the Gadget Editor. */
  logger: FastifyLoggerInstance;

  /** An context object used by Gadget to store request information that it is responsible for managing. */
  gadgetContext: Record<string, any>;

  /**
   * An instance of the API client for Unit Test Sample.
   *
   * __Note__: This client is authorized using a superuser internal api token and has permission to invoke any action in the system using normal API mutations or the Internal API.
   **/
  api: Client;

  /** App URL for the current environment e.g. https://example.gadget.app */
  currentAppUrl: string;

  /** Fastify request object */
  request: RouteContext<Description>;

  /** Fastify reply object */
  reply: FastifyReply;
}

/** A reply instance, for sending headers and data in an HTTP response. */
export interface Reply extends FastifyReply {}

export type Request<Description extends RequestDescription = RequestDescription> = RouteContext<Description>;
