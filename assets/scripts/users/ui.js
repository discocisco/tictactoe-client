'use strict'

// const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').html('Successfully signed up!')
}

module.exports = {
  onSignUpSuccess
}
