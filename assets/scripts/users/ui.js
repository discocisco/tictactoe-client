'use strict'

const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  $('#user-message').html('Successfully signed up!')
}

const onSignInSuccess = (responseData) => {
  $('#signup-link').hide()
  $('#signin-link').hide()
  $('.signin-msg').hide()
  $('#gameStart').show()
  $('#player-turn').html('')
  $('#player-turn').show()
  $('#changepw-link').show()
  $('#sign-out').show()
  store.user = responseData.user
  $('#user-message').html(`Successfully logged in as: ${store.user.email}`)
  $('#gameStart').removeAttr('disabled')
}

const onChangePasswordSuccess = () => {
  $('#user-message').html(`Successfully changed password for: ${store.user.email}`)
}

const onSignOutSuccess = () => {
  $('#sign-out').hide()
  $('#changepw-link').hide()
  $('#game-board').hide()
  $('#player-turn').hide()
  $('#gameStart').hide()
  $('#show-game').hide()
  $('.signin-msg').show()
  $('.game-name').show()
  $('#signup-link').show()
  $('#signin-link').show()
  $('#user-message').html(`Successfully signed out of: ${store.user.email}`)
  $('#game-board .row .btn').html('')
  $('#game-board .row .btn').attr('disabled', true)
  $('#gameStart').attr('disabled', true)
}

const onError = () => {
  $('#user-message').html('Encountered error, please try again :(')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
