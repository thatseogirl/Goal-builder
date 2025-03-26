
import Header from "./components/Header/Header";

import studyImg from "./assets/images/study.webp";
import AddNewGoal from "./components/NewGoal/AddNewGoal";
import CourseGoalListItem from "./components/CourseGoal/CourseGoalListItem";

const App = () => {
  
  return (
    <main>
      <Header image={{ src: studyImg, alt: "study image" }}>
        <h1>Your Learning Goals</h1>
      </Header>
      <section className="goal-container">
      <AddNewGoal />
      <CourseGoalListItem />
      </section>
    </main>
  );
};

export default App;
