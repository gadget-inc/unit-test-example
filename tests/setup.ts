import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Cleanup the DOM after each test
afterEach(() => {
  cleanup();
});
