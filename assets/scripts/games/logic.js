'use strict'

const store = require('../store.js')
const api = require('./api.js')

const checkWinner = () => {
  if ((store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') ||
      (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') ||
      (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') ||
      (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') ||
      (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x') ||
      (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') ||
      (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') ||
      (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x')) {
    console.log('player X wins')
    $('#user-message').append('<h3>Player X Wins!</h3>')
    $('#game-board .row .btn').attr('disabled', true)
    store.game.over = true
    api.gameOver(store.game.id)
    return true
  } else if ((store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') ||
      (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') ||
      (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') ||
      (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') ||
      (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o') ||
      (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') ||
      (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') ||
      (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o')) {
    console.log('player O wins')
    $('#user-message').append('<h3>Player O Wins!</h3>')
    $('#game-board .row .btn').attr('disabled', true)
    store.game.over = true
    api.gameOver(store.game.id)
    return true
  } else {
    return false
  }
}

module.exports = {
  checkWinner
}
