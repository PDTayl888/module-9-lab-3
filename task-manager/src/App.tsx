import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <TaskFilter
        onFilterChange={() => console.log("onFilterChange called")}
      ></TaskFilter>
      <TaskList
        tasks={[]}
        onStatusChange={() => console.log("onStatusChange called")}
        onDelete={() => console.log("onDelete called")}
      ></TaskList>
    </>
  );
}

export default App;
