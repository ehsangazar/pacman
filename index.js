const GameModel = require('./src/models/GameModel')

const gameObj = new GameModel({
  dimensions: {
    rows: 5,
    cols: 5,
  },
})

gameObj.play('sample1')
