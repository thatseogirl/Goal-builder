import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  goal: string;
  summary: string;
}

const initialState: FormState = {
  goal: "",
  summary: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateGoal: (state: FormState, action: PayloadAction<string>) => {
      state.goal = action.payload;
    },
    updateSummary: (state: FormState, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateGoal, updateSummary, resetForm } = formSlice.actions;
export default formSlice.reducer;
