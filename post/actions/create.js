import { applyParams, save, ActionOptions, CreatePostActionContext } from "gadget-server";
import { getWordCount } from "../utils/getWordCount";

/**
 * @param { CreatePostActionContext } context
 */
export async function run({ params, record, logger, api }) {
  applyParams(params, record);
  // use getWordCount util before saving record to db
  record.wordCount = getWordCount(record.content?.markdown)
  await save(record);
};

/**
 * @param { CreatePostActionContext } context
 */
export async function onSuccess({ params, record, logger, api }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
