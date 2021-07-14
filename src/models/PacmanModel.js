const FACES = ['NORTH', 'EAST', 'SOUTH', 'WEST']

class PacmanModel {
  constructor({ boardObj }) {
    this.boardObj = boardObj
    this.x = undefined
    this.y = undefined
    this.face = undefined
    this.isPlaced = false
  }

  place({ x, y, face }) {
    if (!this.boardObj.canOccupyXY({ x, y })) return false
    this.x = Number(x)
    this.y = Number(y)
    this.face = face
    this.isPlaced = true
    this.boardObj.occupyXY({ x, y })
    return true
  }

  move() {
    if (!this.isPlaced) return false
    switch (this.face) {
      case 'NORTH':
        if (!this.boardObj.canOccupyXY({ x: this.x, y: this.y + 1 }))
          return false
        this.boardObj.vacantXY({ x: this.x, y: this.y })
        this.boardObj.occupyXY({ x: this.x, y: this.y + 1 })
        this.y += 1
        return true
      case 'SOUTH':
        if (!this.boardObj.canOccupyXY({ x: this.x, y: this.y - 1 }))
          return false
        this.boardObj.vacantXY({ x: this.x, y: this.y })
        this.boardObj.occupyXY({ x: this.x, y: this.y - 1 })
        this.y -= 1
        return true
      case 'EAST':
        if (!this.boardObj.canOccupyXY({ x: this.x + 1, y: this.y }))
          return false
        this.boardObj.vacantXY({ x: this.x, y: this.y })
        this.boardObj.occupyXY({ x: this.x + 1, y: this.y })
        this.x += 1
        return true
      case 'WEST':
        if (!this.boardObj.canOccupyXY({ x: this.x - 1, y: this.y }))
          return false
        this.boardObj.vacantXY({ x: this.x, y: this.y })
        this.boardObj.occupyXY({ x: this.x - 1, y: this.y })
        this.x -= 1
        return true
    }
  }

  left() {
    if (!this.isPlaced) return false
    const faceIndex = FACES.findIndex((face) => face === this.face)
    if (faceIndex - 1 < 0) {
      this.face = FACES[3]
    } else {
      this.face = FACES[faceIndex - 1]
    }
    return true
  }

  right() {
    if (!this.isPlaced) return false
    const faceIndex = FACES.findIndex((face) => face === this.face)
    if (faceIndex + 1 > 3) {
      this.face = FACES[0]
    } else {
      this.face = FACES[faceIndex + 1]
    }
    return true
  }

  report() {
    if (!this.isPlaced) return false
    const state = { x: this.x, y: this.y, face: this.face }
    return state
  }

  run(command) {
    if (command.startsWith('PLACE')) {
      const xyFace = command.replace('PLACE ', '').split(',')
      this.place({ x: xyFace[0], y: xyFace[1], face: xyFace[2] })
    }
    if (command.includes('MOVE')) {
      this.move()
    }
    if (command.includes('LEFT')) {
      this.left()
    }
    if (command.includes('RIGHT')) {
      this.right()
    }
    if (command.includes('REPORT')) {
      this.report()
    }
    return false
  }
}

module.exports = PacmanModel
