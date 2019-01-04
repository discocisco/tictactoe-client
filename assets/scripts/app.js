'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./users/events.js')
// const gameEvents = require('./games/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  // $('#change-password').on('submit', userEvents.onChangePassword)
  // $('#sign-out').on('click', userEvents.onSignOut)
  // $('#index-games').on('click', gameEvents.onIndexGames)
  // $('#create-game').on('submit', gameEvents.onCreateGame)
  // $('#show-game').on('submit', gameEvents.onShowGame)
  // $('#update-game').on('click', gameEvents.onUpdateGame)
})
