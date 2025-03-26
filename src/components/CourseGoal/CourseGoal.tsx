import { type PropsWithChildren } from "react";

// interface CourseGoalProp {
//   title: string;
//   children: ReactNode;
// }
type CourseGoalProp = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>; //best pratices for types with children
// if using functional components you can also define your types like this
// export default function CourseGoal({ title, children }: CourseGoalProp) {

//     return (
//       <article>
//         <div>
//           <h2>{title}</h2>
//           {children}
//         </div>

//         <button>Delete</button>
//       </article>
//   )
// }
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
