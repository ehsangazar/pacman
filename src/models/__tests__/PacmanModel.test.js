const PacmanModel = require('../PacmanModel')
const BoardModel = require('../BoardModel')

describe('PacmanModel', () => {
  test('PacmanModel constructor', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    expect(pacmanObj.x).toBe(undefined)
    expect(pacmanObj.y).toBe(undefined)
    expect(pacmanObj.face).toBe(undefined)
  })
  test('PacmanModel place', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    expect(pacmanObj.x).toBe(2)
    expect(pacmanObj.y).toBe(2)
    expect(pacmanObj.face).toBe('NORTH')
    expect(pacmanObj.isPlaced).toBe(true)
    expect(pacmanObj.face).toBe('NORTH')
  })
  test('PacmanModel moved north', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(2)
    expect(pacmanObj.y).toBe(3)
    expect(pacmanObj.face).toBe('NORTH')
    expect(pacmanObj.isPlaced).toBe(true)
  })
  test('PacmanModel moved east', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'EAST',
    })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(3)
    expect(pacmanObj.y).toBe(2)
    expect(pacmanObj.face).toBe('EAST')
    expect(pacmanObj.isPlaced).toBe(true)
  })
  test('PacmanModel moved west', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'WEST',
    })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(1)
    expect(pacmanObj.y).toBe(2)
    expect(pacmanObj.face).toBe('WEST')
    expect(pacmanObj.isPlaced).toBe(true)
  })
  test('PacmanModel moved south', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'SOUTH',
    })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(2)
    expect(pacmanObj.y).toBe(1)
    expect(pacmanObj.face).toBe('SOUTH')
    expect(pacmanObj.isPlaced).toBe(true)
  })
  test('PacmanModel not moved', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 4,
      face: 'NORTH',
    })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(2)
    expect(pacmanObj.y).toBe(4)
    expect(pacmanObj.face).toBe('NORTH')
    expect(pacmanObj.isPlaced).toBe(true)
  })
  test('PacmanModel not placed to move', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.move()
    expect(pacmanObj.x).toBe(undefined)
    expect(pacmanObj.y).toBe(undefined)
  })
  test('PacmanModel left', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    pacmanObj.left()
    expect(pacmanObj.face).toBe('WEST')
  })
  test('PacmanModel right', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    pacmanObj.right()
    expect(pacmanObj.face).toBe('EAST')
  })
  test('PacmanModel report', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    pacmanObj.right()
    expect(pacmanObj.report().face).toBe('EAST')
  })
  test('PacmanModel report', async () => {
    this.boardObj = new BoardModel({ x: 5, y: 5 })
    const pacmanObj = new PacmanModel({ boardObj: this.boardObj })
    pacmanObj.place({
      x: 2,
      y: 2,
      face: 'NORTH',
    })
    pacmanObj.run('RIGHT')
    expect(pacmanObj.report().face).toBe('EAST')
  })
})
