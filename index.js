const GameModel = require('./src/models/GameModel')

console.info('Pacman starts')

const gameObj = new GameModel({
  dimensions: {
    rows: 5,
    cols: 5,
  },
})

gameObj.play('sample1')

console.info('Pacman ends')
