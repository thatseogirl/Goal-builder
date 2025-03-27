import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import type { RootState, AppDispatch } from "@/store/store";

import CourseGoal from "./CourseGoal";
import GoalInfo from "../Info/GoalInfo";
import { deleteGoal } from "@/store/goals/goalsSlice";

const MemorizedGoal = memo(CourseGoal);

const CourseGoalListItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const goals = useSelector((state: RootState) => state.goals.goals);

  return (
    <div>
      <GoalInfo goalCount={goals.length} />
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <MemorizedGoal
              title={goal.title}
              id={goal.id}
              onDelete={() => dispatch(deleteGoal(goal.id))}
            >
              <p>{goal.description}</p>
            </MemorizedGoal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalListItem;
