'use strict'

const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  $('#user-message').html('Successfully signed up!')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  $('#user-message').html(`Successfully logged in as: ${store.user.email}`)
}

const onChangePasswordSuccess = () => {
  $('#user-message').html(`Successfully changed password for: ${store.user.email}`)
}

const onSignOutSuccess = () => {
  $('#user-message').html(`Successfully signed out of: ${store.user.email}`)
}

const onError = () => {
  $('#user-message').css('color', 'red')
  $('#user-message').html('Encountered error, please try again :(')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
