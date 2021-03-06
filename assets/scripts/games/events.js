'use strict'
// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onIndexGames = event => {
  event.preventDefault()
  api.indexGames()
    .then(ui.onIndexGamesSuccess)
    .catch(ui.onGameError)

  $('#gameStartModalCenter').modal('hide')
}

const onShowGame = event => {
  event.preventDefault()
  const gameID = event.target.textContent
  api.showGame(gameID)
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameError)
}

const onUpdateGame = event => {
  event.preventDefault()
  const cellID = event.target.id[4]
  api.updateGame(cellID)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onGameError)
}

const onPageReset = event => {
  event.preventDefault()
  ui.onPageResetSuccess()
}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame,
  onUpdateGame,
  onPageReset
}
