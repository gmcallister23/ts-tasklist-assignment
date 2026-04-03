import TaskItem from '../components/TaskItem';
import type { Task } from '../types/Task';
import { Container, Row, Col } from 'react-bootstrap';

interface TaskListProps {
    tasks: Task[];
    toggleTask: (title: string) => void;
    deleteTask: (title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask}) => { //add react.FC<TaskListProps>; destructure from props to --> tasks

return (
    <Container>
        <Row>
            
        {tasks.map((tasks, index) => ( 
            <Col key={tasks.title} xs={12} md={6} lg={4} className="mt-3">
            <TaskItem key={index} task={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
        </Col>
        ))}
        </Row>
    </Container>
)

}

export default TaskList;

//ChatGPT helped me structure this component
//After I built it, Chat debugged it and helped me correct it.