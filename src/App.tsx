import { useCallback, useState } from "react";

import Header from "./components/Header/Header";

import goalsImg from "./assets/goals.jpg";
import AddNewGoal from "./components/NewGoal/AddNewGoal";
import CourseGoalListItem from "./components/CourseGoal/CourseGoalListItem";

export interface GoalsProp {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<GoalsProp[]>([]);

  const handleAddNewGoal = useCallback((goal: string, summary:string) => {
    console.log("re-render");
    setGoals((prevGoals) => {
      const newGoal: GoalsProp = {
        title: goal,
        description:summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }, [goals]);

  const handleDeleteGoal = useCallback((id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }, []);
  //usestate is a react hooks that returns an array with two elements(current state and function you call to update the current state)
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Your goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddNewGoal handleAddNewGoal={handleAddNewGoal} />

      <CourseGoalListItem goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
