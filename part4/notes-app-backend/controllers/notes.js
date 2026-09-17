const notesRouter = require('express').Router();
const onSlashRouter = require('express').Router()
const Note = require('../models/note')


// ================================== //
// Route Handlers
// ================================== //

onSlashRouter.get('/', (request, response) => {
    response.send(`<h1>Notes App Backend => /api/notes</h1>`)
})


// ============================================== //


notesRouter.get('/', (request, response) => {
    Note.find({})
        .then(notes => {
            response.json(notes)
        })
})

// ============================================== //

notesRouter.get('/:id', (request, response, next) => {
    const id = request.params.id
    Note.findById(id)
        .then(note => {
            if (note) {
                response.json(note)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

// ============================================== //


notesRouter.post('/', (request, response, next) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({ error: 'content missing' })
    };

    const note = new Note({
        content: body.content,
        important: body.important || false
    })

    note.save()
        .then(savedNote => {
            response.json(savedNote)
        })
        .catch(error => next(error))
})
// ============================================== //

notesRouter.delete('/:id', (request, response, next) => {

    const id = request.params.id

    Note.findByIdAndDelete(id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))


})

// ============================================== //

notesRouter.put('/:id', (request, response, next) => {
    const id = request.params.id
    const { content, important } = request.body

    const note = {
        content: content,
        important: important
    }

    Note.findByIdAndUpdate(id, note, { returnDocument: 'after', runValidators: true, context: 'query' })
        // {new:"true"} is depreciated , Use `returnDocument: 'after'` instead Mongoose still supports { new: true } for backward compatibility
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
})

module.exports = { notesRouter, onSlashRouter }
