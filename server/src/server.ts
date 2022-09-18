import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  res.json([
    { id: 1, name: 'cafe'},
    { id: 2, name: 'cafe2'}
  ])
})

app.listen(3500, 'localhost', () => {
  console.log('listening on port 3500')
})