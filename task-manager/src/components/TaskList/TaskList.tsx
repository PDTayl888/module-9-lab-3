import type { Task, TaskStatus } from '../../types';
import type { TaskItem } from '../TaskItem/TaskItem';

import type { TaskListProps } from '../../types';
import { TaskListProps } from './../../types/index';

export const TaskList = ({ tasks, onStatusChange, onDelete }: TaskListProps) => {
    return (
        <>
        <TaskItem></TaskItem>

        </>
    )
}
