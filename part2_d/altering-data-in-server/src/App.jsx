import { useEffect, useState } from "react";
import noteServices from './services/notes.js'
import Note from './components/Note.jsx'


const App = () => {

    // React States
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('a new note...');
    const [showAll, setShowAll] = useState(true);

    // Fetching data from fake JSON-Server
    useEffect(() => {
        noteServices
            .getAll()
            .then(defaultData => setNotes(defaultData))
    }, []);

    // logic of toggle imp or !imp by axios.put() method
    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteServices
            .update(id, changedNote)
            .then(updatedNote => setNotes(notes.map(note => note.id === id ? updatedNote : note)))
            .catch(error => {
                alert(`the note '${note.content}' was already deleted from server`)
                setNotes(notes.filter(n => n.id !== id))
                console.log(error)
            })
    };


    // Logic for adding notes to the server
    const addNote = (event) => {
        event.preventDefault();

        const newObject = {
            content: newNote,
            important: Math.random() < 0.5
        };

        // Adding Note to the server (fake-db) and to the local-machine via axios.POST() Method
        noteServices
            .create(newObject)
            .then(addedNote => {
                setNotes([...notes, addedNote]);
                setNewNote('')
            })
    };

    // HTML Input Locked into React State
    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    // ==== Filteration on Importance === //

    // Logic - (Firstly its matching notes with showAll is true its finding true notes if did not got else block comes on game for filteration)
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    Show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note => {
                    const { id } = note
                    return (
                        <Note key={id} note={note} toggleImportance={() => toggleImportanceOf(id)} />
                    )
                })}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default App;