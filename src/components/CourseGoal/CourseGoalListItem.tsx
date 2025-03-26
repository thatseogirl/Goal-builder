import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import CourseGoal from "./CourseGoal";
import GoalInfo from "../Info/GoalInfo";
import { deleteGoal } from "../../store/goals/goalsSlice";


const CourseGoalListItem = () => {
  const dispatch= useDispatch()
  const goals = useSelector((state:RootState) => state.goals.goals)
  return (
    <div>
      <GoalInfo goalCount={goals.length} />
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={() => dispatch(deleteGoal(goal.id))}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalListItem;
