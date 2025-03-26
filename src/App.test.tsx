import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import goalsReducer from "./store/goals/goalsSlice";
import formReducer from "./store/form/formSlice";

describe("App", () => {
  const preloadedState = {
    goals: {
      goals: [
        { id: 1, title: "React", description: "Learn hooks" },
        { id: 2, title: "TypeScript", description: "Type everything" },
      ],
    },
    form: {
      goal: "",
      summary: "",
    },
  };

  const renderApp = () => {
    const store = configureStore({
      reducer: {
        goals: goalsReducer,
        form: formReducer,
      },
      preloadedState,
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    return store;
  };

  it("renders header, form, and list items", () => {
    renderApp();

    // Header and Image
    expect(screen.getByRole("heading", { name: /your learning goals/i })).toBeTruthy();
    expect(screen.getByAltText(/study image/i)).toBeTruthy();

    // Form fields
    expect(screen.getByLabelText(/your goal/i)).toBeTruthy();
    expect(screen.getByLabelText(/short summary/i)).toBeTruthy();

    // Existing goals
    expect(screen.getByText("React")).toBeTruthy();
    expect(screen.getByText("Learn hooks")).toBeTruthy();
    expect(screen.getByText("TypeScript")).toBeTruthy();
  });

  it("adds a new goal when form is submitted", () => {
    const store = renderApp();

    fireEvent.change(screen.getByLabelText(/your goal/i), {
      target: { value: "Test Jest" },
    });
    fireEvent.change(screen.getByLabelText(/short summary/i), {
      target: { value: "Write test case" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // The new goal should now be rendered
    expect(screen.getByText("Test Jest")).toBeTruthy();
    expect(screen.getByText("Write test case")).toBeTruthy();
  });
});
