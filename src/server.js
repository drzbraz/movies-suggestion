const { resolve } = require('path')
require('dotenv').config({ path: resolve(__dirname, './env/.env') })

const express = require('express')
const server = express()
const controllerMovie = require('./controller/controller-movie')

controllerMovie.getIdMovie()

server.listen(3001, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
