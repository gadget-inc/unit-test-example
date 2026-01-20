import { describe, expect, test } from "vitest";

describe("environment setup", () => {
  test("dotenv loads .env.local file", () => {
    // Verify dotenv/config is working
    expect(process.env.GADGET_API_KEY).not.toBeUndefined();
    expect(process.env.GADGET_API_KEY).not.toBeFalsy();
  });
});
