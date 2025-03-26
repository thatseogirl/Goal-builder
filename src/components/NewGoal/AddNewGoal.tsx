import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal } from "../../store/goals/goalsSlice";
import {
  updateGoal,
  updateSummary,
  resetForm,
} from "../../store/form/formSlice";
import { RootState } from "../../store/store";

const AddNewGoal = () => {
  const dispatch = useDispatch();
  const { goal, summary } = useSelector((state: RootState) => state.form);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!goal.trim() || !summary.trim()) return;

    dispatch(addGoal({ title: goal.trim(), description: summary.trim() }));
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <div className="flex-item">
        <label htmlFor="goal">Your Goal</label>
        <input
          id="goal"
          type="text"
          value={goal}
          onChange={(e) => dispatch(updateGoal(e.target.value))}
        />
      </div>
      <div className="flex-item">
        <label htmlFor="summary">Short Summary</label>
        <input
          id="summary"
          type="text"
          value={summary}
          onChange={(e) => dispatch(updateSummary(e.target.value))}
        />
      </div>
      <button type="submit">Add New Goal</button>
    </form>
  );
};

export default AddNewGoal;
