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

const TaskList: React.FC = () => {

    const context = useContext(TasksContext)

    if(!context) throw new Error("TaskContexts not found.")

    const { tasks } = context;

    // , addTask, toggleTask, deleteTask --> removed from const = context not passing as props due to context.


return (
    <Container className="text-bg-dark p-3 rounded">
       {/*  <Row>
            
        {tasks.map(task  => ( 
            <Col key={task.title} xs={12} md={6} lg={4} className="mt-3">
            {/*<TaskItem key={index} task={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/> */}
            {/*<TaskItem key={task.title} task={task} /> */}
       {/*  </Col>
        ))}
        </Row> */}
        <h1>Task List</h1>
        <Stack gap={3}>
            {tasks.map(task =>
                <TaskItem key={task.title} task={task} />            
            )}
        </Stack>
    </Container>

    
)

}

export default TaskList;

//ChatGPT helped me structure this component
//After I built it, Chat debugged it and helped me correct it.

//debugged display issues with Chat

//remove {/*index)*/} from mapping due to context.