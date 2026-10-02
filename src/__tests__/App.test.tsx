import { render } from "@testing-library/react";

import App from "../App";

vi.mock("pixi.js", () => ({
  Application: class {
    canvas = document.createElement("canvas");
    init = () => Promise.resolve();
    destroy = () => {};
  },
}));

describe("App", () => {
  it("renders", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
});
