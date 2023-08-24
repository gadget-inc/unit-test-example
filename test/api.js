import { Client } from "@gadget-client/unit-test-sample";

export const api = new Client({
  environment: "Development",
  authenticationMode: {
    apiKey: process.env.GADGET_TEST_API_KEY,
  },
});

export const unauthenticatedApi = new Client({ environment: "Development" });
