import { render, screen } from "@testing-library/react";
import Users from "./users";

describe("Users", () => {
  test("should render users", () => {
    render(<Users />);
    const h1Elem = screen.getByRole("heading", { level: 1 });
    expect(h1Elem).toBeInTheDocument();
  }),
    test("should show a list of users", async () => {
      render(<Users />);

      const userList = await screen.findAllByRole("listitem");
      expect(userList).toHaveLength(10);
    });
});
