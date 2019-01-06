'use strict'

const store = require('../store.js')

const onCreateGameSuccess = (responseData) => {
  console.log('Gamedata is', responseData)
  store.game = responseData.game
  $('#user-message').html('Successfully created a new game!')
  $('#game-board').html(`
  <div class="row">
    <button id="box-1" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-2" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-3" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
  </div>

  <div class="row">
    <button id="box-4" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-5" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-6" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
  </div>

  <div class="row">
    <button id="box-7" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-8" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
    <button id="box-9" type="button" class="btn btn-primary col-4 col-md-4 box" aria-disabled="false"></button>
  </div>`)
}

const onIndexGamesSuccess = (responseData) => {
  store.games = responseData.games
  store.games.forEach(game => {
    const gameHTML = (`
      <p>Game ID: <button type="button" id="game-${game.id}">${game.id}</button></h4>
      <p>Finished?: ${game.over}</p>
    `)
    $('#game-board').append(gameHTML)
  })
  console.log('indexGames is', responseData)
}

module.exports = {
  onCreateGameSuccess,
  onIndexGamesSuccess
}
