// All the generated types for the "post" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Post } from "@gadget-client/unit-test-sample";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultPostServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly title: true;
      readonly content: true;
      readonly wordCount: true;
      readonly isPublished: true;
      readonly userId: true;
    readonly user: false;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `post` model. */
export interface CreatePostActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `post` record this action is operating on.
  */
  record: GadgetRecord<Select<Post, DefaultPostServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CreatePostActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `post` model. */
export interface UpdatePostActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `post` record this action is operating on.
  */
  record: GadgetRecord<Select<Post, DefaultPostServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdatePostActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `post` model. */
export interface DeletePostActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `post` record this action is operating on.
  */
  record: GadgetRecord<Select<Post, DefaultPostServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: DeletePostActionContext;
};


  