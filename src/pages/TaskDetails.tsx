import TaskItem from '../components/TaskItem';
import type { Task } from '../types/Task';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { TasksContext } from '../context/TaskContext';
import Stack from 'react-bootstrap/Stack';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


// interface TaskListProps {
//     tasks: Task[];
//     toggleTask: (title: string) => void;
//     deleteTask: (title: string) => void;
 //} --> not needed because not pass TaskList as props

//const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask}) => { //add react.FC<TaskListProps>; destructure from props to --> tasks

const TaskDetails: React.FC = () => {

    const context = useContext(TasksContext)

    if(!context) throw new Error("TaskContexts not found.")

    const { tasks, toggleTask, deleteTask } = context;

    //const { id } = useParams();
    
    //const task = tasks.find(t => t.title === title); //remove once id is added

    //const task = tasks.find(t => t.id === id); //--> uncomment when updated to having an id

    //if(!task) return <div>Task not found</div>

    // , addTask, toggleTask, deleteTask --> removed from const = context not passing as props due to context.


return (
    <div className="p-3">
        {tasks.map(task => 
        <div className="d-flex align-items-center justify-content-between p-2 border rounded">
          
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                />
                <span style = {{textDecoration: task.completed ? 'line-through' : 'none', }}>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                </span>
            
            <p>{task.description}</p>
            <p>{task.completed ? 'Done' : 'Pending'}</p>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </div>
    )}
    </div>
)

}

export default TaskDetails;

//task/tasks wasn't connecting.  ChatGPT helped me correct it so I could control what was being rendered to the details page.