import {
  findOneRunner
} from "@gadgetinc/api-client-core";
const DefaultSessionSelection = {
  "id": true,
  "__typename": true,
  "state": true,
  "createdAt": true,
  "updatedAt": true
};
;
class CurrentSessionManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Retrieves the current session. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.get = Object.assign(
      async (options) => {
        return await findOneRunner(
          this,
          "currentSession",
          void 0,
          DefaultSessionSelection,
          "session",
          options
        );
      },
      {
        type: "get",
        operationName: "currentSession",
        modelApiIdentifier: "session",
        defaultSelection: DefaultSessionSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
  }
}
export {
  CurrentSessionManager,
  DefaultSessionSelection
};
//# sourceMappingURL=CurrentSession.js.map
