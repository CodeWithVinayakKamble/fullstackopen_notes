const notesRouter = require('express').Router()
const Note = require('../models/note')


// ================================== //
// Route Handlers
// ================================== //



// ============================================== //


// notesRouter.get('/', (request, response) => {
//   Note.find({})
//     .then(notes => {
//       response.json(notes)
//     })
// })

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes)
})

// ============================================== //

// notesRouter.get('/:id', (request, response, next) => {
//   const id = request.params.id
//   Note.findById(id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })

notesRouter.get('/:id', async (request, response) => {

  const id = request.params.id
  const note = await Note.findById(id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }

})

// ============================================== //


// notesRouter.post('/', (request, response, next) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({ error: 'content missing' })
//   };

//   const note = new Note({
//     content: body.content,
//     important: body.important || false
//   })

//   note.save()
//     .then(savedNote => {
//       response.json(savedNote)
//     })
//     .catch(error => next(error))
// })

notesRouter.post('/', async (request, response) => {


  const body = request.body

  if (!body.content) {
    return response.status(400).json({ error: 'content missing' })
  }

  const newNote = new Note({
    content: body.content,
    important: body.important || false
  })

  const savedNote = await newNote.save()
  response.status(201).json(savedNote)
})


// ============================================== //

// notesRouter.delete('/:id', (request, response, next) => {

//   const id = request.params.id

//   Note.findByIdAndDelete(id)
//     .then(() => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))


// })

// Because 204 No Content sends no body (.end()), you don't even need to save the result into a variable deleteId! 
notesRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  await Note.findByIdAndDelete(id)
  response.status(204).end()

})

// ============================================== //

// notesRouter.put('/:id', (request, response, next) => {
//   const id = request.params.id
//   const { content, important } = request.body

//   const note = {
//     content: content,
//     important: important
//   }

//   Note.findByIdAndUpdate(id, note, { returnDocument: 'after', runValidators: true, context: 'query' })
//     // {new:"true"} is depreciated , Use `returnDocument: 'after'` instead Mongoose still supports { new: true } for backward compatibility
//     .then(updatedNote => {
//       response.json(updatedNote)
//     })
//     .catch(error => next(error))
// })

notesRouter.put('/:id', async (request, response) => {

  const id = request.params.id
  const { content, important } = request.body

  const oldNoteWithUpdatedContent = {
    content: content,
    important: important
  }

  // {new:"true"} is depreciated , Use `returnDocument: 'after'` instead Mongoose still supports { new: true } for backward compatibility
  const updatedNote = await Note.findByIdAndUpdate(id, oldNoteWithUpdatedContent, { returnDocument: 'after', runValidators: true, context: 'query' })

  response.json(updatedNote)


})

module.exports = { notesRouter }
