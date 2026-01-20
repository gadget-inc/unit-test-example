import { describe, expect, test } from "vitest";
import { api } from "../../api";

// Test HTTP routes by calling api.fetch()
describe("test GET-hello HTTP route", () => {
  test("should return 200 status code", async () => {
    const response = await api.fetch("/");
    expect(response.status).toBe(200);
  });
});
