const fs = require('fs')

const fileReader = async (fileName) => {
  const filePath = `./commands/${fileName}.txt`
  if (await fs.existsSync(filePath)) {
    return await fs
      .readFileSync(filePath, 'utf8')
      .split('\n')
      .filter((line) => line !== '')
      .map((line) => line.trim())
  }
  return null
}

module.exports = fileReader
