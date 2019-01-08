'use strict'

const store = require('../store.js')
const gameLogic = require('./logic.js')

const onCreateGameSuccess = (responseData) => {
  $('#player-turn').html('<h3>Player X\'s turn</h3>')
  $('#game-board').show()
  store.game = responseData.game
  $('#game-board .row .btn').html('')
  $('#user-message').html(`Successfully created a new game! Game ID is ${store.game.id}`)
  $('#game-board .row .btn').removeAttr('disabled')
}

const onIndexGamesSuccess = (responseData) => {
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
  $('#show-game').html('')
  store.game = responseData.game
  console.log('responsedata is', responseData)
  console.log('store is', store.game.cells)
}

const onUpdateGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log('storegame is', store.game)
  console.log('cell is', store.game.cells)
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i]) {
      $('#box-' + i).attr('disabled', true)
      $('#box-' + i).html(store.game.cells[i])
    }
  }
  gameLogic.checkWinner()
}

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess,
  onShowGameSuccess,
  onUpdateGameSuccess
}
