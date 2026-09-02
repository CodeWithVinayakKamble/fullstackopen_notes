const TaskItem = ({ task, onDelete, statusHandler }) => {
    const { title, priority, category, status: cardStatus } = task;
    return (
        <div className="item" >
            <p>Title : {title}</p>
            <p>Priority : {priority}</p>
            <p>Category : {category}</p>
            <p>Status : {cardStatus}</p>
            <div className="buttonBox" >
                <button onClick={() => statusHandler(task.id)}>Cycle Status</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    )
};

export default TaskItem;

