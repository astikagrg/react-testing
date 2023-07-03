import { logRoles, render, screen } from "@testing-library/react";
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

  test("should show login button",()=>{
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", {name: 'login'});
    expect(loginBtn).toBeInTheDocument();
  })
  test("should not show start button",()=>{
    render(<Skills skills={skills} />);
    const startBtn = screen.queryByRole("button", {name: 'start'});
    expect(startBtn).not.toBeInTheDocument();
  })

  // 1 aec ley vyauni type ko matra
  test("should show start button after 0.5s", async()=>{
    // jest.useFakeTimers();
    render(<Skills skills={skills} />);
    // const loginBtn = screen.getByRole("button", {name: 'login'});
    // loginBtn.click();
    // jest.advanceTimersByTime(500);

    //finds item asynchronously
    const startBtn = await screen.findByRole("button", {name: 'start'},{timeout:4500});
    expect(startBtn).toBeInTheDocument();
  })
});
