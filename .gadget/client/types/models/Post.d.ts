import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Post, PostSort, PostFilter, AvailablePostSelection, CreatePostInput, UpdatePostInput } from "../types.js";
export declare const DefaultPostSelection: {
    readonly id: true;
    readonly __typename: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly title: true;
    readonly content: {
        readonly markdown: true;
        readonly truncatedHTML: true;
    };
    readonly wordCount: true;
    readonly isPublished: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "post". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedPostOrDefault<Options extends Selectable<AvailablePostSelection>> = DeepFilterNever<Select<Post, DefaultSelection<AvailablePostSelection, Options, typeof DefaultPostSelection>>>;
/** Options that can be passed to the `PostManager#findOne` method */
export interface FindOnePostOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePostSelection;
}
/** Options that can be passed to the `PostManager#maybeFindOne` method */
export interface MaybeFindOnePostOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePostSelection;
}
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
}
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
}
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
}
export interface CreatePostOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePostSelection;
}
export interface DeletePostOptions {
}
export interface UpdatePostOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailablePostSelection;
}
type createPostVariables = CreatePostInput;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createPost<Options extends CreatePostOptions>(variables: createPostVariables, options?: LimitToKnownKeys<Options, CreatePostOptions>): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;
declare function createPost<Options extends CreatePostOptions>(variables: {
    post?: CreatePostInput;
}, options?: LimitToKnownKeys<Options, CreatePostOptions>): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deletePost<Options extends DeletePostOptions>(id: string, options?: LimitToKnownKeys<Options, DeletePostOptions>): Promise<void extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;
type updatePostVariables = UpdatePostInput;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updatePost<Options extends UpdatePostOptions>(id: string, variables: updatePostVariables, options?: LimitToKnownKeys<Options, UpdatePostOptions>): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;
declare function updatePost<Options extends UpdatePostOptions>(id: string, variables: {
    post?: UpdatePostInput;
}, options?: LimitToKnownKeys<Options, UpdatePostOptions>): Promise<SelectedPostOrDefault<Options> extends void ? void : GadgetRecord<SelectedPostOrDefault<Options>>>;
/** All the actions available at the collection level and record level for "post" */
export declare class PostManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>): Promise<GadgetRecord<SelectedPostOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "post";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: FindOnePostOptions;
        schemaType: Query["post"];
    };
    /**
 * Finds one post by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOnePostOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOnePostOptions>): Promise<GadgetRecord<SelectedPostOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "post";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: MaybeFindOnePostOptions;
        schemaType: Query["post"];
    };
    /**
 * Finds many post. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyPostsOptions>(options?: LimitToKnownKeys<Options, FindManyPostsOptions>): Promise<GadgetRecordList<SelectedPostOrDefault<Options>>>;
        type: "findMany";
        operationName: "posts";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: FindManyPostsOptions;
        schemaType: Query["post"];
    };
    /**
 * Finds the first matching post. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstPostOptions>(options?: LimitToKnownKeys<Options, FindFirstPostOptions>): Promise<GadgetRecord<SelectedPostOrDefault<Options>>>;
        type: "findFirst";
        operationName: "posts";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: FindFirstPostOptions;
        schemaType: Query["post"];
    };
    /**
 * Finds the first matching post. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstPostOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstPostOptions>): Promise<GadgetRecord<SelectedPostOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "posts";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: MaybeFindFirstPostOptions;
        schemaType: Query["post"];
    };
    /**
  * Finds one post by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOnePostOptions>(value: string, options?: LimitToKnownKeys<Options, FindOnePostOptions>): Promise<GadgetRecord<SelectedPostOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "posts";
        modelApiIdentifier: "post";
        defaultSelection: typeof DefaultPostSelection;
        selectionType: AvailablePostSelection;
        optionsType: FindOnePostOptions;
        schemaType: Query["post"];
    };
    create: typeof createPost & {
        readonly type: "action";
        readonly operationName: "createPost";
        readonly namespace: null;
        readonly modelApiIdentifier: "post";
        readonly modelSelectionField: "post";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly title: true;
            readonly content: {
                readonly markdown: true;
                readonly truncatedHTML: true;
            };
            readonly wordCount: true;
            readonly isPublished: true;
        };
        readonly selectionType: AvailablePostSelection;
        readonly optionsType: CreatePostOptions;
        readonly schemaType: Post | null;
        readonly variablesType: CreatePostInput | {
            post?: CreatePostInput | undefined;
        } | undefined;
        readonly variables: {
            readonly post: {
                readonly required: false;
                readonly type: "CreatePostInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
    delete: typeof deletePost & {
        readonly type: "action";
        readonly operationName: "deletePost";
        readonly namespace: null;
        readonly modelApiIdentifier: "post";
        readonly modelSelectionField: "post";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeletePostOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: false;
        readonly isCreateOrUpdateAction: false;
        readonly paramOnlyVariables: readonly [];
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeletePostOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeletePostOptions>): Promise<void>;
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
    };
    update: typeof updatePost & {
        readonly type: "action";
        readonly operationName: "updatePost";
        readonly namespace: null;
        readonly modelApiIdentifier: "post";
        readonly modelSelectionField: "post";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly id: true;
            readonly __typename: true;
            readonly createdAt: true;
            readonly updatedAt: true;
            readonly title: true;
            readonly content: {
                readonly markdown: true;
                readonly truncatedHTML: true;
            };
            readonly wordCount: true;
            readonly isPublished: true;
        };
        readonly selectionType: AvailablePostSelection;
        readonly optionsType: UpdatePostOptions;
        readonly schemaType: Post | null;
        readonly variablesType: {
            id: string;
            post?: UpdatePostInput | undefined;
        } | (UpdatePostInput & {
            id: string;
        }) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly post: {
                readonly required: false;
                readonly type: "UpdatePostInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        readonly hasCreateOrUpdateEffect: true;
        readonly isCreateOrUpdateAction: true;
        readonly paramOnlyVariables: readonly [];
    };
}
export {};
