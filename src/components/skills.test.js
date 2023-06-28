import { render, screen } from "@testing-library/react";
import skills from "./skills";

describe("skills component", () => {
  const skills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
  ];

  test("correctly renders skills", () => {
    render(<skills skills={skills} />);
    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });
});
