const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Practica 1 Software avanzado prueba')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

