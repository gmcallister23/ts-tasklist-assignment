import TaskItem from '../components/TaskItem';
import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    toggleTask: (title: string) => void;
    deleteTask: (title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, toggleTask, deleteTask}) => { //add react.FC<TaskListProps>; destructure from props to --> tasks

return (
    <div>
        {tasks.map((task, index) => ( 
            <TaskItem key={index} task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
        ))}
    </div>
)

}

export default TaskList;

//ChatGPT helped me structure this component
//After I built it, Chat debugged it and helped me correct it.