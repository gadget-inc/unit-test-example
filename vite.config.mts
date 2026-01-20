/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import { reactRouter } from "@react-router/dev/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";

const isTest = process.env.VITEST === "true";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  // Use react plugin for tests (JSX transform), reactRouter for builds
  plugins: isTest ? [gadget(), react()] : [gadget(), reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./web"),
    },
  },
  test: {
    // reset mocks between tests
    setupFiles: ["dotenv/config", "./tests/setup.ts"],
    mockReset: true,
    environment: "jsdom",
  },
});
