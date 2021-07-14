class BoardModel {
  constructor() {
    this.cells = []
    this.dimensions = {
      rows: 5,
      cols: 5,
    }
  }

  getDimensions() {
    return this.dimensions
  }
}

module.exports = BoardModel
