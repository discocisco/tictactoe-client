'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store.js')

const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onIndexGames = (event) => {
  event.preventDefault()
  api.indexGames()
    .then(ui.onIndexGamesSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

module.exports = {
  onCreateGame,
  onIndexGames
}
