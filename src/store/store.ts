import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./goals/goalsSlice";
import formReducer from "./form/formSlice";

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
