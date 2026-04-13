import { useContext, useState } from 'react';
import { TasksContext} from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
        <div className="d-flex align-items-center justify-content-between p-2 border rounded">
            {/*<Link to={`/task/${task.id}`}>{task.title}</Link>*/}

            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.completed ? 'Done' : 'Pending'}</p>
            <Button onClick={handleEditClick}> Edit </Button>
        

        {isEditing && (
            <div>
                <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                />
                <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>

            </div>
        
        )}

        </div>
    )
}

export default TaskView;

//Chat helped me structure the edit function