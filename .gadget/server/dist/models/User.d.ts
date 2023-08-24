import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ActionTrigger } from "../types";
import { GadgetRecord, User } from "@gadget-client/unit-test-sample";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultUserServerSelection = {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly roles: true;
    readonly googleImageUrl: true;
    readonly lastName: true;
    readonly email: true;
    readonly firstName: true;
    readonly password: true;
    readonly lastSignedIn: true;
    readonly posts: false;
};
/** All the data passed to an effect or precondition within the `update` action on the `user` model. */
export interface UpdateUserActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `user` record this action is operating on.
    */
    record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
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
    context: UpdateUserActionContext;
}
/** All the data passed to an effect or precondition within the `delete` action on the `user` model. */
export interface DeleteUserActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `user` record this action is operating on.
    */
    record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
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
    context: DeleteUserActionContext;
}
/** All the data passed to an effect or precondition within the `signUp` action on the `user` model. */
export interface SignUpUserActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `user` record this action is operating on.
    */
    record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
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
    context: SignUpUserActionContext;
}
/** All the data passed to an effect or precondition within the `signIn` action on the `user` model. */
export interface SignInUserActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `user` record this action is operating on.
    */
    record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
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
    context: SignInUserActionContext;
}
/** All the data passed to an effect or precondition within the `signOut` action on the `user` model. */
export interface SignOutUserActionContext extends AmbientContext {
    /**
    * The model of the record this action is operating on
    */
    model: NotYetTyped;
    /**
    * The `user` record this action is operating on.
    */
    record: GadgetRecord<Select<User, DefaultUserServerSelection>>;
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
    context: SignOutUserActionContext;
}
