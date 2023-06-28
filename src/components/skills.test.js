import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./skills";

describe("skills component", () => {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ];

  test("correctly renders skills", () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });
  test("renders the list item correctly", () => {
    render(<Skills skills={skills} />);
    const itemElem = screen.getAllByRole("listitem");
    expect(itemElem).toHaveLength(3);
    expect(itemElem[0]).toHaveTextContent(/html/i);
  });
});
