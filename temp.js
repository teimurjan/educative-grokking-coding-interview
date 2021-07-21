const fs = require("fs")
const getTestJSONs = (dir) => {
  try {
    const items = fs.readdirSync(dir)
    let files = []
    for (const item of items) {
      if (fs.lstatSync(`${dir}/${item}`).isDirectory())
        files = [...files, ...getTestJSONs(`${dir}/${item}`)]
      else if (item === "test.json") files.push(`${dir}/${item}`)
    }
    return files
  } catch (e) {
    return e
  }
}

const getNewPath = (oldPath) => {
  const oldPathArr = oldPath.split("/")
  oldPathArr.pop()
  return [...oldPathArr, "data.js"].join("/")
}

console.log(
  getTestJSONs("./src").forEach((path) => {
    fs.renameSync(path, getNewPath(path))
    fs.appendFileSync(getNewPath(path), "module.exports = ")
  })
)
