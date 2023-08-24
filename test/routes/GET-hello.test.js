import { describe, expect, test } from "vitest";
import { api } from "../api";

// use a test API client to make a real HTTP request to the route by calling api.fetch()
describe("test GET-hello HTTP route", () => {
  test("should return hello: world", async () => {
    const response = await api.fetch("/hello");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ hello: "world" });
  });
});
