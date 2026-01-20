import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://unit-test-scaffold-template.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "DataModel-AppAuth-User",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "IyVl52m68Su-",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "cw0z6mwdyR7l",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "4U7XvyhFvLK3",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "6k4XT6jM6Eg_",
    },
    firstName: { type: "string", storageKey: "ev5i7qdqoVjg" },
    googleImageUrl: { type: "url", storageKey: "om2jxHMEHGmq" },
    googleProfileId: { type: "string", storageKey: "8CMvED3wSxjB" },
    lastName: { type: "string", storageKey: "06swR0utKND0" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Q-QhOMjO3_Pk",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "ZYNgoiplNw4O",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "BWqp1obzNH73",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "NOUOEWLJCiPe",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "qwOkbfoPaXpQ",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "RRIOxYVWDUp1",
    },
  },
};
