import { useState, useEffect } from "react";
import tasksServices from "./services/tasks";
import TaskForm from "./components/TaskForm";
import Notification from "./components/Notification";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter"

const App = () => {

    const [tasks, setTasks] = useState([]);
    const [notification, setNotification] = useState(null);
    const [search, setSearch] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all')

    useEffect(() => {
        tasksServices
            .getAll()
            .then(data => {
                setTasks(data)
            })
    }, []);

    const addTaskToDb = (newTask) => {
        tasksServices
            .create(newTask)
            .then(returnedTask => {
                setTasks([...tasks, returnedTask]);
                setNotification({
                    message: "Task Added Successfully",
                    type: "success"
                });
                setTimeout(() => { setNotification(null) }, 3000);
            })
            .catch(() => {
                setNotification({
                    message: 'Failed to save task to the server. Please check your connection.',
                    type: "error"
                });

                setTimeout(() => { setNotification(null) }, 3000)
            })
    };

    const deleteTaskFromDb = (id) => {

        let confirmDelete = window.confirm("delete Task ?");

        if (confirmDelete) {
            tasksServices
                .remove(id)
                .then(() => {
                    setNotification({
                        message: "Deleted Successful !",
                        type: "success"
                    });
                    setTimeout(() => { setNotification(null) }, 3000);
                    setTasks(tasks.filter(t => t.id !== id));
                })
                .catch(() => {
                    setNotification({
                        message: "Information of has already been removed from server",
                        type: "error"
                    })
                    setTimeout(() => { setNotification(null) }, 3000);
                    setTasks(tasks.filter(t => t.id !== id));
                })
        }
    };

    const handleCycleStatus = (id) => {
        let task = tasks.find(task => task.id === id);
        let nextStatus;

        let current = task.status.toLowerCase();

        if (current === 'pending') {
            nextStatus = 'In progress'
        };

        if (current === 'in progress') {
            nextStatus = 'Completed'
        };

        if (current === 'completed') {
            nextStatus = 'Pending'
        }

        let updatedBody = { ...task, status: nextStatus }

        tasksServices
            .update(id, updatedBody)
            .then(updatedTask => {
                setTasks(tasks.map(t => t.id === id ? updatedTask : t));
                setNotification({
                    message: `Task status changed to ${nextStatus}`,
                    type: 'success'
                });
                setTimeout(() => { setNotification(null) }, 500);
            })
            .catch(() => {
                setNotification({
                    message: 'task was already deleted on the server',
                    type: 'error'
                });
                setTimeout(() => { setNotification(null) }, 3000);
                setTasks(tasks.filter(t => t.id !== id));
            })

    };

    const tasksToShow = tasks.filter(task => {

        const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());

        const matchesPriority = priorityFilter.toLowerCase() === 'all' || task.priority.toLowerCase() === priorityFilter.toLowerCase()


        return matchesSearch && matchesPriority;
    });

    return (
        <div>

            <h1>DevTracker</h1>

            <Notification notification={notification} />

            <Filter search={search} setSearch={setSearch} priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />

            <TaskForm createTask={addTaskToDb} notify={setNotification} />

            <TaskList data={tasksToShow} deleteHandler={deleteTaskFromDb} statusCycle={handleCycleStatus} />

        </div>
    )

};


export default App;