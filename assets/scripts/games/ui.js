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
      <button type="button" id="game-${game.id}" class="show-game btn btn-primary">Game ${game.id}</button>
      <p>Finished?: ${game.over}</p>
    `)
    $('#game-board').append(gameHTML)
  })
}

const onShowGameSuccess = (responseData) => {
  store.game = responseData.game
  console.log('responsedata is', responseData)
  for (let i = 0; i < store.game.cells.length; i++) {
    let gameHTML
    if (store.game.cells[i] === '') {
      gameHTML = (`
        <button id="box-${i}" type="button" btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
        `)
    } else {
      gameHTML = (`
        <button id="box-${i}" type="button" btn btn-primary col-4 col-md-4 box" aria-disabled="true">${store.game.cells[i]}</button>
        `)
    }
    $('#game-board').append(gameHTML)
  }
}

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess,
  onShowGameSuccess
}
