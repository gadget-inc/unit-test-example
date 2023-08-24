import { applyParams, save, ActionOptions, SignUpUserActionContext } from "gadget-server";

/**
 * @param { SignUpUserActionContext } context
 */
export async function run({ params, record, logger, api, session }) {
  applyParams(params, record);
  record.lastSignedIn = new Date();
  await save(record);

  // associate the current user record with the active session
  session?.set("user", { _link: record.id });
};

/**
 * @param { SignUpUserActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};