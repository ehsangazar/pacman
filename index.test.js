const GameModel = require('./src/models/GameModel')

describe('App', () => {
  test('App sample1', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample1')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('NORTH')
    expect(report.x).toBe(0)
    expect(report.y).toBe(1)
  })
  test('App sample2', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample2')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('WEST')
    expect(report.x).toBe(0)
    expect(report.y).toBe(0)
  })
  test('App sample3', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample3')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('NORTH')
    expect(report.x).toBe(3)
    expect(report.y).toBe(3)
  })
  test('App sample3', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample3')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('NORTH')
    expect(report.x).toBe(3)
    expect(report.y).toBe(3)
  })
  test('App sample4', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample4')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('EAST')
    expect(report.x).toBe(1)
    expect(report.y).toBe(1)
  })
  test('App sample5', async () => {
    const gameObj = new GameModel({
      dimensions: {
        rows: 5,
        cols: 5,
      },
    })
    await gameObj.play('sample5')
    const report = gameObj.pacmanObj.report()
    expect(report.face).toBe('NORTH')
    expect(report.x).toBe(4)
    expect(report.y).toBe(4)
  })
})
