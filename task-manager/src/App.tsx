import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";



function App() {
  return (
    <>
      <TaskFilter
        onFilterChange={() => on}
      ></TaskFilter>
      <TaskList
        tasks={[{ id: '67', title: 'Do that thing', description: 'that thing that thing that thiieing', status: 'pending', priority: 'low', dueDate: '8-8-2008' },]}
        onStatusChange={() => alert("onStatusChange called")}
        onDelete={() => console.log("onDelete called")}
      ></TaskList>
    </>
  );
}

export default App;
