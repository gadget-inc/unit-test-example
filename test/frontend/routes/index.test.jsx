import { describe, expect, it } from "vitest";
import renderer from "react-test-renderer";
import Index from "../../../frontend/routes/index";

// a simple example of a snapshot test
// this is similar to testing basic React components that do not require mocks
describe("snapshot test for frontend/routes/index.jsx", () => {
  it("should render the Index component", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
