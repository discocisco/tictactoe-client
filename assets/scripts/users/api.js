'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}
