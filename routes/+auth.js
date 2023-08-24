import { Auth } from "@gadgetinc/auth";
import { api } from "gadget-server";

export default function (server) {
  server.register(Auth, {
    /** Gadget will manage your OAuth credentials to avoid you needing to set this up initially, should be disabled when in Production */
    gadgetManagedCredentials: true,
    api,
    providers: [
      {
        type: "google",
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        /**
         * These are non-restricted scopes that are supported with Gadget-managed credentials. If your app needs more scopes, you need to use `gadgetManagedCredentials: false`
         * and set up your own OAuth credentials
         */
        scopes: ["email", "profile"],
        /**
         * This path should not be changed and will be relative to your application's environment. If you are not using Gadget-managed credentials
         * this path, relative to your environment's domain, will need to be configured in your Google oauth client allowed redirect URIs.
         */
        callbackPath: '/auth/google/callback',
        /**
         * The path, relative to your environment, to redirect to once OAuth has completed successfully. If a `redirectTo` query parameter is provided when kicking off OAuth, it will take precedence. Defaults to `/`.
         */
        redirectTo: "/",
      },
    ],
    /**
     * This is the path that's redirected to if an unauthenticated request is made to one of your server-side protected routes (in the root /routes folder).
     */
    signInPath: "/",
    /**
     * Configures whether or not your app will respond with a 403 (`false`), or redierct to the `signInPath` (`true`) when an unauthenticated request is made to one of your server-side protected routes.
     */
    redirectToSignIn: true,
  });
}