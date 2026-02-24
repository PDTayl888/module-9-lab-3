//import type { Task, TaskStatus } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

import type { TaskListProps } from "../../types";

export const TaskList = ({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={() => onStatusChange}
          onDelete={onDelete}
        ></TaskItem>
      ))}
    </>
  );
};
