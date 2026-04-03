import type { Task } from '../types/Task';
import React from 'react';

interface TaskItemProps {
    task: Task;
    toggleTask: (title: string) => void;
    deleteTask: (title: string) => void;
}

const TaskItem: React.FC<TaskItemProps>= ({ task, toggleTask, deleteTask }) => {
    return (
        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.title)}
                />
                <span style = {{textDecoration: task.completed ? 'line-through' : 'none', }}>
                    {task.title}
                    </span>
            <h1>Task Details</h1>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.completed}</p>
            <button onClick={() => deleteTask(task.title)}>🗑️</button>
        </div>
    )
}

export default TaskItem;

//destructure the props later --> destructured.