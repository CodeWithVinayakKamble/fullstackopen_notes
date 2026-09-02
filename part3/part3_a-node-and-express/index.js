const express = require('express'); // import express from 'express';
const app = express();

// raw stream of text parse into real javaScript object
app.use(express.json())

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];

app.get('/', (request, response) => {
    response.send('<h1>Hello Vinayak, Welcome to NodeJS World!<h1/>')
});

app.get('/api/notes', (request, response) => {
    response.json(notes)
});

// 1. Helper function to generate unique ID
const generateId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => Number(n.id))) : 0;
    return String(maxId + 1);
};

app.post('/api/notes', (request, response) => {

    const body = request.body;

    // Validation guard
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        });
    }

    const note = {
        id: generateId(),
        content: body.content,
        important: Boolean(body.important) || false,
    };

    // 👉 THIS LINE WAS MISSING: Save it into the in-memory array!
    notes = [...notes, note];
    response.json(note);

});

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    const note = notes.find(note => note.id === id);
    if (!note) {
        return response.status(404).end()
    }
    response.json(note)
});

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    notes = notes.filter(note => note.id !== id);
    response.status(204).end()
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server Running on Port : http://localhost:${PORT}`)
});

