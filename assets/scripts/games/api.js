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
  console.log('activeX is', activeX)
  const activeO = store.game.cells.filter(cell => cell === 'o')
  console.log('activeX is', activeO)
  if (activeX.length === activeO.length) {
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
          },
          'over': false
        }
      }
    })
  } else {
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
          },
          'over': false
        }
      }
    })
  }
}

module.exports = {
  createGame,
  indexGames,
  showGame,
  updateGame
}
