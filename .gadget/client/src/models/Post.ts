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
      Post,
      PostSort,
      PostFilter,
      AvailablePostSelection,
      CreatePostInput,
      BulkDeletePostsResult,
      UpdatePostInput,
  
} from "../types.js";

export const DefaultPostSelection = {
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
} as const;

/** 
* Produce a type that holds only the selected fields (and nested fields) of "post". The present fields in the result type of this are dynamic based on the options to each call that uses it. 
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above. 
*/
export type SelectedPostOrDefault<Options extends Selectable<AvailablePostSelection>> = DeepFilterNever<
  Select<
    Post, 
    DefaultSelection<
      AvailablePostSelection,
      Options,
      typeof DefaultPostSelection
    >
  >>;

/** Options that can be passed to the `PostManager#findOne` method */
export interface FindOnePostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
};


/** Options that can be passed to the `PostManager#maybeFindOne` method */
export interface MaybeFindOnePostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
};


/** Options that can be passed to the `PostManager#findMany` method */
export interface FindManyPostsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
  /** Return records sorted by these sorts */
  sort?: PostSort | PostSort[] | null;
  /** Only return records matching these filters. */
  filter?: PostFilter | PostFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};


/** Options that can be passed to the `PostManager#findFirst` method */
export interface FindFirstPostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
  /** Return records sorted by these sorts */
  sort?: PostSort | PostSort[] | null;
  /** Only return records matching these filters. */
  filter?: PostFilter | PostFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


/** Options that can be passed to the `PostManager#maybeFindFirst` method */
export interface MaybeFindFirstPostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
  /** Return records sorted by these sorts */
  sort?: PostSort | PostSort[] | null;
  /** Only return records matching these filters. */
  filter?: PostFilter | PostFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};



export interface CreatePostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
};



export interface DeletePostOptions {
};



export interface UpdatePostOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailablePostSelection;
};




    
  type createPostVariables =
      CreatePostInput



/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createPost<Options extends CreatePostOptions>(
  
    variables: createPostVariables,

  options?: LimitToKnownKeys<Options, CreatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>

// Default nested api identifier overload
async function createPost<Options extends CreatePostOptions>(
  
      variables: {
          post?: CreatePostInput,
        },
  
  options?: LimitToKnownKeys<Options, CreatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;

// Function implementation
async function createPost<Options extends CreatePostOptions>(
  this: PostManager,
  
      variables: {
          post?: CreatePostInput,
        }
    
      | createPostVariables
    ,
  
  options?: LimitToKnownKeys<Options, CreatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>
 {
    let newVariables: {
      post?: CreatePostInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "post";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: CreatePostInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof CreatePostInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedPostOrDefault<Options>>(
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
          type: "CreatePostInput",
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
async function deletePost<Options extends DeletePostOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeletePostOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;

// Function implementation
async function deletePost<Options extends DeletePostOptions>(
  this: PostManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeletePostOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>
 {

    return (await actionRunner<void>(
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
          type: "GadgetID",
        },
      },
      options,
      null
    ));
  }
  
    
  type updatePostVariables =
      UpdatePostInput



/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updatePost<Options extends UpdatePostOptions>(
  id: string,
    variables: updatePostVariables,

  options?: LimitToKnownKeys<Options, UpdatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>

// Default nested api identifier overload
async function updatePost<Options extends UpdatePostOptions>(
  id: string,
      variables: {
          post?: UpdatePostInput,
        },
  
  options?: LimitToKnownKeys<Options, UpdatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;

// Function implementation
async function updatePost<Options extends UpdatePostOptions>(
  this: PostManager,
  id: string,
      variables: {
          post?: UpdatePostInput,
        }
    
      | updatePostVariables
    ,
  
  options?: LimitToKnownKeys<Options, UpdatePostOptions>
): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>
 {
    let newVariables: {
      post?: UpdatePostInput,
    };
    const paramOnlyVariables: (keyof typeof newVariables)[] = [];
    const modelApiIdentifier = "post";

    

    if (modelApiIdentifier in variables && typeof variables[modelApiIdentifier] === "object" && variables[modelApiIdentifier] !== null) {
      newVariables = variables as { [modelApiIdentifier]: UpdatePostInput };
    } else {
      newVariables = {
        [modelApiIdentifier]: {}
      };
      
      for (const [key, value] of Object.entries(variables)) {
        if (paramOnlyVariables.includes(key as (keyof typeof newVariables))) {
          newVariables[key as (keyof typeof newVariables)] = value;
        } else {
          newVariables[modelApiIdentifier]![key as (keyof UpdatePostInput)] = value;
        }
      }
    }

    return (await actionRunner<SelectedPostOrDefault<Options>>(
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
          type: "GadgetID",
        },
        "post": {
          value: newVariables.post,
          required: false,
          type: "UpdatePostInput",
        },
      },
      options,
      null
    ));
  }
  

/** All the actions available at the collection level and record level for "post" */
export class PostManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "post";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: FindOnePostOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends FindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>) => {
    return await findOneRunner<SelectedPostOrDefault<Options>>(
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
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as FindOnePostOptions,
    schemaType: null as Query["post"],
  } as const
)

  
    /**
 * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOnePostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "post";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: MaybeFindOnePostOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends MaybeFindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOnePostOptions>) => {
    const record = await findOneRunner<SelectedPostOrDefault<Options>>(
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
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as MaybeFindOnePostOptions,
    schemaType: null as Query["post"],
  } as const
)

  
    /**
 * Finds many post. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyPostsOptions>(options?: LimitToKnownKeys<Options, FindManyPostsOptions>):
    Promise<
      GadgetRecordList<
        SelectedPostOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "posts";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: FindManyPostsOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends FindManyPostsOptions>(options?: LimitToKnownKeys<Options, FindManyPostsOptions>):
    Promise<
      GadgetRecordList<
        SelectedPostOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedPostOrDefault<Options>>(
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
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as FindManyPostsOptions,
    schemaType: null as Query["post"],
  } as const
);
  
    /**
 * Finds the first matching post. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstPostOptions>(options?: LimitToKnownKeys<Options, FindFirstPostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "posts";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: FindFirstPostOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends FindFirstPostOptions>(options?: LimitToKnownKeys<Options, FindFirstPostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedPostOrDefault<Options>>(
      this,
      "posts",
      DefaultPostSelection,
      "post",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "posts",
    modelApiIdentifier: "post",
    defaultSelection: DefaultPostSelection,
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as FindFirstPostOptions,
    schemaType: null as Query["post"],
  } as const
);
  
    /**
 * Finds the first matching post. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstPostOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstPostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "posts";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: MaybeFindFirstPostOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends MaybeFindFirstPostOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstPostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedPostOrDefault<Options>>(
      this,
      "posts",
      DefaultPostSelection,
      "post",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "posts",
    modelApiIdentifier: "post",
    defaultSelection: DefaultPostSelection,
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as MaybeFindFirstPostOptions,
    schemaType: null as Query["post"],
  } as const
);
  
    /**
  * Finds one post by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOnePostOptions>(value: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>):
    Promise<
      GadgetRecord<
        SelectedPostOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "posts";
  modelApiIdentifier: "post";
  defaultSelection: typeof DefaultPostSelection;
  selectionType: AvailablePostSelection;
  optionsType: FindOnePostOptions;
  schemaType: Query["post"];
} = Object.assign(
  async <Options extends FindOnePostOptions>(value: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedPostOrDefault<Options>
      > & SelectedPostOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedPostOrDefault<Options>>(
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
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as FindOnePostOptions,
    schemaType: null as Query["post"],
  } as const
)
  
    create = Object.assign(createPost,
  {
    type: "action",
    operationName: "createPost",
    namespace: null,
    modelApiIdentifier: "post",
    modelSelectionField: "post",
    isBulk: false,
    defaultSelection: DefaultPostSelection,
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as CreatePostOptions,
    schemaType: null as Query["post"],

    variablesType: undefined as {
      
              post?: CreatePostInput,
          }  | createPostVariables
    
    | undefined,

    variables: {
      "post": {
        required: false,
        type: "CreatePostInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
    delete = Object.assign(deletePost,
  {
    type: "action",
    operationName: "deletePost",
    namespace: null,
    modelApiIdentifier: "post",
    modelSelectionField: "post",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeletePostOptions,
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
  <Options extends DeletePostOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeletePostOptions>
  ): Promise<void>;
  type: "action";
  operationName: "bulkDeletePosts";
  namespace: null;
  modelApiIdentifier: "post";
  modelSelectionField: "posts";
  isBulk: true;
  defaultSelection: null;
  selectionType: Record<string, never>;
  optionsType: DeletePostOptions;
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
  async <Options extends DeletePostOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeletePostOptions>
  ) => {
    return (await actionRunner<void>(
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
          type: "[GadgetID!]",
        },
      },
      options,
      null
    ));
  },
  {
    type: "action",
    operationName: "bulkDeletePosts",
    namespace: null,
    modelApiIdentifier: "post",
    modelSelectionField: "posts",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeletePostOptions,
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
  
    update = Object.assign(updatePost,
  {
    type: "action",
    operationName: "updatePost",
    namespace: null,
    modelApiIdentifier: "post",
    modelSelectionField: "post",
    isBulk: false,
    defaultSelection: DefaultPostSelection,
    selectionType: {} as AvailablePostSelection,
    optionsType: {} as UpdatePostOptions,
    schemaType: null as Query["post"],

    variablesType: undefined as {
      id: string,
              post?: UpdatePostInput,
          }  | updatePostVariables
    
    & { id: string; }
    
    | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "post": {
        required: false,
        type: "UpdatePostInput",
      },
    },
    hasAmbiguousIdentifier: false,
    hasCreateOrUpdateEffect: true,
    isCreateOrUpdateAction: true,
    paramOnlyVariables: [],
  } as const
)
  
}
