import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task } from '../types/Task';

interface TasksContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (title: string) => void;
    deleteTask: (title: string) => void;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => setTasks(prev => [...prev, task]);
    const toggleTask = (title: string) =>
        setTasks(prev => prev.map(t => t.title === title ? {...t, completed: !t.completed } : t));
    const deleteTask = (title: string) => 
        setTasks(prev => prev.filter(t => t.title !== title));

    return (
        <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )
}

//Built with assistance from ChatGPT