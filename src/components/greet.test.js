import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet component", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const h1Element = screen.getByRole("heading", {
      name: "Hello",
    });

    expect(h1Element).toBeInTheDocument();
  });

  test("renders with prop", () => {
    render(<Greet name={"Ram"} />);
    const h1Element = screen.getByText(/Hello Ram/i);
    expect(h1Element).toBeInTheDocument();
  });
});
