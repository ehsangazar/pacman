class BoardModel {
  constructor() {
    this.dimensions = {
      rows: 5,
      cols: 5,
    }
  }

  getDimensions() {
    return this.dimensions
  }

  setDimensions(dimensions) {
    this.dimensions = dimensions
  }
}

module.exports = BoardModel
