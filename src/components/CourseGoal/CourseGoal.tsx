import Button from "../UI/Button/Button";
import { CourseGoalProp } from "./CourseGoalType";

const CourseGoal = ({ title, id, onDelete, children }: CourseGoalProp) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <Button onClick={() => onDelete(id)} aria-label="delete">
        Delete
      </Button>
    </article>
  );
};

export default CourseGoal;
