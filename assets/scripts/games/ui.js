'use strict'

const store = require('../store.js')

const onCreateGameSuccess = (responseData) => {
  console.log('Gamedata is', responseData)
  store.game = responseData.game
  $('#user-message').html('Successfully created a new game!')
  $('#game-board').html(`<div class="row">
    <div id="box1" class="col-4 col-md-4 box">Box 1</div>
    <div id="box2" class="col-4 col-md-4 box">Box 2</div>
    <div id="box3" class="col-4 col-md-4 box">Box 3</div>
  </div>

  <div class="row">
    <div id="box4" class="col-4 col-md-4 box">Box 4</div>
    <div id="box5" class="col-4 col-md-4 box">Box 5</div>
    <div id="box6" class="col-4 col-md-4 box">Box 6</div>
  </div>

  <div class="row">
    <div id="box7" class="col-4 col-md-4 box">Box 7</div>
    <div id="box8" class="col-4 col-md-4 box">Box 8</div>
    <div id="box9" class="col-4 col-md-4 box">Box 9</div>
  </div>`)
}

const onIndexGamesSuccess = (responseData) => {
  store.games = responseData.games
  store.games.forEach(game => {
    const gameHTML = (`
      <p>Game ID: <button type="button" id="game-${game.id}">${game.id}</button>3</h4>
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
