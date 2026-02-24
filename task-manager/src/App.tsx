import { useState } from "react";
import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "67",
      title: "Do that thing",
      description: "that thing that thing that thiieing",
      status: "pending",
      priority: "low",
      dueDate: "8-8-2008",
    },
    {
      id: "647",
      title: " thing",
      description: "that that thiieing",
      status: "pending",
      priority: "medium",
      dueDate: "8-8-2008",
    },
    {
      id: "11",
      title: "Do",
      description: "that thing th",
      status: "pending",
      priority: "low",
      dueDate: "8-8-2008",
    },
    {
      id: "09",
      title: " that",
      description: "that thing that thiieing",
      status: "pending",
      priority: "high",
      dueDate: "8-8-2008",
    },
  ]);

  const [filter, setFilter] = useState({ status: "all", priority: "all" });

  const filteredTasks = tasks
    .filter((task) => filter.status === "all" || task.status === filter.status)
    .filter(
      (task) => filter.priority === "all" || task.priority === filter.priority,
    );

  return (
    <>
      <TaskFilter
        onFilterChange={(newStatus) => setFilter({ ...filter, ...newStatus })}
      ></TaskFilter>
      <TaskList
        tasks={filteredTasks}
        onStatusChange={() => alert("onStatusChange called")}
        onDelete={(id) => {console.log("delete taskliist button"); setTasks(tasks.filter(t => t.id !== id))}}
      ></TaskList>
    </>
  );
}

export default App;
