const PacmanModel = require('./PacmanModel')
const BoardModel = require('./BoardModel')

class GameModel {
  constructor({ dimensions }) {
    this.boardObj = new BoardModel(dimensions)
    this.pacmanObj = new PacmanModel({ boardObj: this.boardObj })
  }

  play(commandsFileName) {
    console.log('commandFileName', commandsFileName)
  }
}

module.exports = GameModel
