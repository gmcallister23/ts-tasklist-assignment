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

    <div>
        <h1 className="pb-4">Task Details</h1>
    
    <Container>
        <Row className="p-2">
            <Col>Complete</Col>
            <Col>Title</Col>
            <Col>Description</Col>
            <Col>Status</Col>
            <Col>Delete</Col>
        </Row>
    </Container>
    
    <Container className=" text-bg-dark border rounded">
        {tasks.map(task => 
            
            <Row className="m-2 align-items-center border rounded">
                <Col><input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                /></Col>
                <Col className="mb-0"><span style = {{textDecoration: task.completed ? 'line-through' : 'none', }}>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                </span></Col>
                <Col ><p className="mb-0">{task.description}</p></Col>
                <Col ><p className="mb-0">{task.completed ? 'Done' : 'Pending'}</p></Col>
                <Col><button onClick={() => deleteTask(task.id)}>🗑️</button></Col>

            </Row>
       
        )}
        
    </Container>
    
    </div>
    
)

}

export default TaskDetails;

//task/tasks wasn't connecting.  ChatGPT helped me correct it so I could control what was being rendered to the details page.