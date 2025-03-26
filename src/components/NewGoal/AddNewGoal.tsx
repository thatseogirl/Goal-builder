import { updateGoal, updateSummary } from "../../store/form/formSlice";
import useAddNewGoal from "../../hooks/useAddNewGoal";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const AddNewGoal = () => {
  const { dispatch, goal, summary, handleSubmit } = useAddNewGoal();

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <Input
        id="goal"
        label="Enter your Goal"
        type="text"
        value={goal}
        onChange={(e) => dispatch(updateGoal(e.target.value))}
      />
      <Input
        label="Short Summary"
        id="summary"
        type="text"
        value={summary}
        onChange={(e) => dispatch(updateSummary(e.target.value))}
      />

      <Button type="submit" aria-label="submit">
        Add New Goal
      </Button>
    </form>
  );
};

export default AddNewGoal;
