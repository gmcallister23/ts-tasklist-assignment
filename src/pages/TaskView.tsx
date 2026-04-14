import { useContext, useState } from 'react';
import { TasksContext} from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Stack, Container, Col, Row } from 'react-bootstrap';

const TaskView: React.FC = () => {

    const context = useContext(TasksContext)

    if(!context) throw new Error("TaskContexts not found.")

    const { tasks, editTask } = context; //toggleTask, //deleteTask } = context;

    const { id } = useParams();

    const task = tasks.find(t => t.id === id);

    if(!task) return <div>Task not found</div>

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);

    
    if(!context) throw new Error("TasksContext not found.");

    

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, {
            title: editedTitle,
            description: editedDescription
        });
        setIsEditing(false);
    }
    
        

    return(
        <Stack>
            <div >
                {/*<Link to={`/task/${task.id}`}>{task.title}</Link>*/}
                <h1>{task.title}</h1>
                <Container>
                    <Row >
                        {/*<div className="d-flex justify-content-around p-2"> */}
                        
                            <Col><p>Title</p></Col>
                            <Col><p>Despcription</p></Col>
                            <Col><p>Status</p></Col>
                            <Col><p>Edit</p></Col>
                        {/*</div>*/}
                    </Row>
                    
                </Container>
                <Container >
                    <Row className="bg-dark-subtle border rounded pb-1 pt-1 align-items-center text-dark-emphasis shadow-sm">
                        <Col><p className="mb-0">{task.title}</p></Col>
                        <Col><p className="mb-0">{task.description}</p></Col>
                        <Col><p className="mb-0">{task.completed ? 'Done' : 'Pending'}</p></Col>
                        <Col><Button onClick={handleEditClick}> Edit </Button></Col>
                    </Row>
                </Container>
                
               
                
                
                
                
            {isEditing && (
                <div>
                    <p>Title</p>
                    <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <p>Description</p>
                    <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    
                    <div className="p-3">
                        <button className="m-1 rounded shadow-sm" onClick={handleSave}>Save</button>
                        <button className="m-1 rounded shadow-sm" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
                
        
                )}
            
            </div>
            
        </Stack>
    )
}

export default TaskView;

//Chat helped me structure the edit function