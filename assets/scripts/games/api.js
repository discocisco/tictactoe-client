'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = (id) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (id) => {
  const activeX = store.game.cells.filter(cell => cell === 'x')
  const activeO = store.game.cells.filter(cell => cell === 'o')
  if (activeX.length === activeO.length) {
    $('#player-turn').html('<h3>Player O\'s turn</h3>')
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: {
        'game': {
          'cell': {
            'index': id,
            'value': 'x'
          }
        }
      }
    })
  } else {
    $('#player-turn').html('<h3>Player X\'s turn</h3>')
    return $.ajax({
      url: config.apiUrl + '/games/' + store.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: {
        'game': {
          'cell': {
            'index': id,
            'value': 'o'
          }
        }
      }
    })
  }
}

const gameOver = (id) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

module.exports = {
  createGame,
  indexGames,
  showGame,
  updateGame,
  gameOver
}
