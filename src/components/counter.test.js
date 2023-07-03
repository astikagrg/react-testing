import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Counter from "./counter";

describe("counter", () => {
  test("should render correctly", () => {
    render(<Counter />);
    const h1Elem = screen.getByRole("heading", {
      level: 1,
    });
    const increaseBtn = screen.getByRole("button", {
      name: "Increment",
    });

    expect(h1Elem).toBeInTheDocument();
    expect(h1Elem).toHaveTextContent(0);
    expect(increaseBtn).toBeInTheDocument();
  });

  test("should increment count by 1", async () => {
    render(<Counter />);
    const h1Elem = screen.getByRole("heading", {
      level: 1,
    });
    const increaseBtn = screen.getByRole("button", {
      name: "Increment",
    });

    await act(() => userEvent.click(increaseBtn));
    expect(h1Elem).toHaveTextContent(1);
  });

    test("should set count to user defined", async () => {
    const view = render(<Counter />);
    logRoles(view.container)
    const h1Elem = screen.getByRole("heading", {
        level: 1,
    })
    const increaseBtn = screen.getByRole("button", {
        name: "Increment",
    })

    const setBtn = screen.getByRole("button", {
        name: "set",
    })

    const inputElem = screen.getByRole("spinbutton")

    await act(()=> userEvent.type(inputElem, '10'))
    await act(()=> userEvent.click(setBtn))
    expect(h1Elem).toHaveTextContent(10)

    await act(()=> userEvent.click(increaseBtn))
    expect(h1Elem).toHaveTextContent(11)
    })

    test("should have the proper focus",()=>{
        render(<Counter/>)
        const increaseBtn = screen.getByRole("button", {
            name: "Increment",
        })
    
        const setBtn = screen.getByRole("button", {
            name: "set",
        })
    
        const inputElem = screen.getByRole("spinbutton")

        userEvent.tab()
        expect(increaseBtn).toHaveFocus()
        userEvent.tab()
        expect(inputElem).toHaveFocus()
        userEvent.tab()
        expect(setBtn).toHaveFocus()
    })
});
