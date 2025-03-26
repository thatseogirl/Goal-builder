import { useRef, type FormEvent } from "react";

type AddNewGoalProp = {
  handleAddNewGoal: (goal: string, summary: string) => void;
};
const AddNewGoal = ({ handleAddNewGoal }: AddNewGoalProp) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const handleSubmitGoal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    event.currentTarget.reset();
    handleAddNewGoal(enteredGoal, enteredSummary);
  };
  return (
    <form onSubmit={handleSubmitGoal}>
      <div>
        <label htmlFor="goal"> Your goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </div>
      <div>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </div>
      <button>Add New Goal</button>
    </form>
  );
};

export default AddNewGoal;
