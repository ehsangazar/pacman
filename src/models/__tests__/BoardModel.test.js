const BoardModel = require('../BoardModel')

describe('BoardModel', () => {
  test('BoardModel constructor', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.dimensions.rows).toBe(5)
    expect(boardObj.dimensions.cols).toBe(5)
  })
  test('BoardModel getDimensions', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.getDimensions().rows).toBe(5)
    expect(boardObj.getDimensions().cols).toBe(5)
  })
  test('BoardModel setDimensions', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    boardObj.setDimensions({ rows: 6, cols: 6 })
    expect(boardObj.getDimensions().rows).toBe(6)
    expect(boardObj.getDimensions().cols).toBe(6)
  })
  test('BoardModel occupyXY not a doable x y', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.occupyXY({ x: 6, y: 6 })).toBe(false)
  })
  test('BoardModel occupyXY doable x y', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.occupyXY({ x: 4, y: 4 })).toBe(true)
  })
  test('BoardModel vacantXY doable x y', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    boardObj.occupyXY({ x: 4, y: 4 })
    expect(boardObj.vacantXY({ x: 4, y: 4 })).toBe(true)
  })
  test('BoardModel isXYNotOccupied', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.isXYNotOccupied({ x: 4, y: 4 })).toBe(true)
  })
  test('BoardModel isXYInTheBoard', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.isXYInTheBoard({ x: 4, y: 4 })).toBe(true)
  })
  test('BoardModel isXYInTheBoard outside the board', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.isXYInTheBoard({ x: 4, y: 6 })).toBe(false)
  })
  test('BoardModel canOccupyXY', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    expect(boardObj.canOccupyXY({ x: 4, y: 4 })).toBe(true)
  })
  test('BoardModel isOccupied so can not go', async () => {
    const boardObj = new BoardModel({ dimensions: { rows: 5, cols: 5 } })
    boardObj.occupyXY({ x: 4, y: 4 })
    expect(boardObj.canOccupyXY({ x: 4, y: 4 })).toBe(false)
  })
})
