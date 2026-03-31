import TaskItem from '../components/TaskItem';
import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
}

const TaskList = (props) => {

return (
    <div>
        {tasks.map((task, index) => ( 
            <TaskItem key={index} task={task} />
        ))}
    </div>
)

}

export default TaskList;