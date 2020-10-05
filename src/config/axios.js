const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.AUTHORIZATION_KEY
  }
})

module.exports = api
