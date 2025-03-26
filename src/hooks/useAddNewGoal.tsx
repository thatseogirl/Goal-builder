import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal } from "../store/goals/goalsSlice";
import {
  updateGoal,
  updateSummary,
  resetForm,
} from "../store/form/formSlice";
import { RootState } from "../store/store";

const useAddNewGoal = () => {
    const dispatch = useDispatch();
    const { goal, summary } = useSelector((state: RootState) => state.form);
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      if (!goal.trim() || !summary.trim()) return;
  
      dispatch(addGoal({ title: goal.trim(), description: summary.trim() }));
      dispatch(resetForm());
    };
  return {dispatch, goal,summary, handleSubmit}
}

export default useAddNewGoal
