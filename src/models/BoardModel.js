class BoardModel {
  constructor({ dimensions }) {
    this.dimensions = dimensions
    this.cells = []
  }

  getDimensions() {
    return this.dimensions
  }

  setDimensions(dimensions) {
    this.dimensions = dimensions
  }

  occupyXY({ x, y }) {
    if (!this.cells[x]) this.cells[x] = []
    if (!this.canOccupyXY({ x, y })) return false
    this.cells[x][y] = 1
    return true
  }

  vacantXY({ x, y }) {
    if (!this.cells[x]) this.cells[x] = []
    this.cells[x][y] = 0
    return true
  }

  isXYNotOccupied({ x, y }) {
    if (!this.cells[x]) this.cells[x] = []
    if (!this.cells[x][y]) {
      return true
    }
    return false
  }

  isXYInTheBoard({ x, y }) {
    if (x < 5 && y < 5 && x >= 0 && y >= 0) {
      return true
    }
    return false
  }

  canOccupyXY({ x, y }) {
    if (this.isXYNotOccupied({ x, y }) && this.isXYInTheBoard({ x, y }))
      return true
    return false
  }
}

module.exports = BoardModel
