import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormStateProp {
  goal: string;
  summary: string;
}

const initialState: FormStateProp = {
  goal: "",
  summary: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateGoal: (state: FormStateProp, action: PayloadAction<string>) => {
      state.goal = action.payload;
    },
    updateSummary: (state: FormStateProp, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateGoal, updateSummary, resetForm } = formSlice.actions;
export default formSlice.reducer;
