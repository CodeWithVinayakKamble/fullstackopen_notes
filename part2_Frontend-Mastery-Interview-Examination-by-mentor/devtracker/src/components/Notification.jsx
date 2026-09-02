const Notification = ({ notification }) => {

    if (!notification) {
        return null
    };

    const { message, type } = notification;

    if (message === null) {
        return null
    };

    return (
        <div className={`notification ${type}`}>{message}</div>
    )
};

export default Notification;