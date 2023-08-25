import { describe, expect, test, beforeAll } from "vitest";
import { api, unauthenticatedApi } from "../../api";

// this is an example of testing a Gadget action
// it makes an API call to the action using a test API client and adds records to the database
// you can use this pattern to test model actions and global actions in Gadget
describe("test the post.create action", () => {
  beforeAll(async () => {
    // cleanup: delete all post records with name: "Unit Test Post" from old test runs
    // you can use await api.internal.post.deleteMany() with no args to wipe the development db (make sure your API client is set to the Development environment)
    await api.internal.post.deleteMany({
      filter: { title: { equals: "Unit Test Post" } },
    });
  });

  test("should create a new post record", async () => {
    const result = await api.post.create({
      title: "Unit Test Post",
      content: {
        markdown: "This is a test post",
      },
    });
    expect(result.id).toBeDefined();
    expect(result.title).toBe("Unit Test Post");
    expect(result.content).toMatchObject({
      markdown: "This is a test post",
      truncatedHTML: "<p>This is a test post</p> ",
    });
    expect(result.wordCount).toBe(5);
  });

  // test with an unauthenticated user, should throw a GGT_PERMISSION_DENIED error
  test("should throw error for unauthenticated user", async () => {
    await expect(
      unauthenticatedApi.post.create({
        title: "Unit Test Post",
        content: {
          markdown: "This is a test post",
        },
      })
    ).rejects.toThrowError("GGT_PERMISSION_DENIED");
  });
});
