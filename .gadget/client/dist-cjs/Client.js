"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(Client_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_User = require("./models/User.js");
var import_Session = require("./models/Session.js");
var import_Post = require("./models/Post.js");
var import_CurrentSession = require("./models/CurrentSession.js");
const productionEnv = "production";
const developmentEnv = "development";
const getImplicitEnv = () => {
  try {
    return process.env.NODE_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    this.developmentApiRoot = "https://unit-test-sample--development.gadget.app/";
    this.productionApiRoot = "https://unit-test-sample.gadget.app/";
    this.applicationId = "55192";
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query(`query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }`, { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    const environment = (options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? developmentEnv;
    let normalizedEnvironment = environment.toLocaleLowerCase();
    if (normalizedEnvironment != developmentEnv && normalizedEnvironment != productionEnv) {
      console.warn("Invalid environment", environment, "defaulting to development");
      normalizedEnvironment = developmentEnv;
    }
    this.connection = new import_api_client_core.GadgetConnection({
      endpoint: new URL("api/graphql", normalizedEnvironment == productionEnv ? this.productionApiRoot : this.developmentApiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      environment: normalizedEnvironment == productionEnv ? "Production" : "Development"
    });
    this.user = new import_User.UserManager(this.connection);
    this.session = new import_Session.SessionManager(this.connection);
    this.post = new import_Post.PostManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      user: new import_api_client_core.InternalModelManager("user", this.connection, {
        pluralApiIdentifier: "users",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      session: new import_api_client_core.InternalModelManager("session", this.connection, {
        pluralApiIdentifier: "sessions",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      }),
      post: new import_api_client_core.InternalModelManager("post", this.connection, {
        pluralApiIdentifier: "posts",
        // @ts-ignore
        hasAmbiguousIdentifier: false
      })
    };
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables).toPromise();
    if (error)
      throw error;
    return data;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  toString() {
    return `GadgetAPIClient<${this.productionApiRoot}>`;
  }
  toJSON() {
    return this.toString();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
