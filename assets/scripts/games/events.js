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
  console.log('event.target is', event.target)
  api.indexGames()
    .then(ui.onIndexGamesSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onShowGame = (event) => {
  event.preventDefault()
  console.log('event.target is', event.target)
  api.showGame()
    .then(ui.onShowGameSuccess)
    .catch(ui.onGameError)
}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame
}
