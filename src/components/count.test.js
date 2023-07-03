import { render } from "@testing-library/react";
import Counter from "./counter";
import userEvent from "@testing-library/user-event";

describe("count component", () => {
  test("should render count component", () => {
    render(<Counter />);
    const h1Element = screen.getByRole("heading", { level: 1 });

    const increaseButton = screen.getByRole("button", { name: /add/i });
    expect(increaseButton).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent(/0/i);
  });
  test("should increase count by 1 on click", async () => {
    render(<Counter />);
    const h1Element = screen.getByRole("heading", { level: 1 });

    const increaseButton = screen.getByRole("button", { name: /add/i });
    await act(() => userEvent.click(increaseButton));
    expect(h1Element).toHaveTextContent(/1/i);
  })
  
});
