import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalUserRecord = Scalars["JSONObject"];

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one post result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalPostRecord = Scalars["JSONObject"];



export interface PostSort {
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;
  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;
  /** Sort the results by the content field. Defaults to ascending (smallest value first). */
  content?: SortOrder | null;
  /** Sort the results by the wordCount field. Defaults to ascending (smallest value first). */
  wordCount?: SortOrder | null;
  /** Sort the results by the isPublished field. Defaults to ascending (smallest value first). */
  isPublished?: SortOrder | null;
};



export interface PostFilter {
  AND?: (PostFilter | null)[];
  OR?: (PostFilter | null)[];
  NOT?: (PostFilter | null)[];
  id?: IDFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  title?: StringFilter | null;
  content?: StringFilter | null;
  wordCount?: FloatFilter | null;
  isPublished?: BooleanFilter | null;
  user?: IDFilter | null;
};



export interface IDFilter {
  equals?: (Scalars['GadgetID'] | null) | null;
  notEquals?: (Scalars['GadgetID'] | null) | null;
  isSet?: (Scalars['Boolean'] | null) | null;
  in?: ((Scalars['GadgetID'] | null) | null)[];
  notIn?: ((Scalars['GadgetID'] | null) | null)[];
  lessThan?: (Scalars['GadgetID'] | null) | null;
  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;
  greaterThan?: (Scalars['GadgetID'] | null) | null;
  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export interface DateTimeFilter {
  equals?: Date | Scalars['ISO8601DateString'] | null;
  notEquals?: Date | Scalars['ISO8601DateString'] | null;
  isSet?: (Scalars['Boolean'] | null) | null;
  in?: (Date | Scalars['ISO8601DateString'] | null)[];
  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];
  lessThan?: Date | Scalars['ISO8601DateString'] | null;
  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
  greaterThan?: Date | Scalars['ISO8601DateString'] | null;
  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
  before?: Date | Scalars['ISO8601DateString'] | null;
  after?: Date | Scalars['ISO8601DateString'] | null;
};



export interface StringFilter {
  equals?: (Scalars['String'] | null) | null;
  notEquals?: (Scalars['String'] | null) | null;
  isSet?: (Scalars['Boolean'] | null) | null;
  in?: ((Scalars['String'] | null) | null)[];
  notIn?: ((Scalars['String'] | null) | null)[];
  lessThan?: (Scalars['String'] | null) | null;
  lessThanOrEqual?: (Scalars['String'] | null) | null;
  greaterThan?: (Scalars['String'] | null) | null;
  greaterThanOrEqual?: (Scalars['String'] | null) | null;
  startsWith?: (Scalars['String'] | null) | null;
};



export interface FloatFilter {
  equals?: (Scalars['Float'] | null) | null;
  notEquals?: (Scalars['Float'] | null) | null;
  isSet?: (Scalars['Boolean'] | null) | null;
  in?: ((Scalars['Float'] | null) | null)[];
  notIn?: ((Scalars['Float'] | null) | null)[];
  lessThan?: (Scalars['Float'] | null) | null;
  lessThanOrEqual?: (Scalars['Float'] | null) | null;
  greaterThan?: (Scalars['Float'] | null) | null;
  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export interface BooleanFilter {
  isSet?: (Scalars['Boolean'] | null) | null;
  equals?: (Scalars['Boolean'] | null) | null;
  notEquals?: (Scalars['Boolean'] | null) | null;
};



export interface UserSort {
  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;
  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;
  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;
  /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
  googleImageUrl?: SortOrder | null;
  /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
  lastName?: SortOrder | null;
  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;
  /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
  firstName?: SortOrder | null;
  /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
  lastSignedIn?: SortOrder | null;
};



export interface UserFilter {
  AND?: (UserFilter | null)[];
  OR?: (UserFilter | null)[];
  NOT?: (UserFilter | null)[];
  id?: IDFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  googleImageUrl?: StringFilter | null;
  lastName?: StringFilter | null;
  email?: StringFilter | null;
  firstName?: StringFilter | null;
  lastSignedIn?: DateTimeFilter | null;
};



export interface UpdateUserInput {
  googleImageUrl?: (Scalars['String'] | null) | null;
  lastName?: (Scalars['String'] | null) | null;
  email?: (Scalars['String'] | null) | null;
  firstName?: (Scalars['String'] | null) | null;
  password?: (Scalars['String'] | null) | null;
  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
  posts?: (PostHasManyInput | null)[];
};



export interface PostHasManyInput {
  create?: NestedPostCreateInput | null;
  update?: NestedPostUpdateInput | null;
  delete?: NestedPostDeleteInput | null;
  /** Creates, updates, or deletes existing records in the database as needed to arrive at the list of records specified. */
  _converge?: ConvergePostInput | null;
};



export interface NestedPostCreateInput {
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: UserBelongsToInput | null;
};



export interface RichTextInput {
  markdown: (Scalars['String'] | null);
};



export interface UserBelongsToInput {
  update?: NestedUserUpdateInput | null;
  delete?: NestedUserDeleteInput | null;
  signOut?: NestedUserSignOutInput | null;
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface NestedUserUpdateInput {
  googleImageUrl?: (Scalars['String'] | null) | null;
  lastName?: (Scalars['String'] | null) | null;
  email?: (Scalars['String'] | null) | null;
  firstName?: (Scalars['String'] | null) | null;
  password?: (Scalars['String'] | null) | null;
  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
  posts?: (PostHasManyInput | null)[];
  id: (Scalars['GadgetID'] | null);
};



export interface NestedUserDeleteInput {
  id: (Scalars['GadgetID'] | null);
};



export interface NestedUserSignOutInput {
  googleImageUrl?: (Scalars['String'] | null) | null;
  lastName?: (Scalars['String'] | null) | null;
  email?: (Scalars['String'] | null) | null;
  firstName?: (Scalars['String'] | null) | null;
  password?: (Scalars['String'] | null) | null;
  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
  posts?: (PostHasManyInput | null)[];
  id: (Scalars['GadgetID'] | null);
};



export interface NestedPostUpdateInput {
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: UserBelongsToInput | null;
  id: (Scalars['GadgetID'] | null);
};



export interface NestedPostDeleteInput {
  id: (Scalars['GadgetID'] | null);
};



export interface ConvergePostInput {
  /** The new list of records to converge to */
  values: (ConvergePostValues | null)[];
  /** An optional partial set of action api identifiers to use when creating, updating, and deleting records to converge to the new list. */
  actions?: ConvergeActionMap | null;
};



export interface ConvergePostValues {
  id?: (Scalars['GadgetID'] | null) | null;
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: UserBelongsToInput | null;
};



export interface ConvergeActionMap {
  /** One of the model action's API identifiers. Specifies which action to use to create new records that are in the set of specified records but not yet in the database. Defaults to the action named `create` if it exists. */
  create?: (Scalars['String'] | null) | null;
  /** One of the model action's API identifiers. Specifies which action to use to update new records that are in the set of specified records and already in the database, but maybe have different field values. Defaults to the action named `update` if it exists. */
  update?: (Scalars['String'] | null) | null;
  /** One of the model action's API identifiers. Specifies which action to use to delete records that are not in the set of specified records but exist in the database. Defaults to the action named `delete` if it exists. */
  delete?: (Scalars['String'] | null) | null;
};



export interface SignOutUserInput {
  googleImageUrl?: (Scalars['String'] | null) | null;
  lastName?: (Scalars['String'] | null) | null;
  email?: (Scalars['String'] | null) | null;
  firstName?: (Scalars['String'] | null) | null;
  password?: (Scalars['String'] | null) | null;
  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
  posts?: (PostHasManyInput | null)[];
};



export interface CreatePostInput {
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: UserBelongsToInput | null;
};



export interface UpdatePostInput {
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: UserBelongsToInput | null;
};



export interface InternalUserInput {
  state?: (Scalars['RecordState'] | null) | null;
  stateHistory?: (Scalars['RecordState'] | null) | null;
  id?: (Scalars['GadgetID'] | null) | null;
  createdAt?: Date | Scalars['ISO8601DateString'] | null;
  updatedAt?: Date | Scalars['ISO8601DateString'] | null;
  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];
  googleImageUrl?: (Scalars['String'] | null) | null;
  lastName?: (Scalars['String'] | null) | null;
  email?: (Scalars['String'] | null) | null;
  firstName?: (Scalars['String'] | null) | null;
  password?: (Scalars['String'] | null) | null;
  lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
};



export interface AppGraphQLTriggerMutationContext {
  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export interface InternalSessionInput {
  state?: (Scalars['RecordState'] | null) | null;
  stateHistory?: (Scalars['RecordState'] | null) | null;
  id?: (Scalars['GadgetID'] | null) | null;
  createdAt?: Date | Scalars['ISO8601DateString'] | null;
  updatedAt?: Date | Scalars['ISO8601DateString'] | null;
  user?: InternalBelongsToInput | null;
};



export interface InternalBelongsToInput {
  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export interface InternalPostInput {
  state?: (Scalars['RecordState'] | null) | null;
  stateHistory?: (Scalars['RecordState'] | null) | null;
  id?: (Scalars['GadgetID'] | null) | null;
  createdAt?: Date | Scalars['ISO8601DateString'] | null;
  updatedAt?: Date | Scalars['ISO8601DateString'] | null;
  title?: (Scalars['String'] | null) | null;
  content?: RichTextInput | null;
  wordCount?: (Scalars['Float'] | null) | null;
  isPublished?: (Scalars['Boolean'] | null) | null;
  user?: InternalBelongsToInput | null;
  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalPostAtomicsInput | null;
};



export interface InternalPostAtomicsInput {
  /** Numeric atomic commands for operating on wordCount. */
  wordCount?: (NumericAtomicFieldUpdateInput)[];
};



export interface NumericAtomicFieldUpdateInput {
  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;
  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export interface ExecutionError {
  __typename: 'SimpleError'|'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export interface InvalidFieldError {
  __typename: 'InvalidFieldError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export interface GadgetModel {
  __typename: 'GadgetModel';
  key: Scalars['String'];
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  filterable: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  searchable: Scalars['Boolean'];
  fields: GadgetField[];
  actions: GadgetAction[];
  pluralName: Scalars['String'];
  pluralApiIdentifier: Scalars['String'];
  currentSingletonApiIdentifier: (Scalars['String'] | null);
  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  fields?: AvailableGadgetFieldSelection;

  actions?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};



export interface GadgetField {
  __typename: 'GadgetField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: Scalars['String'];
  configuration: (GadgetFieldConfiguration | null);
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigurationSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;
};



export interface GadgetFieldConfiguration {
  __typename: 'GadgetFieldConfiguration';
  relatedModelKey: (Scalars['String'] | null);
};



export type AvailableGadgetFieldConfigurationSelection = {

  __typename?: boolean | null | undefined;

  relatedModelKey?: boolean | null | undefined;
};



export interface GadgetAction {
  __typename: 'GadgetAction';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  requiresInput: Scalars['Boolean'];
  acceptsInput: Scalars['Boolean'];
  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];
  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];
  isDeleteAction: Scalars['Boolean'];
  isCreateOrUpdateAction: Scalars['Boolean'];
  operatesWithRecordIdentity: Scalars['Boolean'];
  possibleTransitions: Scalars['JSONObject'];
  availableInBulk: Scalars['Boolean'];
  bulkApiIdentifier: (Scalars['String'] | null);
  triggers: GadgetTrigger[];
  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};



export interface GadgetTrigger {
  __typename: 'GadgetTrigger';
  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface GadgetActionGraphQLType {
  __typename: 'GadgetActionGraphQLType';
  exampleMutation: Scalars['String'];
  inputGraphQLTypeSDL: (Scalars['String'] | null);
  outputGraphQLTypeSDL: Scalars['String'];
  inputTypeScriptInterface: (Scalars['String'] | null);
  outputTypeScriptInterface: Scalars['String'];
  exampleBulkMutation: (Scalars['String'] | null);
  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  exampleMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleBulkMutation?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface Query {
  __typename: 'Query';
  user: (User | null);
  users: UserConnection;
  session: (Session | null);
  sessions: SessionConnection;
  post: (Post | null);
  posts: PostConnection;
  internal: (InternalQueries | null);
  currentSession: (Session | null);
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  user?: AvailableUserSelection;

  users?: AvailableUserConnectionSelection;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  post?: AvailablePostSelection;

  posts?: AvailablePostConnectionSelection;

  internal?: AvailableInternalQueriesSelection;

  currentSession?: AvailableSessionSelection;
};



export interface User {
  __typename: 'User';
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];
  roles: Role[];
  googleImageUrl: (Scalars['URL'] | null);
  lastName: (Scalars['String'] | null);
  email: Scalars['EmailAddress'];
  firstName: (Scalars['String'] | null);
  lastSignedIn: (Scalars['DateTime'] | null);
  posts: PostConnection;
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableUserSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  googleImageUrl?: boolean | null | undefined;

  lastName?: boolean | null | undefined;

  email?: boolean | null | undefined;

  firstName?: boolean | null | undefined;

  lastSignedIn?: boolean | null | undefined;

  posts?: AvailablePostConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export interface Role {
  __typename: 'Role';
  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];
  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};


/** A connection to a list of Post items. */
export interface PostConnection {
  __typename: 'PostConnection';
  /** A list of edges. */
  edges: PostEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailablePostConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailablePostEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Post connection. */
export interface PostEdge {
  __typename: 'PostEdge';
  /** The item at the end of the edge */
  node: Post;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailablePostEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailablePostSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface Post {
  __typename: 'Post';
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: RichText;
  wordCount: Scalars['Float'];
  isPublished: (Scalars['Boolean'] | null);
  user: (User | null);
  userId: (Scalars['GadgetID'] | null);
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailablePostSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  title?: boolean | null | undefined;

  content?: AvailableRichTextSelection;

  wordCount?: boolean | null | undefined;

  isPublished?: boolean | null | undefined;

  user?: AvailableUserSelection;

  userId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A snippet of text supporting rich formatting and access in a variety of formats */
export interface RichText {
  __typename: 'RichText';
  /** Unrendered content in the extended Markdown syntax */
  markdown: Scalars['String'];
  /** Rendered content as an HTML document */
  html: Scalars['String'];
  /** Truncated HTML string that is valid HTML with the appropriate closing tags but limited to a certain length. Suitable for displaying in tables or dense index pages. */
  truncatedHTML: Scalars['String'];
};



export type AvailableRichTextSelection = {

  __typename?: boolean | null | undefined;

  /** Unrendered content in the extended Markdown syntax */
  markdown?: boolean | null | undefined;

  /** Rendered content as an HTML document */
  html?: boolean | null | undefined;

  /** Truncated HTML string that is valid HTML with the appropriate closing tags but limited to a certain length. Suitable for displaying in tables or dense index pages. */
  truncatedHTML?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export interface PageInfo {
  __typename: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);
  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};


/** A connection to a list of User items. */
export interface UserConnection {
  __typename: 'UserConnection';
  /** A list of edges. */
  edges: UserEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableUserConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableUserEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a User connection. */
export interface UserEdge {
  __typename: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableUserEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableUserSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface Session {
  __typename: 'Session';
  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);
  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];
  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];
  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];
  user: (User | null);
  userId: (Scalars['GadgetID'] | null);
  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  user?: AvailableUserSelection;

  userId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export interface SessionConnection {
  __typename: 'SessionConnection';
  /** A list of edges. */
  edges: SessionEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export interface SessionEdge {
  __typename: 'SessionEdge';
  /** The item at the end of the edge */
  node: Session;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export interface InternalQueries {
  __typename: 'InternalQueries';
  user: (InternalUserRecord | null);
  listUser: InternalUserRecordConnection;
  session: (InternalSessionRecord | null);
  listSession: InternalSessionRecordConnection;
  post: (InternalPostRecord | null);
  listPost: InternalPostRecordConnection;
  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  user?: boolean | null | undefined;

  listUser?: AvailableInternalUserRecordConnectionSelection;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  post?: boolean | null | undefined;

  listPost?: AvailableInternalPostRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;
};


/** A connection to a list of InternalUserRecord items. */
export interface InternalUserRecordConnection {
  __typename: 'InternalUserRecordConnection';
  /** A list of edges. */
  edges: InternalUserRecordEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalUserRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalUserRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalUserRecord connection. */
export interface InternalUserRecordEdge {
  __typename: 'InternalUserRecordEdge';
  /** The item at the end of the edge */
  node: InternalUserRecord;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalUserRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export interface InternalSessionRecordConnection {
  __typename: 'InternalSessionRecordConnection';
  /** A list of edges. */
  edges: InternalSessionRecordEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export interface InternalSessionRecordEdge {
  __typename: 'InternalSessionRecordEdge';
  /** The item at the end of the edge */
  node: InternalSessionRecord;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalPostRecord items. */
export interface InternalPostRecordConnection {
  __typename: 'InternalPostRecordConnection';
  /** A list of edges. */
  edges: InternalPostRecordEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalPostRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalPostRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalPostRecord connection. */
export interface InternalPostRecordEdge {
  __typename: 'InternalPostRecordEdge';
  /** The item at the end of the edge */
  node: InternalPostRecord;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalPostRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export interface GadgetRole {
  __typename: 'GadgetRole';
  key: Scalars['String'];
  name: Scalars['String'];
  selectable: Scalars['Boolean'];
  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export interface GadgetGlobalAction {
  __typename: 'GadgetGlobalAction';
  apiIdentifier: Scalars['String'];
  requiresInput: Scalars['Boolean'];
  acceptsInput: Scalars['Boolean'];
  triggers: GadgetTrigger[];
  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export interface GadgetGlobalActionGraphQLType {
  __typename: 'GadgetGlobalActionGraphQLType';
  exampleMutation: Scalars['String'];
  inputGraphQLTypeSDL: (Scalars['String'] | null);
  outputGraphQLTypeSDL: Scalars['String'];
  inputTypeScriptInterface: (Scalars['String'] | null);
  outputTypeScriptInterface: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  exampleMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export interface DirectUploadToken {
  __typename: 'DirectUploadToken';
  /** The URL to upload a file to. */
  url: Scalars['String'];
  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};



export interface Mutation {
  __typename: 'Mutation';
  updateUser: (UpdateUserResult | null);
  deleteUser: (DeleteUserResult | null);
  bulkDeleteUsers: (BulkDeleteUsersResult | null);
  signOutUser: (SignOutUserResult | null);
  createPost: (CreatePostResult | null);
  updatePost: (UpdatePostResult | null);
  deletePost: (DeletePostResult | null);
  bulkDeletePosts: (BulkDeletePostsResult | null);
  internal: (InternalMutations | null);
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  updateUser?: AvailableUpdateUserResultSelection;

  deleteUser?: AvailableDeleteUserResultSelection;

  bulkDeleteUsers?: AvailableBulkDeleteUsersResultSelection;

  signOutUser?: AvailableSignOutUserResultSelection;

  createPost?: AvailableCreatePostResultSelection;

  updatePost?: AvailableUpdatePostResultSelection;

  deletePost?: AvailableDeletePostResultSelection;

  bulkDeletePosts?: AvailableBulkDeletePostsResultSelection;

  internal?: AvailableInternalMutationsSelection;
};



export interface UpdateUserResult {
  __typename: 'UpdateUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (User | null);
};



export type AvailableUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};



export interface DeleteUserResult {
  __typename: 'DeleteUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface BulkDeleteUsersResult {
  __typename: 'BulkDeleteUsersResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableBulkDeleteUsersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface SignOutUserResult {
  __typename: 'SignOutUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (User | null);
};



export type AvailableSignOutUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};



export interface CreatePostResult {
  __typename: 'CreatePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  post: (Post | null);
};



export type AvailableCreatePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  post?: AvailablePostSelection;
};



export interface UpdatePostResult {
  __typename: 'UpdatePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  post: (Post | null);
};



export type AvailableUpdatePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  post?: AvailablePostSelection;
};



export interface DeletePostResult {
  __typename: 'DeletePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableDeletePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface BulkDeletePostsResult {
  __typename: 'BulkDeletePostsResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableBulkDeletePostsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalMutations {
  __typename: 'InternalMutations';
  startTransaction: Scalars['String'];
  commitTransaction: Scalars['String'];
  rollbackTransaction: Scalars['String'];
  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;
  createUser: (InternalCreateUserResult | null);
  updateUser: (InternalUpdateUserResult | null);
  deleteUser: (InternalDeleteUserResult | null);
  deleteManyUser: (InternalDeleteManyUserResult | null);
  bulkCreateUsers: (InternalBulkCreateUsersResult | null);
  triggerUpdateUser: (UpdateUserResult | null);
  triggerDeleteUser: (DeleteUserResult | null);
  triggerSignUpUser: (SignUpUserResult | null);
  triggerSignInUser: (SignInUserResult | null);
  triggerSignOutUser: (SignOutUserResult | null);
  createSession: (InternalCreateSessionResult | null);
  updateSession: (InternalUpdateSessionResult | null);
  deleteSession: (InternalDeleteSessionResult | null);
  deleteManySession: (InternalDeleteManySessionResult | null);
  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);
  createPost: (InternalCreatePostResult | null);
  updatePost: (InternalUpdatePostResult | null);
  deletePost: (InternalDeletePostResult | null);
  deleteManyPost: (InternalDeleteManyPostResult | null);
  bulkCreatePosts: (InternalBulkCreatePostsResult | null);
  triggerCreatePost: (CreatePostResult | null);
  triggerUpdatePost: (UpdatePostResult | null);
  triggerDeletePost: (DeletePostResult | null);
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createUser?: AvailableInternalCreateUserResultSelection;

  updateUser?: AvailableInternalUpdateUserResultSelection;

  deleteUser?: AvailableInternalDeleteUserResultSelection;

  deleteManyUser?: AvailableInternalDeleteManyUserResultSelection;

  bulkCreateUsers?: AvailableInternalBulkCreateUsersResultSelection;

  triggerUpdateUser?: AvailableUpdateUserResultSelection;

  triggerDeleteUser?: AvailableDeleteUserResultSelection;

  triggerSignUpUser?: AvailableSignUpUserResultSelection;

  triggerSignInUser?: AvailableSignInUserResultSelection;

  triggerSignOutUser?: AvailableSignOutUserResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  createPost?: AvailableInternalCreatePostResultSelection;

  updatePost?: AvailableInternalUpdatePostResultSelection;

  deletePost?: AvailableInternalDeletePostResultSelection;

  deleteManyPost?: AvailableInternalDeleteManyPostResultSelection;

  bulkCreatePosts?: AvailableInternalBulkCreatePostsResultSelection;

  triggerCreatePost?: AvailableCreatePostResultSelection;

  triggerUpdatePost?: AvailableUpdatePostResultSelection;

  triggerDeletePost?: AvailableDeletePostResultSelection;
};



export interface LockOperationResult {
  __typename: 'LockOperationResult';
  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];
  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export interface InternalCreateUserResult {
  __typename: 'InternalCreateUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (InternalUserRecord | null);
};



export type AvailableInternalCreateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export interface InternalUpdateUserResult {
  __typename: 'InternalUpdateUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (InternalUserRecord | null);
};



export type AvailableInternalUpdateUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export interface InternalDeleteUserResult {
  __typename: 'InternalDeleteUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (InternalUserRecord | null);
};



export type AvailableInternalDeleteUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: boolean | null | undefined;
};



export interface InternalDeleteManyUserResult {
  __typename: 'InternalDeleteManyUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateUsersResult {
  __typename: 'InternalBulkCreateUsersResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  users: (InternalUserRecord | null)[];
};



export type AvailableInternalBulkCreateUsersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  users?: boolean | null | undefined;
};



export interface SignUpUserResult {
  __typename: 'SignUpUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (User | null);
};



export type AvailableSignUpUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};



export interface SignInUserResult {
  __typename: 'SignInUserResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  user: (User | null);
};



export type AvailableSignInUserResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  user?: AvailableUserSelection;
};



export interface InternalCreateSessionResult {
  __typename: 'InternalCreateSessionResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalUpdateSessionResult {
  __typename: 'InternalUpdateSessionResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalDeleteSessionResult {
  __typename: 'InternalDeleteSessionResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export interface InternalDeleteManySessionResult {
  __typename: 'InternalDeleteManySessionResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreateSessionsResult {
  __typename: 'InternalBulkCreateSessionsResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export interface InternalCreatePostResult {
  __typename: 'InternalCreatePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  post: (InternalPostRecord | null);
};



export type AvailableInternalCreatePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  post?: boolean | null | undefined;
};



export interface InternalUpdatePostResult {
  __typename: 'InternalUpdatePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  post: (InternalPostRecord | null);
};



export type AvailableInternalUpdatePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  post?: boolean | null | undefined;
};



export interface InternalDeletePostResult {
  __typename: 'InternalDeletePostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  post: (InternalPostRecord | null);
};



export type AvailableInternalDeletePostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  post?: boolean | null | undefined;
};



export interface InternalDeleteManyPostResult {
  __typename: 'InternalDeleteManyPostResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyPostResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export interface InternalBulkCreatePostsResult {
  __typename: 'InternalBulkCreatePostsResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  posts: (InternalPostRecord | null)[];
};



export type AvailableInternalBulkCreatePostsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  posts?: boolean | null | undefined;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };