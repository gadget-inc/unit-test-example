/**
* This is the Gadget API client library for:
*
*   _   _       _ _     _____         _     ____                        _
*  | | | |_ __ (_) |_  |_   _|__  ___| |_  / ___|  __ _ _ __ ___  _ __ | | ___
*  | | | | '_ \| | __|   | |/ _ \/ __| __| \___ \ / _` | '_ ` _ \| '_ \| |/ _ \
*  | |_| | | | | | |_    | |  __/\__ \ |_   ___) | (_| | | | | | | |_) | |  __/
*   \___/|_| |_|_|\__|   |_|\___||___/\__| |____/ \__,_|_| |_| |_| .__/|_|\___|
*                                                                |_|
*
* Built for environment "Development" at version 847
* API docs: https://docs.gadget.dev/api/unit-test-sample
* Edit this app here: https://unit-test-sample.gadget.dev/edit
*/
export { GadgetConnection, GadgetRecord, GadgetRecordList, GadgetInternalError, GadgetClientError, GadgetOperationError, InvalidRecordError, GadgetValidationError, BrowserSessionStorageType } from "@gadgetinc/api-client-core";
export type { ClientOptions, BrowserSessionAuthenticationModeOptions, InvalidFieldError, AuthenticationModeOptions, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
        };
    }
}
