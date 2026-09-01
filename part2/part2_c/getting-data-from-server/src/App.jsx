import { useState, useEffect } from "react";
import axios from "axios";
// import Note from './components/Note'


const App = () => {

    const [notes, setNotes] = useState([]);


    useEffect(() => {
        console.log('useEffect');
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise FullFilled');
                setNotes(response.data);
            })
    }, []);

    console.log('render', notes.length, 'notes')
};

export default App;