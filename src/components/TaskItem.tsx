import type { Task } from '../types/Task';
import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

interface TaskItemProps {
    task: Task;
    //toggleTask: (title: string) => void;
    //deleteTask: (title: string) => void;
 }

//const TaskItem: React.FC<TaskItemProps>= ({ task, toggleTask, deleteTask }) => {
const TaskItem: React.FC<TaskItemProps>= ({ task })  => {
    const context = useContext(TasksContext)

    if(!context) throw new Error("TasksContext not found.")

    //const { tasks, addTask, toggleTask, deleteTask} = context
    const { toggleTask, deleteTask } = context;


return ( 

        //<h1>Task Details</h1>
        <Container>
            <Row className="align-items-center pt-1 pb-1 border rounded">
                <Col><input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                /></Col>
                <Col><span style = {{textDecoration: task.completed ? 'line-through' : 'none', }}>
                   <Link to={`/task/${task.id}`}> {task.title} </Link>
                </span></Col>
                <Col><p className="mb-0">{task.completed ? 'Done' : 'Pending'}</p></Col>
                <Col><button className="border rounded"onClick={() => deleteTask(task.id)}>🗑️</button></Col>
            </Row>
        </Container>
        
    )
}

export default TaskItem;

//destructure the props later --> destructured.

//debugged display issues with Chat 
// 
//{/*<p>{task.description}</p>*/}