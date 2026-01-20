import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://unit-test-scaffold-template.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "8KW6F1sRZL0r",
  fields: {
    user: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "e85u2OD5w4I2",
    },
  },
};
