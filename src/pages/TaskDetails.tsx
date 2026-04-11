import TaskItem from '../components/TaskItem';
import type { Task } from '../types/Task';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { TasksContext } from '../context/TaskContext';
import Stack from 'react-bootstrap/Stack';


// interface TaskListProps {
//     tasks: Task[];
//     toggleTask: (title: string) => void;
//     deleteTask: (title: string) => void;
 //} --> not needed because not pass TaskList as props

//const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask}) => { //add react.FC<TaskListProps>; destructure from props to --> tasks

const TaskDetails: React.FC = () => {

    const context = useContext(TasksContext)

    if(!context) throw new Error("TaskContexts not found.")

    const { tasks } = context;

    // , addTask, toggleTask, deleteTask --> removed from const = context not passing as props due to context.


return (
    <div className="d-flex align-items-center justify-content-between p-2 border rounded">
          
           
            <input 
                type="checkbox"
                checked={tasks.completed}
                onChange={() => toggleTask(task.title)}
                />
                <span style = {{textDecoration: tasks.completed ? 'line-through' : 'none', }}>
                 {tasks.title}   
                </span>
            
            {/*<p>{task.description}</p>*/}
            <p>{tasks.completed ? 'Done' : 'Pending'}</p>
            <button onClick={() => deleteTask(tasks.title)}>🗑️</button>
        </div>

    
)

}

export default TaskDetails;

//task/tasks wasn't connecting.  ChatGPT helped me correct it so I could control what was being rendered to the details page.