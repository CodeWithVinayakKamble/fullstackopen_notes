import TaskItem from "./TaskItem";

const TaskList = ({ data, deleteHandler, statusCycle }) => {

    return (
        <div className="taskList">
            {data.map(item => {
                return <TaskItem key={item.id} task={item} onDelete={deleteHandler} statusHandler={statusCycle} />
            })}
        </div>
    )
};

export default TaskList;