'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = (event) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame
}
