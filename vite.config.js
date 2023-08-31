/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// set up test config to read from .env.local
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  test: {
    setupFiles: ["dotenv/config"],
    mockReset: true,
  },
});
