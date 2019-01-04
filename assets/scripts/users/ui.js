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

module.exports = {
  onSignUpSuccess,
  onSignInSuccess
}
