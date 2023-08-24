import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      User,
      UserSort,
      UserFilter,
      AvailableUserSelection,
      UpdateUserInput,
      BulkDeleteUsersResult,
      SignOutUserInput,
  
} from "../types.js";

export const DefaultUserSelection = {
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
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "user". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedUserOrDefault<Options extends Selectable<AvailableUserSelection>> = DeepFilterNever<
  Select<
    User, 
    DefaultSelection<
      AvailableUserSelection,
      Options,
      typeof DefaultUserSelection
    >
  >>;

/** Options that can be passed to the `UserManager#findOne` method */
export interface FindOneUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
};


/** Options that can be passed to the `UserManager#maybeFindOne` method */
export interface MaybeFindOneUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
};


/** Options that can be passed to the `UserManager#findMany` method */
export interface FindManyUsersOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
  /** Return records sorted by these sorts */
  sort?: UserSort | UserSort[] | null;
  /** Only return records matching these filters. */
  filter?: UserFilter | UserFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `UserManager#findFirst` method */
export interface FindFirstUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
  /** Return records sorted by these sorts */
  sort?: UserSort | UserSort[] | null;
  /** Only return records matching these filters. */
  filter?: UserFilter | UserFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `UserManager#maybeFindFirst` method */
export interface MaybeFindFirstUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
  /** Return records sorted by these sorts */
  sort?: UserSort | UserSort[] | null;
  /** Only return records matching these filters. */
  filter?: UserFilter | UserFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface UpdateUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
};



export interface DeleteUserOptions {
};



export interface SignOutUserOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableUserSelection;
};




    
  type updateUserVariables =
      UpdateUserInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateUser<Options extends UpdateUserOptions>(
  id: string,
    variables: updateUserVariables,

  options?: LimitToKnownKeys<Options, UpdateUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>

// Default nested api identifier overload
async function updateUser<Options extends UpdateUserOptions>(
  id: string,
      variables: {
          user?: UpdateUserInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdateUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;

// Function implementation
async function updateUser<Options extends UpdateUserOptions>(
  this: UserManager,
  id: string,
      variables: {
          user?: UpdateUserInput,
        }
    
      | updateUserVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdateUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>
 {
    let newVariables: {
      user?: UpdateUserInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "user";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdateUserInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdateUserInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedUserOrDefault<Options>>(
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
          type: "GadgetID",
        },
        "user": {
          value: newVariables.user,
          required: false,
          type: "UpdateUserInput",
        },
      },
      options,
      null
    ));
  }
  
    

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Default nested api identifier overload
async function deleteUser<Options extends DeleteUserOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteUserOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;

// Function implementation
async function deleteUser<Options extends DeleteUserOptions>(
  this: UserManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteUserOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>
 {

    return (await actionRunner<void>(
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
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  
    
  type signOutUserVariables =
      SignOutUserInput



/**
  * Executes the signOut action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function signOutUser<Options extends SignOutUserOptions>(
  id: string,
    variables: signOutUserVariables,

  options?: LimitToKnownKeys<Options, SignOutUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>

// Default nested api identifier overload
async function signOutUser<Options extends SignOutUserOptions>(
  id: string,
      variables: {
          user?: SignOutUserInput,
        },
  
  options?: LimitToKnownKeys<Options, SignOutUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;

// Function implementation
async function signOutUser<Options extends SignOutUserOptions>(
  this: UserManager,
  id: string,
      variables: {
          user?: SignOutUserInput,
        }
    
      | signOutUserVariables
    ,
  
  options?: LimitToKnownKeys<Options, SignOutUserOptions>
): Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>
 {
    let newVariables: {
      user?: SignOutUserInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "user";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: SignOutUserInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof SignOutUserInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedUserOrDefault<Options>>(
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
          type: "GadgetID",
        },
        "user": {
          value: newVariables.user,
          required: false,
          type: "SignOutUserInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "user" */
export class UserManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "user";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: FindOneUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends FindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>) => {
    return await findOneRunner<SelectedUserOrDefault<Options>>(
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
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as FindOneUserOptions,
    schemaType: null as Query["user"],
  } as const
)

  
    /**
 * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "user";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: MaybeFindOneUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends MaybeFindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneUserOptions>) => {
    const record = await findOneRunner<SelectedUserOrDefault<Options>>(
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
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as MaybeFindOneUserOptions,
    schemaType: null as Query["user"],
  } as const
)

  
    /**
 * Finds many user. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyUsersOptions>(options?: LimitToKnownKeys<Options, FindManyUsersOptions>):
    Promise<
      GadgetRecordList<
        SelectedUserOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "users";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: FindManyUsersOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends FindManyUsersOptions>(options?: LimitToKnownKeys<Options, FindManyUsersOptions>):
    Promise<
      GadgetRecordList<
        SelectedUserOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedUserOrDefault<Options>>(
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
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as FindManyUsersOptions,
    schemaType: null as Query["user"],
  } as const
);
  
    /**
 * Finds the first matching user. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstUserOptions>(options?: LimitToKnownKeys<Options, FindFirstUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "users";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: FindFirstUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends FindFirstUserOptions>(options?: LimitToKnownKeys<Options, FindFirstUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedUserOrDefault<Options>>(
      this,
      "users",
      DefaultUserSelection,
      "user",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "users",
    modelApiIdentifier: "user",
    defaultSelection: DefaultUserSelection,
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as FindFirstUserOptions,
    schemaType: null as Query["user"],
  } as const
);
  
    /**
 * Finds the first matching user. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstUserOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "users";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: MaybeFindFirstUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends MaybeFindFirstUserOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedUserOrDefault<Options>>(
      this,
      "users",
      DefaultUserSelection,
      "user",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "users",
    modelApiIdentifier: "user",
    defaultSelection: DefaultUserSelection,
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as MaybeFindFirstUserOptions,
    schemaType: null as Query["user"],
  } as const
);
  
    /**
  * Finds one user by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneUserOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "users";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: FindOneUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends FindOneUserOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedUserOrDefault<Options>
      > & SelectedUserOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedUserOrDefault<Options>>(
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
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as FindOneUserOptions,
    schemaType: null as Query["user"],
  } as const
)
  
    /**
  * Finds one user by its email. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findByEmail: {
  <Options extends FindOneUserOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>):
    Promise<
      GadgetRecord<
        SelectedUserOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "email";
  operationName: "users";
  modelApiIdentifier: "user";
  defaultSelection: typeof DefaultUserSelection;
  selectionType: AvailableUserSelection;
  optionsType: FindOneUserOptions;
  schemaType: Query["user"];
} = Object.assign(
  async <Options extends FindOneUserOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedUserOrDefault<Options>
      > & SelectedUserOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedUserOrDefault<Options>>(
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
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as FindOneUserOptions,
    schemaType: null as Query["user"],
  } as const
)
  
    update = Object.assign(updateUser,
  {
    type: "action",
    operationName: "updateUser",
    namespace: null,
    modelApiIdentifier: "user",
    modelSelectionField: "user",
    isBulk: false,
    defaultSelection: DefaultUserSelection,
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as UpdateUserOptions,
    schemaType: null as Query["user"],

    variablesType: undefined as {
      id: string,
              user?: UpdateUserInput,
          }  | updateUserVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "user": {
        required: false,
        type: "UpdateUserInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deleteUser,
  {
    type: "action",
    operationName: "deleteUser",
    namespace: null,
    modelApiIdentifier: "user",
    modelSelectionField: "user",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteUserOptions,
    schemaType: null,

    variablesType: undefined as {
      id: string,
          } | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: false,
    isCreateOrUpdateAction: false,
    paramOnlyVariables: [],
  } as const
)
  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteUserOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteUserOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeleteUsers";
  namespace: null;
  modelApiIdentifier: "user";
  modelSelectionField: "users";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeleteUserOptions;
  schemaType: null;
  variablesType: {
    ids: string[];
  } | undefined;
  variables: {
    ids: {
      required: true;
      type: "[GadgetID!]";
    };
  };
} = Object.assign(
  async <Options extends DeleteUserOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteUserOptions>
  ) => {
    return (await actionRunner<void>(
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
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteUsers",
    namespace: null,
    modelApiIdentifier: "user",
    modelSelectionField: "users",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteUserOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
  } as const
)
  
    signOut = Object.assign(signOutUser,
  {
    type: "action",
    operationName: "signOutUser",
    namespace: null,
    modelApiIdentifier: "user",
    modelSelectionField: "user",
    isBulk: false,
    defaultSelection: DefaultUserSelection,
    selectionType: {} as AvailableUserSelection,
    optionsType: {} as SignOutUserOptions,
    schemaType: null as Query["user"],

    variablesType: undefined as {
      id: string,
              user?: SignOutUserInput,
          }  | signOutUserVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "user": {
        required: false,
        type: "SignOutUserInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
