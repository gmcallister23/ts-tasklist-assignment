import { useContext } from 'react';
import { TasksContext} from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TaskView: React.FC = () => {

    const context = useContext(TasksContext)

    if(!context) throw new Error("TaskContexts not found.")

    const { tasks } = context; //toggleTask, //deleteTask } = context;

    const { id } = useParams();

    const task = tasks.find(t => t.id === id);

    if(!task) return <div>Task not found</div>

    return(
        <div className="d-flex align-items-center justify-content-between p-2 border rounded">
            {/*<Link to={`/task/${task.id}`}>{task.title}</Link>*/}

            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.completed ? 'Done' : 'Pending'}</p>
        </div>

    )
}

export default TaskView;