import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Goal {
  id: number;
  title: string;
  description: string;
}

interface GoalsState {
  goals: Goal[];
}

const initialState: GoalsState = {
  goals: [
    {
      id: 1,
      title: "Learn Advanced TypeScript",
      description: "Study more advanced type-safe state patterns",
    },
    {
      id: 2,
      title: "Contribute to OSS",
      description: "Improve TypeScript open source contributions",
    },
  ],
};

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<{ title: string; description: string }>) => {
      state.goals.push({
        id: Math.random(),
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    deleteGoal: (state, action: PayloadAction<number>) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
  },
});

export const { addGoal, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
