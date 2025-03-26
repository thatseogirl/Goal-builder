import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CourseGoalListItem from "./CourseGoalList";
import goalsReducer from "../../store/goals/goalsSlice";
import formReducer from "../../store/form/formSlice";

describe("CourseGoalListItem", () => {
  const preloadedState = {
    goals: {
      goals: [
        {
          id: 1,
          title: "Learn React",
          description: "Understand hooks and JSX",
        },
        {
          id: 2,
          title: "Practice TypeScript",
          description: "Typing everything",
        },
      ],
    },
    form: {
      goal: "",
      summary: "",
    },
  };

  const renderWithStore = () => {
    const store = configureStore({
      reducer: {
        goals: goalsReducer,
        form: formReducer,
      },
      preloadedState,
    });

    return {
      store,
      ...render(
        <Provider store={store}>
          <CourseGoalListItem />
        </Provider>
      ),
    };
  };

  it("renders all goal items", () => {
    renderWithStore();

    expect(screen.getByText("Learn React")).toBeTruthy();
    expect(screen.getByText("Practice TypeScript")).toBeTruthy();
    expect(screen.getByText("Understand hooks and JSX")).toBeTruthy();
    expect(screen.getByText("Typing everything")).toBeTruthy();
  });
});
