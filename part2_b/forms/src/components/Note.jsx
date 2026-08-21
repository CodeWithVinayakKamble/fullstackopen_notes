const Note = ({ note }) => {
    const { content } = note;
    return (
        <li>{content}</li>
    )
};
export default Note;