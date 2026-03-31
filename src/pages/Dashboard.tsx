import type { Task } from '../types/Task'

const Dashboard: React.FC = () => {

const tasks: Task[] = [];

const task1: Task = {
    title: "Clean the litter box",
    description: "Scoop the cat turns and wiz clumps out of the litter and add some fresh litter",
    completed: false
}

const task2: Task = {
    title: "Finish Laundry",
    description: "Take dry laundry from the dryer, fold and put it away",
    completed: true
}

tasks.push(task1);
tasks.push(task2);

console.log("Tasks", tasks);

return (
    <div>
        {tasks.map((task, index) =>
        <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? "Completed" : "Incomplete"}</p>

        </div>
        )}
    </div>
)

}

export default Dashboard;