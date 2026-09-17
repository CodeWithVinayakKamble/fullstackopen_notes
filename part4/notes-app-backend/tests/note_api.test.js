const { test, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

// ================================== //
// passed the app to supertest env
// ================================== //
const api = supertest(app)


// ================================== //
// Test cases
// ================================== //
test('all notes are returned', async () => {
  const response = await api.get('/api/notes')

  assert.strictEqual(response.body.length, 0)
})

after(async () => {
  await mongoose.connection.close()
})

