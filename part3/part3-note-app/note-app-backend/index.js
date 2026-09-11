// ================================== //
// Imports & Dependencies
// ================================== //
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Note = require('./models/note')

// ================================== //
// App Initialization
// ================================== //
const app = express()


// ================================== //
// Pre-Route Middlewares
// ================================== //
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
morgan.token('body', req => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

// ================================== //
// Route Handlers
// ================================== //
app.get('/api/notes', (request, response) => {
  Note.find({})
    .then(notes => {
      response.json(notes)
    })
})
// ============================================== //

app.post('/api/notes', (request, response, next) => {
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

app.get('/api/notes/:id', (request, response, next) => {
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

app.delete('/api/notes/:id', (request, response, next) => {

  const id = request.params.id

  Note.findByIdAndDelete(id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))


})

// ============================================== //

app.put('/api/notes/:id', (request, response, next) => {
  const id = request.params.id
  const { content, important } = request.body

  const note = {
    content: content,
    important: important
  }

  Note.findByIdAndUpdate(id, note, { new: true, runValidators: true, context: 'query' })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

// ================================== //
// Error & Fallback Middlewares
// ================================== //

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

// ============================================== //

const errorHandler = (error, request, response, next) => {

  console.log(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)
// If you put errorHandler at the top before your routes, Express would never be able to catch errors from your routes because the request hasn't even reached the routes yet!

// That is why errorHandler must always be the last app.use() at the bottom of your file.


// ================================== //
// Server Listener
// ================================== //

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is live on : http://localhost:${PORT}`)
})