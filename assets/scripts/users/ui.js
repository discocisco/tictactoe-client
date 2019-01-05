'use strict'

const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').html('Successfully signed up!')
}

const onSignInSuccess = (responseData) => {
  console.log(responseData)
  store.user = responseData.user
  $('#user-message').html(`Successfully logged in as: ${store.user.email}`)
  console.log('Store is:', store)
}

const onChangePasswordSuccess = () => {
  $('#user-message').html(`Successfully changed password for: ${store.user.email}`)
  console.log('Store is:', store)
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
