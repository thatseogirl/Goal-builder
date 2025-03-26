
import Header from "./components/Header/Header";

import studyImg from "./assets/images/study.webp";
import AddNewGoal from "./components/NewGoal/AddNewGoal";
import CourseGoalList from "./components/CourseGoal/CourseGoalList";

const App = () => {
  
  return (
    <main>
      <Header image={{ src: studyImg, alt: "study image" }}>
        <h1>Your Learning Goals</h1>
      </Header>
      <section className="goal-container">
      <AddNewGoal />
      <CourseGoalList />
      </section>
    </main>
  );
};

export default App;
