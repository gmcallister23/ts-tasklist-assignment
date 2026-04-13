import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task } from '../types/Task';

interface TasksContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, updatedTask: Partial<Task>) => void;
 }

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => setTasks(prev => [...prev, task]);
    const toggleTask = (id: string) =>
        setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed } : t));
    const deleteTask = (id: string) => 
        setTasks(prev => prev.filter(t => t.id !== id));
    const editTask = (id: string, updatedTask: Partial<Task>) => 
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id
                    ? { ...task, ...updatedTask }
                    : task
            )
        )

    return (
        <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask }}>
            {children}
        </TasksContext.Provider>
    )
}

//Built with assistance from ChatGPT

//Chat helped me design the editTask