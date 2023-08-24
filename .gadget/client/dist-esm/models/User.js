import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultUserSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "roles": {
    "key": true,
    "name": true
  },
  "googleImageUrl": true,
  "lastName": true,
  "email": true,
  "firstName": true,
  "lastSignedIn": true
};
;
;
;
;
;
;
;
;
async function updateUser(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "user";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await actionRunner(
    this,
    "updateUser",
    DefaultUserSelection,
    "user",
    "user",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "user": {
        value: newVariables.user,
        required: false,
        type: "UpdateUserInput"
      }
    },
    options,
    null
  );
}
async function deleteUser(id, options) {
  return await actionRunner(
    this,
    "deleteUser",
    null,
    "user",
    "user",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null
  );
}
async function signOutUser(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "user";
  if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
    newVariables = variables;
  } else {
    newVariables = {
      [modelApiIdentifier]: {}
    };
    for (const [key, value] of Object.entries(variables)) {
      if (paramOnlyVariables.includes(key)) {
        newVariables[key] = value;
      } else {
        newVariables[modelApiIdentifier][key] = value;
      }
    }
  }
  return await actionRunner(
    this,
    "signOutUser",
    DefaultUserSelection,
    "user",
    "user",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "user": {
        value: newVariables.user,
        required: false,
        type: "SignOutUserInput"
      }
    },
    options,
    null
  );
}
class UserManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          "user",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many user. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          "user",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          "user",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one user by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "users",
          "id",
          value,
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one user by its email. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findByEmail = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "users",
          "email",
          value,
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "email",
        operationName: "users",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.update = Object.assign(
      updateUser,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "user": {
            required: false,
            type: "UpdateUserInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deleteUser,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: false,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: false,
        isCreateOrUpdateAction: false,
        paramOnlyVariables: []
      }
    );
    /**
    * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkDeleteUsers",
          null,
          "user",
          "users",
          true,
          {
            ids: {
              value: ids,
              required: true,
              type: "[GadgetID!]"
            }
          },
          options,
          null
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        }
      }
    );
    this.signOut = Object.assign(
      signOutUser,
      {
        type: "action",
        operationName: "signOutUser",
        namespace: null,
        modelApiIdentifier: "user",
        modelSelectionField: "user",
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "user": {
            required: false,
            type: "SignOutUserInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
  }
}
export {
  DefaultUserSelection,
  UserManager
};
//# sourceMappingURL=User.js.map
