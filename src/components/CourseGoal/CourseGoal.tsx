import { CourseGoalProp } from "./CourseGoalType";


const CourseGoal = ({ title, id, onDelete, children }: CourseGoalProp) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button> 
    </article>
  );
};

export default CourseGoal;
