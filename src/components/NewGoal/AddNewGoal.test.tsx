import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../../store/form/formSlice";
import goalsReducer from "../../store/goals/goalsSlice";
import AddNewGoal from "./AddNewGoal";

describe("AddNewGoal", () => {
  const preloadedState = {
    form: {
      goal: "",
      summary: "",
    },
    goals: {
      goals: [],
    },
  };

  const renderComponent = () => {
    const store = configureStore({
      reducer: {
        form: formReducer,
        goals: goalsReducer,
      },
      preloadedState,
    });

    return {
      ...render(
        <Provider store={store}>
          <AddNewGoal />
        </Provider>
      ),
      store,
    };
  };

  it("renders form fields and submit button", () => {
    renderComponent();

    expect(screen.getByLabelText(/Enter your Goal/i)).toBeTruthy();
    expect(screen.getByLabelText(/short summary/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /submit/i })).toBeTruthy();
  });
});
