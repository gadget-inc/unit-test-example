import { describe, expect, it, vi } from "vitest";
import renderer from "react-test-renderer";
import SignedIn from "../../../frontend/routes/signed-in";

// Gadget React hooks, such as useUser and useFindMany, can be mocked to return data
const mocks = vi.hoisted(() => {
  const defaultUser = {
    id: 0,
    email: "test@gmail.com",
    firstName: "Carl",
    lastName: "Weathers",
  };

  return {
    useUser: () => defaultUser,
    // vi.fn() allows us to set mock values in individual tests!
    useFindMany: vi.fn(),
  };
});

// mock the dependency using the hoisted mocks defined above
vi.mock("@gadgetinc/react", () => {
  return {
    useUser: mocks.useUser,
    useFindMany: mocks.useFindMany,
  };
});

// mock the api client in the file tree
vi.mock("../../../frontend/api", () => {
  return {
    api: {
      user: {},
      post: {},
    },
  };
});

// this is an example mocking out the Gadget API client and useUser hook
describe("snapshot test for frontend/routes/signed-in.jsx", () => {
  it("should render the default page for signed-in users", () => {
    // Provide mock data for the useFindMany
    mocks.useFindMany.mockReturnValue([
      {
        data: [
          {
            id: 1,
            title: "Test post",
          },
        ],
        fetching: false,
        error: null,
      },
    ]);

    const tree = renderer.create(<SignedIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render the loading message for signed-in users", () => {
    // Provide mock data for the useFindMany
    mocks.useFindMany.mockReturnValue([
      {
        data: null,
        fetching: true,
        error: null,
      },
    ]);

    const tree = renderer.create(<SignedIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
