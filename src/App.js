import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor appointment",
      date: "January 4th",
      reminder: true,
    },
    {
      id: 2,
      text: "Study for class",
      date: "January 2nd",
      reminder: false,
    },
    {
      id: 3,
      text: "important meeting",
      date: "January 8th",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
