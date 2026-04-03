import React, { useState } from 'react';
import type { Task } from '../types/Task';
import { Button, Col, Row, Form, Container } from 'react-bootstrap';

interface TaskFormProps {
    //task: Task;
    addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps>= ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault(); //prevents page reload

        if(title.trim() === '') return; //this validates the form

        const newTask: Task = {
            title, description, completed: false,
        };

        addTask(newTask);
        setTitle('');
        setDescription('');


    }

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                </Form.Group>

                <Row>
                    <Col>
                        <Button
                        className="m-3"
                        type="submit"
                        onClick={handleAddTask}
                        >Add Task</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )

}

export default TaskForm;

//ChatGPT helped me structure the handle function
