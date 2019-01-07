'use strict'

const store = require('../store.js')

const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
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

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess,
  onShowGameSuccess
}
