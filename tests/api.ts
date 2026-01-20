// Test API client setup for making requests to your Gadget backend
// This client uses the GADGET_API_KEY from your .env file for authentication
import { Client } from "@gadget-client/unit-test-scaffold-template";

// Create a test API client instance
// The API key is loaded from .env via dotenv/config in vite.config.mts
// environment: "Development" tells the client to connect to your Development environment
// Change to "Production" once your app is deployed
export const api = new Client({
  environment: process.env.GADGET_ENVIRONMENT,
  authenticationMode: {
    apiKey: process.env.GADGET_API_KEY,
    dangerouslyAllowBrowserApiKey: true, // allow the API client to be used in non-Node settings (like vitest)
  },
});
