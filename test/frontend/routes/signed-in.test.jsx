import { beforeAll, describe, expect, it, vi } from "vitest";
import renderer from "react-test-renderer";
import SignedIn from "../../../frontend/routes/signed-in";

const defaultUser = {
  id: 0,
  email: "test@gmail.com",
  firstName: "Carl",
  lastName: "Weathers",
};

// this is an example mocking out the Gadget API client and useUser hook
describe("snapshot test for frontend/routes/signed-in.jsx", () => {
  beforeAll(() => {
    // mock the api client in the file tree
    vi.mock("../../../frontend/api", () => {
      return {
        api: {
          // alternative option: replace this mock with the test api and run full-stack integration tests
          // you could wipe the db using api.post.deleteMany() to reset the db, then create one or more post records before capturing snapshots
          user: {},
          post: {},
        },
      };
    });
  });

  it("should render the default page for signed-in users", () => {
    // Gadget React hooks, such as useUser and useFindMany, can be mocked to return data
    vi.mock("@gadgetinc/react", () => {
      return {
        useUser: () => defaultUser,
        useFindMany: () => {
          return [
            {
              data: [
                {
                  id: 1,
                  title: "Test post"
                },
              ],
              fetching: false,
              error: null,
            },
          ];
        },
      };
    });

    const tree = renderer.create(<SignedIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render the loading message for signed-in users", () => {
    // Gadget React hooks, such as useUser and useFindMany, can be mocked to return data
    vi.mock("@gadgetinc/react", () => {
      return {
        useUser: () => defaultUser,
        // returned values for useFindMany hooks can be mocked in individual tests to produce different snapshots
        useFindMany: () => {
          return [
            {
              data: null,
              fetching: true,
              error: null,
            },
          ];
        },
      };
    });

    const tree = renderer.create(<SignedIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

