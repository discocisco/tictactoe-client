'use strict'

const store = require('../store.js')
const gameLogic = require('./logic.js')

const onCreateGameSuccess = (responseData) => {
  $('#player-turn').html('<h3>Player X\'s turn</h3>')
  $('#show-game').html('')
  $('#game-board').show()
  store.game = responseData.game
  $('#game-board .row .btn').html('')
  $('#user-message').html(`Successfully created a new game! Game ID is ${store.game.id}`)
  $('#game-board .row .btn').removeAttr('disabled')
}

const onIndexGamesSuccess = (responseData) => {
  $('#game-board').hide()
  $('#player-turn').html('')
  $('#show-game').html('')
  store.games = responseData.games
  $('#user-message').html(`<h3>Total games created: ${store.games.length}</h3>`)
  store.games.forEach(game => {
    const gameHTML = (`
      <div class="games-list col-4 col-md-3 col-lg-3">
        <h4>Game ID: <button type="button" id="game-${game.id}" class="get-game btn btn-primary">${game.id}</button></h4>
        <p>Finished?: ${game.over}</p>
      </div>
    `)
    $('#show-game').append(gameHTML)
  })
}

const onShowGameSuccess = (responseData) => {
  store.game = responseData.game
  $('#show-game').html('')
  $('#user-message').html(`Successfully loaded previous game! Game ID is ${store.game.id}`)
  $('#game-board').show()
  $('#game-board .row .btn').html('')
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i]) {
      $('#box-' + i).attr('disabled', true)
      $('#box-' + i).html(store.game.cells[i])
    } else {
      $('#box-' + i).removeAttr('disabled')
    }
  }
  gameLogic.checkWinner()
}

const onShowGameError = (responseData) => {
  $('#user-message').html('<h3>Select the game you want to view!</h3>')
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
  $('#game-board').hide()
}

const onGameError = () => {
  $('#user-message').html('Encountered game error, please try again :(')
}

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess,
  onShowGameSuccess,
  onShowGameError,
  onUpdateGameSuccess,
  onGameError,
  onPageResetSuccess
}
