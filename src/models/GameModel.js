const PacmanModel = require('./PacmanModel')
const BoardModel = require('./BoardModel')
const fileReader = require('../utils/fileReader')

class GameModel {
  constructor({ dimensions }) {
    this.boardObj = new BoardModel({ dimensions })
    this.pacmanObj = new PacmanModel({ boardObj: this.boardObj })
  }

  async play(commandsFileName) {
    const comands = await fileReader(commandsFileName)
    await comands.forEach((command) => {
      this.pacmanObj.run(command)
    })
    return true
  }
}

module.exports = GameModel
