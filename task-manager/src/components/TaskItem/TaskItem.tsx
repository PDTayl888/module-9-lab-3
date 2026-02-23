import type { Task, TaskStatus } from '../../types';
import type { TaskItemProps } from '../../types';

export const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
    return (
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Due: {task.dueDate}</p>
    )
}

