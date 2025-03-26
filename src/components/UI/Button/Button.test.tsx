import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders button with aria-label", () => {
    render(<Button aria-label="Click Me">Text Inside</Button>);

    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).not.toBeNull();
    expect(button.getAttribute("aria-label")).toBe("Click Me");
    expect(button.textContent).toBe("Text Inside");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button aria-label="Click Me" onClick={handleClick}>Text Inside</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has disabled attribute when disabled", () => {
    render(<Button aria-label="Disabled Button" disabled>Text</Button>);

    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button.hasAttribute("disabled")).toBe(true);
  });
});
