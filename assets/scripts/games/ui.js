'use strict'

const store = require('../store.js')
const gameLogic = require('./logic.js')

const onCreateGameSuccess = (responseData) => {
  $('#player-turn').html('<h3>Player X\'s turn</h3>')
  $('#game-board').show()
  $('.game-title').hide()
  store.game = responseData.game
  $('#game-board .row .btn').html('')
  $('#user-message').html(`Successfully created a new game! Game ID is ${store.game.id}`)
  $('#game-board .row .btn').removeAttr('disabled')
}

const onIndexGamesSuccess = (responseData) => {
  $('#game-board').hide()
  store.games = responseData.games
  store.games.forEach(game => {
    const gameHTML = (`
      <p>Game ID: <button type="submit" id="game-${game.id}" class="get-game btn btn-primary">${game.id}</button></p>
      <p>Finished?: ${game.over}</p>
    `)
    $('#show-game').append(gameHTML)
  })
}

const onShowGameSuccess = (responseData) => {
  store.game = responseData.game
  $('.game-title').hide()
  $('#show-game').html('')
  $('#user-message').html(`Successfully loaded previous game! Game ID is ${store.game.id}`)
  $('#game-board').show()
  $('#game-board .row .btn').removeAttr('disabled')
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i]) {
      $('#box-' + i).attr('disabled', true)
      $('#box-' + i).html(store.game.cells[i])
    }
  }
  gameLogic.checkWinner()
}

const onUpdateGameSuccess = (responseData) => {
  store.game = responseData.game
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i]) {
      $('#box-' + i).attr('disabled', true)
      $('#box-' + i).html(store.game.cells[i])
    }
  }
  gameLogic.checkWinner()
}

const onPageResetSuccess = () => {
  $('#show-game').html('')
  $('#player-turn').html('')
  $('#user-message').html('')
  $('.game-title').show()
  $('#game-board').hide()
}

const onGameError = () => {
  $('#user-message').html('Encountered game error, please try again :(')
}

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess,
  onShowGameSuccess,
  onUpdateGameSuccess,
  onGameError,
  onPageResetSuccess
}
