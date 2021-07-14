const fileReader = require('../fileReader')

describe('fileReader', () => {
  test('fileReader should return null', async () => {
    expect(await fileReader()).toBe(null)
  })
  test('fileReader should the right result', async () => {
    expect(await (await fileReader('sample1')).length).toBe(3)
  })
})
