'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onIndexGames = event => {
  event.preventDefault()
  console.log('event.target is', event.target)
  api.indexGames()
    .then(ui.onIndexGamesSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onShowGame = event => {
  event.preventDefault()
  console.log('event.target is', event.target)
  const gameID = event.target.textContent
  api.showGame(gameID)
    .then(ui.onShowGameSuccess)
    .catch(ui.onGameError)
}

const onUpdateGame = event => {
  event.preventDefault()
  console.log('event.target is', event.target)
  const cellID = event.target.textContent
  api.updateGame(cellID)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onGameError)
}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame,
  onUpdateGame
}
