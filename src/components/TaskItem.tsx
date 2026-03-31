import type { Task } from '../types/Task';

interface TaskItemProps {
    task: Task
}

const TaskItem: React.FC<TaskItemProps>= (props) => {
    return (
        <div>
            <h1>Task Details</h1>
            <p>{props.task.title}</p>
            <p>{props.task.description}</p>
            <p>{props.task.completed}</p>
        </div>
    )
}

export default TaskItem;

//destructure the props later