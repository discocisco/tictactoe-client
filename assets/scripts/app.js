'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./users/events.js')
const gameEvents = require('./games/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$('#changepw-link').hide()
$('#sign-out').hide()
$('#game-board').hide()

$(() => {
  // your JS code goes here
  $('#home-link').on('click', gameEvents.onPageReset)
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-pw').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('#show-game .games-list .get-game').on('click', gameEvents.onShowGame)
  $('#game-board').on('click', gameEvents.onUpdateGame)
})
