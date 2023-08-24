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
var Post_exports = {};
__export(Post_exports, {
  DefaultPostSelection: () => DefaultPostSelection,
  PostManager: () => PostManager
});
module.exports = __toCommonJS(Post_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
const DefaultPostSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "title": true,
  "content": {
    "markdown": true,
    "truncatedHTML": true
  },
  "wordCount": true,
  "isPublished": true
};
;
;
;
;
;
;
;
;
async function createPost(variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "post";
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
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createPost",
    DefaultPostSelection,
    "post",
    "post",
    false,
    {
      "post": {
        value: newVariables.post,
        required: false,
        type: "CreatePostInput"
      }
    },
    options,
    null
  );
}
async function deletePost(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deletePost",
    null,
    "post",
    "post",
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
async function updatePost(id, variables, options) {
  let newVariables;
  const paramOnlyVariables = [];
  const modelApiIdentifier = "post";
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
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updatePost",
    DefaultPostSelection,
    "post",
    "post",
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "post": {
        value: newVariables.post,
        required: false,
        type: "UpdatePostInput"
      }
    },
    options,
    null
  );
}
class PostManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "post",
          id,
          DefaultPostSelection,
          "post",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "post",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "post",
          id,
          DefaultPostSelection,
          "post",
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "post",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many post. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "posts",
          DefaultPostSelection,
          "post",
          options
        );
      },
      {
        type: "findMany",
        operationName: "posts",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching post. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "posts",
          DefaultPostSelection,
          "post",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "posts",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching post. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "posts",
          DefaultPostSelection,
          "post",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "posts",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one post by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "posts",
          "id",
          value,
          DefaultPostSelection,
          "post",
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "posts",
        modelApiIdentifier: "post",
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createPost,
      {
        type: "action",
        operationName: "createPost",
        namespace: null,
        modelApiIdentifier: "post",
        modelSelectionField: "post",
        isBulk: false,
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "post": {
            required: false,
            type: "CreatePostInput"
          }
        },
        hasAmbiguousIdentifier: false,
        hasCreateOrUpdateEffect: true,
        isCreateOrUpdateAction: true,
        paramOnlyVariables: []
      }
    );
    this.delete = Object.assign(
      deletePost,
      {
        type: "action",
        operationName: "deletePost",
        namespace: null,
        modelApiIdentifier: "post",
        modelSelectionField: "post",
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
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeletePosts",
          null,
          "post",
          "posts",
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
        operationName: "bulkDeletePosts",
        namespace: null,
        modelApiIdentifier: "post",
        modelSelectionField: "posts",
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
    this.update = Object.assign(
      updatePost,
      {
        type: "action",
        operationName: "updatePost",
        namespace: null,
        modelApiIdentifier: "post",
        modelSelectionField: "post",
        isBulk: false,
        defaultSelection: DefaultPostSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "post": {
            required: false,
            type: "UpdatePostInput"
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultPostSelection,
  PostManager
});
//# sourceMappingURL=Post.js.map
