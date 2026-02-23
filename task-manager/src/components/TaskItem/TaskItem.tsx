import type { Task, TaskStatus } from "../../types";
import type { TaskItemProps } from "../../types";

export const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <select id={task.id} value={task.status} onChange={() => onStatusChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">completed</option>
      </select>

      <button onClick={() => onDelete}>Delete</button>
    </>
  );
};
