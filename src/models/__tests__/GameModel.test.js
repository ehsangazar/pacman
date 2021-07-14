const GameModel = require('../GameModel')

describe('GameModel', () => {
  test('GameModel constructor', async () => {
    const gameObj = new GameModel({ dimensions: { rows: 5, cols: 5 } })
    expect(gameObj.boardObj.dimensions.rows).toBe(5)
    expect(gameObj.boardObj.dimensions.cols).toBe(5)
    expect(gameObj.pacmanObj).toBeDefined()
  })
  test('GameModel play', async () => {
    const gameObj = new GameModel({ dimensions: { rows: 5, cols: 5 } })
    expect(await gameObj.play('sample1')).toBe(true)
  })
})
