'use strict'

const store = require('../store.js')

const onCreateGameSuccess = (responseData) => {
  console.log('Gamedata is', responseData)
  store.game = responseData.game
  $('#user-message').html('Successfully created a new game!')
}

module.exports = {
  onCreateGameSuccess
}
