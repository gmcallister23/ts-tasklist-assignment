import type { Task } from '../types/Task';
import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../context/TaskContext';
//import { Row } from 'react-bootstrap';

interface TaskItemProps {
    task: Task;
    //toggleTask: (title: string) => void;
    //deleteTask: (title: string) => void;
 }

//const TaskItem: React.FC<TaskItemProps>= ({ task, toggleTask, deleteTask }) => {
const TaskItem: React.FC<TaskItemProps>= ({ task })  => {
    const context = useContext(TasksContext)

    if(!context) throw new Error("TasksContext not found.")

    //const { tasks, addTask, toggleTask, deleteTask} = context
    const { toggleTask, deleteTask } = context;


return (
        <div className="d-flex align-items-center justify-content-between p-2 border rounded">
          
            <h1>Task Details</h1>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.title)}
                />
                <span style = {{textDecoration: task.completed ? 'line-through' : 'none', }}>
                 {task.title}   
                </span>
            
            <p>{task.description}</p>
            <p>{task.completed ? 'Done' : 'Pending'}</p>
            <button onClick={() => deleteTask(task.title)}>🗑️</button>
        </div>
        
    )
}

export default TaskItem;

//destructure the props later --> destructured.

//debugged display issues with Chat