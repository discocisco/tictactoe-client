'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)

  $('#sign-up').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)

  $('#sign-in').trigger('reset')
  $('#signInModalCenter').modal('hide')
}

const onSignOut = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
