import { expect, test } from "vitest";
import { getWordCount } from "../../../post/utils/getWordCount";

// this is how you test helper or util functions
test("should get the word count (2) on the passed-in string", () => {
  expect(getWordCount("Hello, world!")).toBe(2);
});

test("should return 0 for empty string", () => {
  expect(getWordCount("")).toBe(0);
});
