import type { Task } from '../types/Task'
import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Dashboard: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = (): void => {
        if (newTask.trim() !== '') {
                const taskToAdd: Task = {
                    title: newTask,
                    description: '',
                    completed: false,
                }
            setTasks([...tasks, taskToAdd]);
            setNewTask('');
         }
        };
    
    const toggleTask = (title: string): void => {
        setTasks((prevTasks) => 
            prevTasks.map((task) =>
                task.title === title ? {...task, completed: !task.completed}: task)
        );
    }
    
    const deleteTask = (title: string): void => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.title !== title));
    }



console.log("Tasks", tasks);

return (
   
    
    <div className="input-group">
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control me-2"
            />
        <button onClick={addTask} className='btn btn-primary'>Add Task</button>
    
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/> {/*Chat suggested this as well, we're passing the TaskList and TaskItems in order to map and render the tasks */}
    </div> 
        


 
    )

}


export default Dashboard;