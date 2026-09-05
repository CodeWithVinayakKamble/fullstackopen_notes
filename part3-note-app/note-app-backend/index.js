// ================================== //
// Imports & Dependencies
// ================================== //
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// ================================== //
// App Initialization
// ================================== //
const app = express();


// ================================== //
// Pre-Route Middlewares
// ================================== //
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
// app.use(
//     morgan(':method :url :status :res[content-length] - :response-time ms :body')
// )


// ================================== //
// Database / Models
// ================================== //

let notes = [
    {
        "id": "1",
        "content": "HTML is easy",
        "important": false
    },
    {
        "id": "2",
        "content": "Browser can execute only JavaScript",
        "important": false
    },
    {
        "id": "3",
        "content": "GET and POST are the most important methods of HTTP protocol",
        "important": false
    }
];


// ================================== //
// Route Handlers
// ================================== //
app.get('/api/notes', (request, response) => {
    response.json(notes)
});

// ============================================== //

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    const note = notes.find(note => note.id === id);

    if (!note) {
        return response.status(404).end()
    }
    response.json(note)
});

// ============================================== //

const generateNewId = () => {
    const newId = String(Math.floor(Math.random() * 1000000));
    return newId;
};

app.post('/api/notes', (request, response) => {

    const body = request.body;

    if (!body.content) {
        return response.status(400).json({ error: "content is missing" })
    };

    const newNoteObj = {
        id: generateNewId(),
        content: body.content,
        important: Math.random() < 0.5
    };

    notes = [...notes, newNoteObj];
    response.json(newNoteObj)
})

// ============================================== //

app.delete('/api/notes/:id', (request, response) => {

    const id = request.params.id;
    notes = notes.filter(note => note.id !== id);
    response.status(204).end();

})

// ============================================== //

app.put('/api/notes/:id', (request, response) => {

    const id = request.params.id;
    const body = request.body;

    const note = notes.find(note => note.id === id);

    if (!note) {
        return response.status(404).end()
    };

    const updatedNote = {
        id: body.id,
        content: body.content,
        important: body.important
    };

    notes = notes.map(note => note.id === id ? updatedNote : note);

    response.json(updatedNote)
})

// ================================== //
// Error & Fallback Middlewares
// ================================== //

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);


// ================================== //
// Server Listener
// ================================== //

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is live on : http://localhost:${PORT}`);
});