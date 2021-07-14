class PacmanModel {
  constructor({ boardObj }) {
    this.boardObj = boardObj
    this.x = undefined
    this.y = undefined
    this.face = undefined
  }

  place() {}

  move() {}

  left() {}

  right() {}

  report() {}

  run(command) {
    console.log('command', command)
  }
}

module.exports = PacmanModel
