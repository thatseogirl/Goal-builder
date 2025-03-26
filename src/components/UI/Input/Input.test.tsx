import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders input with associated label", () => {
    render(<Input id="goal" label="Your Goal" />);
    const input = screen.getByLabelText("Your Goal");
    
    expect(input).not.toBeNull();
    expect(input.getAttribute("id")).toBe("goal");
  });

  it("updates value when typed into", () => {
    render(<Input id="goal" label="Your Goal" />);
    const input = screen.getByLabelText("Your Goal") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Learn Redux" } });

    expect(input.value).toBe("Learn Redux");
  });

  it("accepts and renders placeholder text", () => {
    render(
      <Input
        id="summary"
        label="Summary"
        placeholder="Enter short summary"
      />
    );
    const input = screen.getByPlaceholderText("Enter short summary");

    expect(input).not.toBeNull();
    expect(input.getAttribute("placeholder")).toBe("Enter short summary");
  });
});
