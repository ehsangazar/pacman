const PacmanModel = require('../PacmanModel')
const BoardModel = require('../BoardModel')

describe('PacmanModel', () => {
  test('PacmanModel constructor', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ dimensions: { rows: 5, cols: 5 } })
    expect(pacmanObj.x).toBe(undefined)
  })
})
