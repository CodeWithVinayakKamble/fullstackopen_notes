import { useState } from "react";

const TaskForm = ({ createTask, notify }) => {

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('bug');

    const handleSubmit = (event) => {

        event.preventDefault();

        // Validation Guard
        if (!title.trim()) {
            notify({
                message: 'Title cannot be Empty !',
                type: 'error'
            });
            setTimeout(() => { notify(null) }, 3000)
            return
        };

        // newBody
        const newTask = {
            title,
            priority,
            category,
            status: "pending"
        };

        // Sending to the parent App by prop
        createTask(newTask);


        // Reseting the states
        setTitle('');
        setPriority('medium');
        setCategory('bug');

    };

    return (
        <form onSubmit={handleSubmit} >

            <div className="titleInput">
                <label htmlFor="title">Title : </label>
                <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label htmlFor="priority">Priority : </label>
                <select name="priority" id="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <div>
                <label htmlFor="bug">Bug</label>
                <input type="radio" name="category" id="bug" value="bug" checked={category === 'bug'} onChange={(e) => setCategory(e.target.value)} />

                <label htmlFor="feature">Feature</label>
                <input type="radio" name="category" id="feature" value="feature" checked={category === 'feature'} onChange={(e) => setCategory(e.target.value)} />
            </div>

            <button className="addTaskBtn" type="submit">Add Task</button>

        </form>
    )
};

export default TaskForm;