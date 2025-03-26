import { GoalsProp } from "../../App";
import CourseGoal from "./CourseGoal";
import GoalInfo from "../Info/GoalInfo";

type ListItemProps = {
  goals: GoalsProp[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalListItem = ({ goals, onDeleteGoal }: ListItemProps) => {
  //add an info component here
  return (
    <div>
      <GoalInfo goalCount={goals.length} />
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalListItem;
