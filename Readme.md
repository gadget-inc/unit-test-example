# Example: unit testing your Gadget app

This is a example of a Gadget app with unit tests.

[Vitest](https://vitest.dev/) is used as a unit test runner because it works nicely with Vite, which is used to power Gadget app frontends.

You can [fork this project](https://app.gadget.dev/auth/fork?domain=unit-test-sample--development.gadget.app) to try it out yourself. 

## Getting started

The following packages have been installed, and can be found in this project's `package.json`:
- [`vitest`](https://vitest.dev/): the test runner, fully compatible with Vite
- [`dotenv`](https://github.com/motdotla/dotenv): used to import environment variables defined in a `.env.local`
- [`react-test-renderer`](https://www.npmjs.com/package/react-test-renderer): used for snapshot testing

A `test` folder has been added to the project root. This folder contains sample test files for:

- **model actions**: see `test/post/actions/create.test.js`
- **util functions**: see `test/post/utils/getWordCount.js`
- **HTTP routes**: see `test/routes/GET-hello.test.js`
- **frontends (snapshot testing)**: see `test/frontend/routes/index.test.jsx` for a simple example and `test/frontend/routes/signed-in.test.jsx` for an example with API client and React hook mocks

## Set up unit tests in your Gadget app

1. Use FileSync to pull your Gadget project's code files to your local machine
2. Install the required packages (`yarn add vitest dotenv react-test-renderer`)
3. Add a `test` script to `package.json`
```json
"scripts": {
  "vite:build": "NODE_ENV=production vite build",
  "test": "vitest"
}
```
4. Modify your `vite.config.js` to include `test` config for vitest
```js
/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// set up test config to read from .env.local
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.local" });

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  test: { // <-- this test config is added to the defineConfig function so env vars inside .env.local are available
    setupFiles: ["dotenv/config"],
  },
});
```
5. Create a `.ignore` file at the root-level of your Gadget project (this prevents local files from being synced to the Gadget editor with FileSync)
6. Add `.env.local` to your `.ignore` file
7. Create a `.env.local` file at the root-level of your Gadget project
8. In the Gadget web editor, go to the API key page (Settings -> API Keys) and create a new key (assign it the role you wish to test)
9. Copy the API key for the Development environment and add it as an environment variable in your local `.env.local` file
```
// example entry in .env.local
GADGET_TEST_API_KEY=gsk-12121212121212121212121212121212
```
10. Create a test API client for the Development environment somewhere in your project (this sample project uses `test/api.js`)
```js
// make sure to replace "@gadget-client/unit-test-sample" with your Gadget API client!
import { Client } from "@gadget-client/unit-test-sample";

// an API client created using the GADGET_TEST_API_KEY environment variable
export const api = new Client({
  environment: "Development",
  authenticationMode: {
    apiKey: process.env.GADGET_TEST_API_KEY,
  },
});

// an API client created without an API key will have the unauthenticated role
export const unauthenticatedApi = new Client({ environment: "Development" });
```
11. Import an API client into one of your test files to test out model actions, global actions, and HTTP routes.

## Using GitHub Actions to run tests

Coming soon...

## App overview

### Template

This app is built using the **Web app** starter template.

### Data modeling + template overview

A sample `post` model has been added to this app to demonstrate testing model actions in Gadget.

- `post`: stores blog post records with the following fields
  - `title` is the blog post title (string field)
  - `content` is the content of the blog post (rich text field)
  - `wordCount` is the count of words in a post (number field)
  - `isPublished` whether or not the post has been publicly published (boolean field)
  - `user` the author of the post (belongs-to relationship)

#### Template default models

- `user`
   - keeps track of all users who have signed up
   - added relationship to `post` model so that `user` has many `posts`
- `session`
  - keeps track of user sessions

### Environment variables

No environment variables have been added to the Gadget project (Settings -> Environment Variables in the Gadget editor).

A .env.local file is required for this project, which contains a `GADGET_TEST_API_KEY=your-api-key` environment variable used to initialized test API clients found in `test/api.js`.

### Backend (actions + code)

A `post` model has been added to this project to provide an example of testing Gadget actions and standalone util functions
  - `post/actions/create.js`: custom code added to the `run` function to calculate the word count
    - tests found in `test/post/actions/create.test.js`
  - `post/utils/getWordCount.js`: a simple util to calculate the word count of an input string
    - tests found in `test/post/utils/getWordCount.test.js`

The template's default `GET-hello.js` HTTP route is used to illustrate the testing of an HTTP route.
  - `routes/GET-hello.js` returns a `{hello: "world"}` object
    - test found in `test/routes/GET-hello.test.js`

### Access roles + API permissions

A custom API key for this project was created with the `system-admin` role. This API key is used as an environment variable inside a `.env.local` file and powers the test API clients.

### Frontend

This app uses the Web app template's standard frontend, with a minor addition to `frontend/routes/signed-in.jsx` to demonstrate the mocking of a useFindMany hook.

Key files:
- `frontend/routes/index.jsx` the default page, similar to a simple React component
  - snapshot test found in `test/frontend/routes/index.test.jsx`
- `frontend/routes/signed-in.jsx` the page for a signed-in user
  - snapshot tests found in `test/frontend/route/signed-in.jsx`

## Extending this template

Once you have your .env.local environment variables and API client set up, you can test your Gadget project like you would any other Node/React project.

## Questions?

Join our [developer Discord](https://ggt.link/discord) if you have any questions about this sample or writing unit tests in Gadget!